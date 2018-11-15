module.exports = function(){
    
    this.getNoticias = function(connection, callback){
        connection.query('select * from article', callback);
    }

    this.getNoticia = function(req, connection, callback){
        connection.query('select * from article where id = ' + req.params.id, callback);
    }

    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into article set ?', noticia, callback);
    }

    return this;
}