require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `);
})

// Teal Page
app.get('/teal', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: teal;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: teal;">Teal Page</h1>
        </body>
    `)
})

// Crimson Page
app.get('/crimson', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: crimson;">Crimson Page</h1>
        </body>
    `)
})

app.listen(process.env.PORT, () => {
    console.log('I am here!...');
});
