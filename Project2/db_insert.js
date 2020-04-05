
const request = require('request');
mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'project2'
});
connection.connect();
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
require('date-utils');

request('http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1144063000', function (error, response, body) {
    
    parser.parseString(body, function(err, result) {
        var temp = result.rss.channel[0].item[0].description[0].body[0].data[0].temp[0];
        var date = (new Date()).toFormat("HH24:MI");
        connection.query(`INSERT INTO temperature(date, temp) VALUES ("${date}", "${temp}")`, function(err, results){});
        connection.end();
        console.log(date);
    });
});