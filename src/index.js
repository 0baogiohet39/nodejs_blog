const path = require('path');
const express = require('express');
const { engine } = require("express-handlebars"); // V6.0.2 levelup
var morgan = require('morgan');

const app = express();
const port = 3000;

// proces file static in public folder
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs' // Change .handlebars to .hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Render template home
app.get('/', (req, res, next) => {
    res.render('home', {layot: false});
});

// Render template News
app.get('/news', (req, res) => {
    console.log(req.query.q);
    res.render('news');
});

// Render template Search
app.get('/search', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    res.render('search');
});

// Listen port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});