var dbConnection = require('../../config/database');

module.exports = function(app, connection){
    app.get('/', function(req, res){

        var connection = dbConnection();

        connection.query('select * from ci_contatos', function(error, result){
            res.render('./noticias/noticias', {noticias : result});
        })
    });
    app.get('/noticias', function(req, res){
        res.render('./noticias/noticias');
    });
    app.get('/noticia', function(req, res){
        res.render('./noticias/noticia');
    });
};