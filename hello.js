const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const querystring = require('querystring');
require('date-utils');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('/get', function (req, res) {
  var results = "{";
  var get_query = querystring.parse(req.url);
  var flag = 0;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var date = new Date();
  var time = date.toFormat('YYYY-MM-DD HH:MI:SS');
  
  for(var i in get_query) {
    if(flag == 0) {
      if(i === '/get' || i === '/get?') break;
      results = results + `"${i.substring(5,i.length)}":"${get_query[i]}",`;
      flag = 1;
    } else {
      results = results + `"${i}":"${get_query[i]}",`;
    }
  }
  results = results + `"email":"didlsqks5@naver.com","stuno":"20151566","time":"${time}","ip":"${(ip).substring(7, ip.length)}}`;

  res.send(results);
});

app.post('/', function (req, res) {
  var results = "{";
  var get_query = req.body;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var date = new Date();
  var time = date.toFormat('YYYY-MM-DD HH:MI:SS');

  for(var i in get_query){
    results = results + `"${i}":${get_query[i]}",`;
  }

  results = results + `"email":"didlsqks5@naver.com","stuno":"20151566","time":"${time}","ip":"${(ip).substring(7, ip.length)}}`;

  res.send(results);
});

app.listen(8000, function () {
  console.log('running port 8000');
});