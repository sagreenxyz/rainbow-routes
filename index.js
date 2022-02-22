const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send(`
        <body>
            <h1>Hello World</h1>
        </body>
    `);
})

app.listen(process.env.PORT, () => {
    console.log('I am here!...');
});

