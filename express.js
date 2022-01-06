const express = require("express");
const consign = require("consign");
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

//Config server
const port = 3000;
const ip = 'localhost';

// //Rota dos meu arquivos
// let routesIndex = require('./routes/index');
// let routesUsers = require('./routes/users');
// let routesOlokinho = require('./routes/olokinho');

// //Chamando rotas
// app.use(routesIndex);
// app.use('/users', routesUsers);
// app.use('/olokinho', routesOlokinho);

//substituimos tudo que o código comentado acima fazia apenas usando o consign
consign().include('routes').into(app);

//Rodando server
app.listen(port, ip, ()=>{
    console.log('To no ar!');
});

