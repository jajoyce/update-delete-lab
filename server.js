const express = require('express');
const app = express();
const PORT = 4000;

app.use('/static', express.static('public'));

const countries = require('./models/countries.js');

app.get('/', (req, res) => {
    res.render('index.ejs', { countries });
});


app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
