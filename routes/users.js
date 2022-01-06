let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user : [{
            name: 'Guilherme Eduardo Bublitz',
            email: 'gui.e.bublitz@gmail.com',
            id: 1 
        },{
            name: 'Julia Gabriely Bublitz',
            email: 'julia@gmail.com',
            id: 2 
        }]
    });
});

routes.get('/admin',(req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user : []
    });
});

module.exports = routes;