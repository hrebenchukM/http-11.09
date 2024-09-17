var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;//получаем какую страничку запрашивает клиент
    //req то что от клиента получаем
    //.url полностью адресная строка
    //.pathname = /index
    path = '005_returnPage/' +'index.html';//рассматриваем индекс.штмл как файл и формируем путь
    
    
fs.readFile(path, function(err, data){//дата=буфер
    if(err){
        console.log(err);
        res.writeHead(404, { 'Content-Type' : 'text/plain'});
        res.end('Not Found!');
    }
    else{
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write(data.toString());//из байтов в строку перевожу и записываю ответ
        console.log('data was sent');
        res.end();//отправили ответ
    }
});

}).listen(8080, function(){
    console.log('Server starting!');
});