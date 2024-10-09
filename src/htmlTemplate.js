const styles = require('../styles');

function generateHTMLTemplate() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Billboard Charts</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">
    <style>${styles}</style>
</head>
<body>
    <div id="charts-container"></div>
    <script>
    const urls = [
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json",
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json",
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json"
    ];
    const chartTitles = ['HOT 100', 'ARTIST 100', 'BILLBOARD 200'];

    function generateChartHTML(data, chartTitle) {
        let html = \`
        <div class="chart">
            <div class="header">
                <div class="logo">Billboard</div>
                <div class="title">\${chartTitle}</div>
                <div class="date">FOR WEEK ENDING \${data.date}</div>
            </div>
            <table>
                <tr>
                    <th class="rank">THIS WEEK</th>
                    <th class="last-week">LAST WEEK</th>
                    <th class="peak">PEAK</th>
                    <th class="weeks">WKS ON CHART</th>
                    <th>\${chartTitle === 'HOT 100' ? 'TITLE' : 'NAME'}</th>
                    \${chartTitle === 'HOT 100' ? '<th>ARTIST</th>' : ''}
                </tr>
        \`;

        data.data.forEach((item, index) => {
            const rowClass = index === 0 ? 'no1' : '';
            html += \`
            <tr class="\${rowClass}">
                <td class="rank">\${item.rank}</td>
                <td class="last-week">\${item.last_week_rank || '-'}</td>
                <td class="peak">\${item.peak_rank}</td>
                <td class="weeks">\${item.weeks_on_chart}</td>
                <td class="title-column">\${item.title || item.name}</td>
                \${chartTitle === 'HOT 100' ? \`<td class="artist-column">\${item.artist}</td>\` : ''}
            </tr>\`;
        });

        html += \`
            </table>
        </div>\`;

        return html;
    }

    async function fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }

    async function populateCharts() {
        const chartsContainer = document.getElementById('charts-container');
        for (let i = 0; i < urls.length; i++) {
            try {
                const data = await fetchData(urls[i]);
                const chartHTML = generateChartHTML(data, chartTitles[i]);
                chartsContainer.innerHTML += chartHTML;
            } catch (error) {
                console.error(\`Error fetching data for \${chartTitles[i]}:\`, error);
            }
        }
    }

    populateCharts();
    </script>
</body>
</html>`;
}
module.exports = { generateHTMLTemplate };
