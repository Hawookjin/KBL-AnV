// author : Wookjin Ha
// github : github.com/Hawookjin/

var parser = require("./parser");
var url = require('url');
var fs = require("fs");

var teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
var yearName = {"2015-2016":"2015-2016", "2016-2017":"2016-2017", "2017-2018":"2017-2018"};

module.exports = function(app) {
    app.get('/', function (req, res) {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            var obj = JSON.parse(data);
            var getTeamIndex = req.query.pickedItem;
            var getTeamYear = yearName[req.query.pickedYear];
            teamData = {};
            tit = "";
            var getTeamData = parser.getTeamData(getTeamIndex, obj[getTeamYear]);

            res.render('index', {
                title: "한국프로농구 데이터시각화 프로젝트",
                teamIndex: getTeamData[0],
                teamNameData: Object.keys(getTeamData[1]),
                teamStatData: Object.values(getTeamData[1]),
                teamIndexDescription: getTeamData[2],
                teamYear: getTeamYear
            })
        });
    });

    app.get('/player', function(req, res) {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            var obj = JSON.parse(data);
            var reqName = req.query.playerName;
            if(reqName) {
                var splitArray = reqName.split(",");
                var AttackdataArray = [obj[splitArray[0]][splitArray[1]][splitArray[3]]["PPG"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["2P"],
                    obj[splitArray[0]][splitArray[1]][splitArray[3]]["3P"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["FT"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["Ast"]]

                var DeffensivedataArray =[obj[splitArray[0]][splitArray[1]][splitArray[3]]["RPG"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["Defensive"],
                    obj[splitArray[0]][splitArray[1]][splitArray[3]]["Offensive"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["BS"], obj[splitArray[0]][splitArray[1]][splitArray[3]]["STL"]]
            }
            else {
                var splitArray = ["미정", "미정", "선수를 선택해주세요.", 0];
                var AttackdataArray = [0,0,0,0,0];
                var DeffensivedataArray = [0,0,0,0,0];
            }
            console.log(splitArray[0] + " " + splitArray[1] + " " + splitArray[2] + " " + splitArray[3]);
            var yearWithTeam = {};
            var years = ["2015-2016", "2016-2017", "2017-2018"];
            for (var year in years) {
                var y = years[year];
                var playerWithTeam = {};
                for (var key in teamName) {
                    var temp = [];
                    for (var c = 0; c < (obj[y][key]).length; c++) {
                        temp.push(obj[y][key][c]["선수"]);
                    }
                    playerWithTeam[key] = temp;
                }
                yearWithTeam[y] = playerWithTeam;
            }
            res.render('player', {
                title: "한국프로농구 데이터시각화 프로젝트",
                teamYear: 1,
                teamIndex: "선수 정보",
                tiD: obj,
                AtdataArray: AttackdataArray,
                DfdataArray : DeffensivedataArray,
                dataIndex: splitArray
            });
        });
    });
}