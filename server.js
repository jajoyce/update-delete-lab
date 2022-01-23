const express = require('express');
const app = express();
const methodOverride = require('method-override');
const controllers = require('./controllers');
const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/countries', controllers.country);

app.get('/*', (req, res) => {
    res.redirect('/countries');
});

app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
