module.exports = function(app){
    
    app.get('/', function(req, res){

        app.config.database().query('select * from article', function(error, result){
            res.render('./noticias/noticias', {noticias : result});
        })

    });

    app.get('/adicionar', function(req, res){

        res.render('./admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req, res){

        const noticia = req.body;

        var connection = app.config.database();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/');
        });
    });

    app.get('/noticias', function(req, res){

        var connection = app.config.database();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('./noticias/noticias', {noticias : result});
        });

    });

    app.get('/noticia/:id', function(req, res){
        
        var connection = app.config.database();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(req, connection, function(error, result){
            res.render('./noticias/noticia', {noticia : result});
        });
        
    });

};