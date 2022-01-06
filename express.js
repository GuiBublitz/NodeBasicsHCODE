const express = require("express");
let app = express();

//Rota dos meu arquivos
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');
let routesOlokinho = require('./routes/olokinho');

//Config server
const port = 3000;
const ip = 'localhost';

//Chamando rotas
app.use(routesIndex);
app.use('/users', routesUsers);
app.use('/olokinho', routesOlokinho);

//Rodando server
app.listen(port, ip, ()=>{
    console.log('To no ar!');
});

