var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

   var query = url.parse(req.url, true).query;//true- все параметры надо перебирать
   console.log(query.login);
   console.log(query.password);

   res.end('GET params: ' + JSON.stringify(query));//преобразовали в джейсон формат

}).listen(8080, function () {
    console.log('Server running on port 8080'); 
});