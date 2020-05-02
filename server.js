const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + `/public`));
//app.use(express.static(__dirname + `/views/about`));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//app.get('/', (req, res) => {
app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'andresch-dev',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Puerto ${port}`);
});