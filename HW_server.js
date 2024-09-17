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
      var file_path;
       if (req.url == '/') {

           // чтение файла index.html
            file_path = path.join(__dirname, 'HW_index.html');//конкатенация двух строк 
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
      
    

       else if (req.url == '/HW_register.html') {

            // чтение файла HW_register.html
             file_path = path.join(__dirname, 'HW_register.html');//конкатенация двух строк 
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
       else if (req.url == '/HW_authoriz.html') {

           // чтение файла HW_authoriz.html
            file_path = path.join(__dirname, 'HW_authoriz.html');//конкатенация двух строк 
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


       else if (req.url == '/HW_about.html') {

       // чтение файла HW_about.html
        file_path = path.join(__dirname, 'HW_about.html');//конкатенация двух строк 
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


       else {
           res.writeHead(404, { 'Content-Type': 'text/html' }); 
           res.end('Resource not found'); 
       }

}).listen(port); 
console.log('server running on port ' + port); 
