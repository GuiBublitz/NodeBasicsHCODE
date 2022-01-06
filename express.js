const express = require("express");
let app = express();
const port = 3000;
const ip = 'localhost';

app.get('/',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Aqui é o caminho da barra, só q do express!</p>');
});
app.get('/olokinho',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Aqui é o caminho do olokinho de verdade</h1>');
});
app.get('/users', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user : {
            name: 'Guilherme Eduardo Bublitz',
            email: 'gui.e.bublitz@gmail.com',
            id: 1 
        }
    });
});

app.listen(port, ip, ()=>{
    console.log('To no ar!');
});