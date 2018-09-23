var fs = require("fs");
var func = require("./func");
var url = require('url');
teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
yearName = {"1516":"2015-2016", "1617":"2016-2017", "1718":"2017-2018"};

module.exports = function(app) {
    app.get('/parser', async (req, res) => {
        fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            var text = req.query.pickedItem;
            var year = yearName[req.query.pickedYear];
            teamData = {};
            tit= "";
            if(text=="usg"){
                tit="USG↓";
                teamData = func.usg(year);
                console.log(teamData);
            } else if(text=="efg"){
                tit="efg↑";//타이틀 이름
                teamData = func.efg(year);
            } else if(text=="TS"){
                tit="TS%↑";
                teamData = func.TS(year);
            } else if(text=="TOR"){
                tit="TOR%↓";
                teamData = func.TOR(year);
            } else if(text=="Ast"){
                tit="Ast↑";
                teamData = func.Ast(year);
            } else if(text=="PPG"){
                tit="PPG↑";
                teamData= func.PPG(year);
            } else if(text=="RPG"){
                tit="RPG↑";
                teamData= func.RPG(year);
            } else if(text=="STL"){
                tit="STL↑";
                teamData= func.STL(year);
            } else if(text=="Offensive"){
                tit="Offensive↑";
                teamData= func.Offensive(year);
            } else if(text=="Defensive"){
                tit="Defensive↑";
                teamData= func.Defensive(year);
            } else {
                tit = "";
                teamData = {"Err" : 0};
            }
            res.render('index', {
                title: "Test",
                object: obj,
                teamStatData: Object.values(teamData),
                teamNameData: Object.keys(teamData),
                item: tit,
                year: year
            })
        });
    });
};