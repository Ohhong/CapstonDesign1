var express = require('express');
var app = express();
fs = require('fs');
mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'project2'
});
connection.connect();

app.get('/graph', function (req, res) {
  fs.readFile('./graph.html', function (err, html) {
    html = " "+ html;

    connection.query('select * from temperature', function(err, results) {
      var data = "data.addRows(["
      var index = 1;
      if (err) throw err;
      
      for (i of results){
        if(index == 1) {
          data += `["${i.date}", ${Number(i.temp)}]`;
          index = 0;
        }
        data += `, ["${i.date}", ${Number(i.temp)}]`;
      }
      
      html = html.replace(`"<%DATA%>"`, data + "]);");

      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    });
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('listening at http://%s:%s', host, port)
});