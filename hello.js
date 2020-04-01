const express = require('express');
const app = express();
app.use(express.json());
require('date-utils');
port = 8000;

app.get('/get', function(req, res) {
    r = req.query;
    r.ip = req.ip.replace(/^.*:/, '');
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS");
    r.email = "didlsqks5@naver.com";
    r.stuno = "20151566";
    res.send(JSON.stringify(r));
});

app.get('/', function(req, res) {
  r = req.query;
  r.ip = req.ip.replace(/^.*:/, '');
  r.time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS");
  r.email = "didlsqks5@naver.com";
  r.stuno = "20151566";
  res.send(JSON.stringify(r));
});

app.post('/', function(req, res) {
    r = req.body;
    r.ip = req.ip.replace(/^.*:/, '');
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS");
    r.email = "didlsqks5@naver.com";
    r.stuno = "20151566";
    res.send(JSON.stringify(r));
});

app.get('/get/:a/:b', function(req, res) {
  r = req.params
  ip = req.ip.replace(/^.*:/, '')
  r.time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS")
  r.email = "didlsqks5@naver.com"
  r.stuno = "20151566"
  res.send(JSON.stringify(r))
});

app.get('/:a/:b', function(req, res) {
    r = req.params
    ip = req.ip.replace(/^.*:/, '')
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS")
    r.email = "didlsqks5@naver.com"
    r.stuno = "20151566"
    res.send(JSON.stringify(r))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
