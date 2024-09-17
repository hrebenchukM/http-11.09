var http = require('http');

var server = http.createServer().listen(8080);
// var server = http.Server();

server.on('listening', function(){
    console.log('Server running on port 8080');
});

server.on('request', function(request, response){
    console.log('Connection established!');    
    console.log(request.method);
    // Завершает конфигурацию ответ
    //response.end();
     response.end("Responce is configured!", 'utf8', () => { console.log('finish'); });
});


// var http = require('http');

// var server = http.createServer(function(request, response){
//     console.log('Connection established!');    
//     console.log(request.method);
//     response.end("Hello world");
// }).listen(8080);



