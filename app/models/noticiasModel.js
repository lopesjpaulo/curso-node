module.exports = function(){
    
    this.getNoticias = function(connection, callback){
        connection.query('select * from ci_usuarios', callback);
    }

    return this;
}