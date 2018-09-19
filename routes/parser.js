var fs = require("fs");
var func = require("./func");
teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
yearName = {"1516":"2015-2016", "1617":"2016-2017", "1718":"2017-2018"};

function getStatData(index, year) {// 긁어온 값들 합
    var data = {};
    for (key in teamName) {
        var temp=0;
        for(var c=0; c<(obj[year][key]).length; c++) {
            temp += Number(obj[year][key][c][index]);
        }
        data[key] = temp;
    }
    return data;
}

module.exports = function(app) {
    app.get('/parser2/:content', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var item = req.params.content;
            var year = yearName["1718"];
            teamAllData = getStatData(item, year);
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

    // parser/text 모든 함수 뿌리기
    app.get('/parser/:text', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            // console.log(obj["2015-2016"]["안양KGC인삼공사"]);
            var tit;// 타이틀 이름
            var text = req.params.text;
            var year = yearName["1718"];
            if(text=="usg"){
                tit="USG↓";
                teamData = func.usg(year);
            }
            else if(text=="efg"){
                tit="efg↑";//타이틀 이름
                teamData = func.efg(year);//값
            }
            else if(text=="TS"){
                tit="TS%↑";
                teamData = func.TS(year);
            }
            else if(text=="TOR"){
                tit="TOR%↓";
                teamData = func.TOR(year);
            }
            else if(text=="Ast"){
                tit="Ast↑";
                teamData = func.Ast(year);
            }
            else if(text=="PPG"){
                tit="PPG↑";
                teamData= func.PPG(year);
            }
            else if(text=="RPG"){
                tit="RPG↑";
                teamData= func.RPG(year);
            }
            else if(text=="STL"){
                tit="STL↑";
                teamData= func.STL(year);
            }
            else if(text=="Offensive"){
                tit="Offensive↑";
                teamData= func.Offensive(year);
            }
            else if(text=="Defensive"){
                tit="Defensive↑";
                teamData= func.Defensive(year);
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
};
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