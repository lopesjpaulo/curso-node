module.exports = function(app){
    app.get('/', function(req, res){
        res.render('inicial');
    });
    app.get('/noticias', function(req, res){
        res.render('./noticias/noticias');
    });
    app.get('/noticia', function(req, res){
        res.render('./noticias/noticia');
    });
};