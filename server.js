const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const countries = require('./models/countries.js');

app.get('/countries', (req, res) => {
    res.render('index.ejs', { countries });
});

app.get('/countries/:countryIndex', (req, res) => {
    const context = {
        country: countries[req.params.countryIndex], 
        index: req.params.countryIndex
    };
    res.render('show.ejs', context);
});

app.get('/countries/:countryIndex/edit', (req, res) => {
    const context = {
        country: countries[req.params.countryIndex], 
        index: req.params.countryIndex
    };
    res.render('edit.ejs', context);
});

app.put('/countries/:countryIndex', (req, res) => {
    countries[req.params.countryIndex] = req.body;
    res.redirect('/countries');
});

app.delete('/countries/:countryIndex', (req, res) => {
    countries.splice(req.params.countryIndex, 1);
    res.redirect('/countries');
});

app.get('/*', (req, res) => {
    res.redirect('/countries');
});


app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
