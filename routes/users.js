module.exports = (app)=>{
    app.get('/users', (req, res)=>{
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
    app.post('/users',(req, res)=>{
        res.json(req.body);
    });
   
    
    app.get('/users/admin',(req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            user : []
        });
    }); 
    app.post('/users/admin',(req, res)=>{
        res.json(req.body);
    });     
};