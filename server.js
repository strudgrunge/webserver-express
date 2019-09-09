const express = require('express')
const app = express(); //Esto nos permite utilizar 
//express como deseemos
//Middleware: es una instruccion o callback 
//que se va a ejecutar siempre, no importa la url pedida
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
//Lo que incluye esto es publico
//##Express HBS engine, sirve para que la web sea 
//dinamica
hbs.registerPartials(__dirname + '/views/parciales');

//Los parcials son trozos de HTML reutilizables
//__dirname permite que la url no sea fija, no importa el path, 
//le concatena la ruta definida despues del +

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //Al usar un template engine como hbs
    //podemos renderizar o mandar la pag completamente

    res.render('home', {
        nombre: 'julio  césar  villar',
        //anio: new Date().getFullYear()
    });



});
app.get('/about', (req, res) => {
    //Al usar un template engine como hbs
    //podemos renderizar o mandar la pag completamente

    res.render('about', {

        //anio: new Date().getFullYear()
    });


    //helper es una funcion que se dispara cuando 
    //el template lo requiere
});

//app.get('/', (req, res) => {
//res.send('Hola Mundo') //solicitud get cuando el 
//path es un /   de ser asi se cumple la funcion y el 
//callback
//   let salida = {
//       nombre: 'Julio',
//       edad: 38,
//       url: req.url
//  };

//  res.send(salida);

//});

// app.get('/data', (req, res) => {
//   res.send('Hola Data');
//});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});