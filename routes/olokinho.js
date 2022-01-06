module.exports = (app)=>{
    app.get('/olokinho',(req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Aqui é o caminho do olokinho de verdade</h1>');
    });
};