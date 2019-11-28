const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');


const puerto = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales/');

app.set('view engine', 'hbs');

//helpers



app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'Edgar',


    });


});

app.get('/data', (req, res) => {
    res.send('Hola data')


});

app.get('/about', (req, res) => {
    res.render('about', {


    });
});


app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`)

})