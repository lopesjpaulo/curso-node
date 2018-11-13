var app = require('./config/server');

app.get('/', function(req, res){
    res.render('inicial');
});

app.get('/form', function(req, res){
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req, res){
    res.render('admin/noticias');
});

app.listen(3000, function(){
    console.log('Rodando');
});