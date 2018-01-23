exports.register=function(app){
    var fs = require('fs');
    var files = fs.readdirSync('./controllers');
    files.forEach(function(path){
        require('./controllers/'+path).register(app);
    });
};