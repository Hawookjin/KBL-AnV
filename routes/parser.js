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
        var sum = 0; var temp = 0;
        for(var c=0; c<(obj[year][key]).length; c++) {
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
    sum=0;
    for (key in teamName){
         var temp =0;
        for(var c=0; c<(obj[year][key]).length; c++){
            temp = ((Number(obj[year][key][c]["2P"]) + Number(obj[year][key][c]["3P"])) + (Number(obj[year][key][c]["3P"])*0.5));
            temp = temp / (Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]));
        }
        data[key] = temp/((obj[year][key]).length);
    }
    return data;
}
function TS(year) {
    var data = {};
    for (key in teamName){
         var temp =0;
        for(var c=0; c<(obj[year][key]).length; c++){
            temp = Number(obj[year][key][c]["PTS"]);
            temp = temp/ (2*((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (0.44*(Number(obj[year][key][c]["FTA"])))));
        }
        data[key] = temp/((obj[year][key]).length);
    }
    return data;
}
function TOR(year) {
    var data = {};
    for (key in teamName){
        var sum = 0; var temp =0;
        for(var c=0; c<(obj[year][key]).length; c++){
            temp = (Number(obj[year][key][c]["TO"])*100);
            temp /= ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]))*0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]));
        }
        data[key] = temp/((obj[year][key]).length);
    }
    return data;
}
function Ast(year) {
    var data = {};
    for (key in teamName){
        var temp =0;
        for(var c=0; c<(obj[year][key]).length; c++){
            temp =(Number(obj[year][key][c]["Ast"])*100);
            temp /= ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]))*0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]));
        }
        data[key] = temp/((obj[year][key]).length);
    }
    return data;
}
function PPG(year) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c]["PPG"]);
        }
        data[key] = temp;
    }
    return data;
}
function RPG(year) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c]["RPG"]);
        }
        data[key] = temp;
    }
    return data;
}
function STL(year) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c]["STL"])
        }
        data[key] = temp ;
    }
    return data;
}
function Offensive(year) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c]["Offensive"]);
        }
        data[key] = temp;
    }
    return data;
}
function Defensive(year) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c]["Defensive"]);
        }
        data[key] = temp;
    }
    return data;
}
module.exports = function(app) {
    // app.get('/parser/:content', async (req, res) => {
    //     fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
    //         if (err) throw err;
    //         obj = JSON.parse(data);
    //         var item = req.params.content;
    //         var year = yearName["1718"];
    //         teamAllData = getStatData(item, year);
    //         // teamAllData = usg(year);
    //         res.render('index', {
    //             title: "Test",
    //             object: obj,
    //             teamStatData: Object.values(teamAllData),
    //             teamNameData: Object.keys(teamAllData),
    //             item: item,
    //             year: year
    //         })
    //     });
    // });

    // parser2/text 모든 함수 뿌리기
    app.get('/parser2/:text', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            // console.log(obj["2015-2016"]["안양KGC인삼공사"]);
            var tit;// 타이틀 이름
            var text = req.params.text;
            var year = yearName["1718"];
            if(text=="usg"){
                array=usg(year);
                tit="USG↓";
                teamData = usg(year);
            }
            else if(text=="efg"){
                array=efg(year);
                tit="efg↑";//타이틀 이름
                teamData = efg(year);//값
            }
            else if(text=="TS"){
                array=TS(year);
                tit="TS%↑";
                teamData = TS(year);
            }
            else if(text=="TOR"){
                array=TOR(year);
                tit="TOR%↓";
                teamData = TOR(year);
            }
            else if(text=="Ast"){
                array=Ast(year);
                tit="Ast↑";
                teamData = Ast(year);
            }
            else if(text=="PPG"){
                array=PPG(year);
                tit="PPG↑";
                teamData= PPG(year);
            }
            else if(text=="RPG"){
                array=RPG(year);
                tit="RPG↑";
                teamData= RPG(year);
            }
            else if(text=="STL"){
                array=STL(year);
                tit="STL↑";
                teamData= STL(year);
            }
            else if(text=="Offensive"){
                array=Offensive(year);
                tit="Offensive↑";
                teamData= Offensive(year);
            }
            else if(text=="Defensive"){
                array=Defensive(year);
                tit="Defensive↑";
                teamData= Defensive(year);
            }
            res.render('index', {
                title: "Test",
                object: obj,
                teamStatData: Object.values(teamData),
                teamNameData: Object.keys(teamData),
                item: tit,
                year: year
            });
        });
    });

    // // efg
    // app.get('/parser3', async (req, res) => {
    //     fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
    //         if (err) throw err;
    //         obj = JSON.parse(data);
    //         var year = yearName["1617"];
    //         teamData = efg(year);
    //
    //
    //         res.render('index', {
    //             title: "Test",
    //             object: obj,
    //             teamStatData: Object.values(teamData),
    //             teamNameData: Object.keys(teamData),
    //             item: "efg",
    //             year: year
    //         });
    //     });
    // });
    // // TS%
    // app.get('/parser4', async (req, res) => {
    //     fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
    //         if (err) throw err;
    //         obj = JSON.parse(data);
    //         var year = yearName["1617"];
    //         teamData = TS(year);
    //
    //
    //         res.render('index', {
    //             title: "Test",
    //             object: obj,
    //             teamStatData: Object.values(teamData),
    //             teamNameData: Object.keys(teamData),
    //             item: "TS%",
    //             year: year
    //         });
    //     });
    // });
    // // TOR
    // app.get('/parser5', async (req, res) => {
    //     fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
    //         if (err) throw err;
    //         obj = JSON.parse(data);
    //         var year = yearName["1617"];
    //         teamData = TOR(year);
    //
    //
    //         res.render('index', {
    //             title: "Test",
    //             object: obj,
    //             teamStatData: Object.values(teamData),
    //             teamNameData: Object.keys(teamData),
    //             item: "TOR",
    //             year: year
    //         });
    //     });
    // });
    // // Ast
    // app.get('/parser/Ast', async (req, res) => {
    //     fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
    //         if (err) throw err;
    //         obj = JSON.parse(data);
    //         var year = yearName["1617"];
    //         teamData = Ast(year);
    //
    //
    //         res.render('index', {
    //             title: "Test",
    //             object: obj,
    //             teamStatData: Object.values(teamData),
    //             teamNameData: Object.keys(teamData),
    //             item: "Ast",
    //             year: year
    //         });
    //     });
    // });
};



