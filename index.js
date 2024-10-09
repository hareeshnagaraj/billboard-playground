const axios = require('axios');
const Table = require('cli-table3');

async function fetchAndPrintBillboardData() {
    const url = "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json";

    try {
        // Fetch the JSON data
        const response = await axios.get(url);
        const data = response.data;

        // Extract the artist data
        const artists = data.data;

        // Create the table
        const table = new Table({
            head: ['Rank', 'Name', 'Last Week', 'Peak Rank', 'Weeks on Chart'],
            style: {
                head: ['cyan'],
                border: ['gray']
            }
        });

        // Add data to the table
        artists.forEach(artist => {
            table.push([
                artist.rank,
                artist.name,
                artist.last_week_rank !== null ? artist.last_week_rank : 'N/A',
                artist.peak_rank,
                artist.weeks_on_chart
            ]);
        });

        // Print the table
        console.log(table.toString());

    } catch (error) {
        if (error.response) {
            console.error(`Error fetching data: ${error.response.status}`);
        } else if (error.request) {
            console.error("Error: No response received");
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

fetchAndPrintBillboardData();