const axios = require('axios');
const fs = require('fs-extra');
const { generateChartHTML, generateFullHTML } = require('./src/htmlTemplate');

const urls = [
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json",
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json",
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json"
];

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        return null;
    }
}

async function generateBillboardCharts() {
    const chartTitles = ['HOT 100', 'ARTIST 100', 'BILLBOARD 200'];
    const chartsHTML = [];

    for (let i = 0; i < urls.length; i++) {
        const data = await fetchData(urls[i]);
        if (data) {
            chartsHTML.push(generateChartHTML(data, chartTitles[i]));
        }
    }

    const fullHTML = generateFullHTML(chartsHTML);

    await fs.writeFile('billboard_charts.html', fullHTML);
    console.log('Billboard charts have been generated as billboard_charts.html');
}

generateBillboardCharts();