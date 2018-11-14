module.exports = function(app){
    
    app.get('/', function(req, res){

        app.config.database().query('select * from ci_usuarios', function(error, result){
            res.render('./noticias/noticias', {noticias : result});
        })

    });

    app.get('/noticias', function(req, res){

        var connection = app.config.database();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('./noticias/noticias', {noticias : result});
        });

    });

    app.get('/noticia/:id', function(req, res){
        
        app.config.database().query('select * from ci_usuarios where id = ' + req.params.id, function(error, result){
            res.render('./noticias/noticia', {noticia : result});
        })
    });

};