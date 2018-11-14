var app = require('./config/server');

//var routes = require('./app/routes/routes')(app);

app.listen(3000, function(){
    console.log('servidor rodando');
});