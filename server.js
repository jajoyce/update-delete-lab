const express = require('express');
const app = express();
const PORT = 4000;

const countries = require('./models/countries.js')

app.get('/', (req, res) => {
    res.send('This is the home page. This is working.');
});

app.get('/countries', (req, res) => {
    res.send(countries);
});

app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
