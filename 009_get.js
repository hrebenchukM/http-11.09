var http = require('http'); 
var fs = require('fs'); 
var url = require('url'); 
var path = require('path'); 

var port = 8080;

const server = http.createServer(function(req, res) {

 	 // обработка ошибок запросов
 	 req.on('error', function(err) {
 	 	console.log(err); 
 	 }); 
      
       if (req.url == '/') {

           // чтение файла index.html
           var file_path = path.join(__dirname, '009_index.html');//конкатенация двух строк 
           fs.readFile(file_path, function (err, data) { 

               // обработка ошибок
               if (err) {
                   console.log(err);
                   res.writeHead(404, { 'Content-Type': 'text/plain' });
                   res.write('Not Found!');

               } else {
                   res.writeHead(200, { 'Content-Type': 'text/html' }); 
                   // записать в овет содержимое читаемого файла 
                   res.write(data.toString());//отправляется клиенту

               }

               res.end();
           });
       }
       else if (req.url == '/request') {

           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write('<h2>Data from server!</h2>');
           res.end();

           console.log('data sent!');
       }
       else {
           res.writeHead(404, { 'Content-Type': 'text/html' }); 
           res.end('Resource not found'); 
       }

}).listen(port); 
console.log('server running on port ' + port); 
