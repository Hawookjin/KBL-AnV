var fs = require("fs");
teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
yearName = {"1516":"2015-2016", "1617":"2016-2017", "1718":"2017-2018"};

function getStatData(index, year) {
    var data2P = {};
    for (key in teamName) {
        var temp=0;
        for(var c=0; c<(obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c][index]);
        }
        data2P[key] = temp;
    }
    return data2P;
}

function usg(year) {
    var data = {};
    var re = /(\w+)\S(\w+)\S(\w+)/; // 시간 00:00:00 정규표현식
    for(key in teamName) { // key = 팀이름
        var sum = 0;
        for(var c=0; c<(obj[year][key]).length; c++) {
            var temp = 0;
            var str = obj[year][key][1]["Min."];
            var playTime = Number(str.replace(re, "$2")) + Number(str.replace(re, "$1"))*60;
            temp = ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (Number(obj[year][key][c]["FTA"])*0.44) + (Number(obj[year][key][c]["Ast"])*0.33) + Number(obj[year][key][c]["TO"]))*40;
            temp /= playTime;
            sum += temp;
        }
        data[key] = sum/((obj[year][key]).length);
    }
    return data;
}

function efg(year) {
    var data = {};
    for (key in teamName){
        var sum = 0;
        for(var c=0; c<(obj[year][key]).length; c++){
            var temp =0;
            temp = ((Number(obj[year][key][c]["2P"]) + Number(obj[year][key][c]["3P"])) +(Number(obj[year][key][c]["3P"]) *1.5));
            temp /= (Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]));
            temp *= 100;
            sum += temp;
        }
        data[key] = sum/((obj[year][key]).length);
    }
    return data;
}

module.exports = function(app) {
    app.get('/parser/:content', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var item = req.params.content;
            var year = yearName["1617"];
            teamAllData = getStatData(item, year);
            // teamAllData = usg(year);
            res.render('index', {
                title: "Test",
                object: obj,
                teamStatData: Object.values(teamAllData),
                teamNameData: Object.keys(teamAllData),
                item: item,
                year: year
            })
        });
    });

    //Usg 만 뽑아보는 함수 보류
    app.get('/parser2', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var year = yearName["1617"];
            teamData = usg(year);

            res.render('index', {
                title: "Test",
                object: obj,
                teamStatData: Object.values(teamData),
                teamNameData: Object.keys(teamData),
                item: "usg",
                year: year
            });
        });
    });


    app.get('/parser3', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var year = yearName["1617"];
            teamData = efg(year);


            res.render('index', {
                title: "Test",
                object: obj,
                teamStatData: Object.values(teamData),
                teamNameData: Object.keys(teamData),
                item: "efg",
                year: year
            });
        });
    });
};