// https://digitalskills.instructure.com/courses/3775/pages/rainbow-routes-6-dot-3-2?module_item_id=464419
// https://digitalskills.instructure.com/courses/3775/pages/try-postman-6-dot-3-3?module_item_id=464447

require('dotenv').config();
const express = require('express');

const app = express();

function stringCapFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1)
}

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

// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color;
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${stringCapFirstLetter(myColor)} Page</h1>
        </body>
    `)
})

app.post('/:color', (req, res) => {
    res.send('Hello world');
});

app.listen(process.env.PORT, () => {
    console.log('I am here!...');
});
