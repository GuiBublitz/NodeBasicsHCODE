module.exports = {
    user:(app, req, res)=>{
        req.assert('name', 'O nome é obrigatório!').notEmpty();
        req.assert('email', 'Este e-mail não é válido!').notEmpty().isEmail();
        req.assert('password', 'A senha precisa ter pelo menos 8 caracteres!').isLength({ min: 8 });
        let errors = req.validationErrors();
        if(errors){
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
}