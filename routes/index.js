var cheerio = require('cheerio');
var request = require('request');
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('CP949', 'UTF-8//TRANSLIT//IGNORE');

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.end("Hello World\n");
    });


    app.get('/api/crawler', function (req, res) {
        var url = "http://www.kbl.or.kr/players/player_info.asp?pcode=290450";
        request({url, encoding: null}, function (error, response, body) {
            var htmlDoc = iconv.convert(body).toString();
            const $ = cheerio.load(htmlDoc);
            const $i = $('iframe');
            iUrl = $i.attr('src');

            var recordUrl = "http://www.kbl.or.kr/players/" + iUrl
            console.log(recordUrl);
        });
    });
}
