let express = require('express');
let routes = express.Router();

routes.get('/',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Aqui é o caminho da barra, só q do express!</p>');
});

module.exports = routes;