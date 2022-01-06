const http = require("http");
const port = 3000;
const ip = 'localhost';

let server = http.createServer((req, res)=>{
    console.log('Url: ', req.url);
    console.log('METHOD',req.method);
    switch(req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<p>Aqui é o caminho da barraaaa soq naa!Cara q bizarro, e tem mais</p>');
            break;
        case '/olokinho':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Aqui é o caminho do olokinho de verdade, com supervisor, pq nodemon n ta com nada</h1>');
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                user : {
                    name: 'Guilherme Eduardo Bublitz',
                    email: 'gui.e.bublitz@gmail.com',
                    id: 1 
                }
            }));
            break;
        default : res.statusCode = 404;
    }   
});

server.listen(port, ip, ()=>{
    console.log('O servidor está rodando!');
});