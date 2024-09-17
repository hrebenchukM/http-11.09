var http = require("http");

var server = http.createServer(function(request, response) {
    // writeHead - метод позволяет записать в ответ заголовки и статус код
    // response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {"Content-Type": "text/html"});
    // write - метод позволяет создать тело ответа в виде потока writeable Stream
    response.write("Hello World");
    response.write("<h1>Hello World<h1>");
    // end - завершает конфигурацию ответа и отправляет его
    response.end();

}).listen(8080, function(){
    console.log('Server running on port 8080');
});
