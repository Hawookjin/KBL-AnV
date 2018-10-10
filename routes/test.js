var fs = require("fs");
var url = require('url');
teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
yearName = {"1516":"2015-2016", "1617":"2016-2017", "1718":"2017-2018"};

module.exports = function(app) {
    app.get('/test', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var text = "안양KGC인삼공사"; // "" 안 부분 직접 써주기
            var year = yearName["1516"]; // "" 안 부분 직접 써주기
            var index = "FTA"; // "" 안 부분 직접 써주기
            var sum = 0;
            for(var i=0; i<(obj[year][text]).length; i++) {
                sum += Number(obj[year][text][i][index]);
            }
            
        });
    });
};