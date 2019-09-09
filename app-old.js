const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/js' });
        let salida = {
            nombre: 'Julio',
            edad: 38,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end;
    })
    .listen(8080);

console.log('Ecuchando el puerto 8080');