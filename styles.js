module.exports = `
body {
    font-family: 'Roboto Condensed', Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #fff;
    color: #000;
}
.chart {
    max-width: 1200px;
    margin: 0 auto 40px;
    border: 2px solid #000;
    padding: 20px;
}
.header {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
}
.logo {
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.title {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-weight: bold;
    margin: 10px 0;
    letter-spacing: 5px;
}
.date {
    font-style: italic;
    font-size: 14px;
    margin-top: 10px;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}
th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-transform: uppercase;
}
.rank, .last-week, .peak, .weeks {
    width: 60px;
    text-align: center;
}
.title-column {
    font-weight: bold;
}
.artist-column {
    font-style: italic;
}
.no1-indicator {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}
.no1-indicator span {
    display: inline-block;
    padding: 0 10px;
}
`;