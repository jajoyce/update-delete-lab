const express = require('express');
const router = express.Router();
const models = require('../models');

const countries = models.Country;

router.get('/', (req, res) => {
    res.render('index.ejs', { countries });
});

router.post('/', (req, res) => {
    countries.push(req.body);
    res.redirect('/countries');
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/:countryIndex', (req, res) => {
    const context = {
        country: countries[req.params.countryIndex], 
        index: req.params.countryIndex
    };
    res.render('show.ejs', context);
});

router.get('/:countryIndex/edit', (req, res) => {
    const context = {
        country: countries[req.params.countryIndex], 
        index: req.params.countryIndex
    };
    res.render('edit.ejs', context);
});

router.put('/:countryIndex', (req, res) => {
    countries[req.params.countryIndex] = req.body;
    res.redirect(`/countries/${req.params.countryIndex}`);
});

router.delete('/:countryIndex', (req, res) => {
    countries.splice(req.params.countryIndex, 1);
    res.redirect('/countries');
});


module.exports = router;
