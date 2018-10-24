// author : Wookjin Ha
// github : github.com/Hawookjin/

var teamFunction = require("./teamFunction");
var Playerfuntion = require("./playerfunc");

this.getTeamData = function(index, obj) {
    var indexTitle, teamData, indexDescription;
    if (index == "EFG") {
        indexTitle = "EFG↑";//타이틀 이름
        teamData = teamFunction.EFG(obj);
        indexDescription = "3점슛이 일반 야투보다 넣기 힘들다는 점과 성공시 팀에 기여하는 기여도가 3점슛이 더 높다는 점을 감안해 3점슛에 보정을 두어 슈팅 효율성을 나타내는 지표이다.";
    } else if (index == "TS") {
        indexTitle = "TS%↑";
        teamData = teamFunction.TS(obj);
        indexDescription = "팀의 슛팅 성공확률을 나타내는 지표이다.";
    } else if (index == "TOR") {
        indexTitle = "TOR%↓";
        teamData = teamFunction.TOR(obj);
        indexDescription = "팀 선수들의 실책 평균을 나타낸 지표이다.";
    } else if (index == "Ast") {
        indexTitle = "Ast↑";
        teamData = teamFunction.Ast(obj);
        indexDescription = "골대 근처에서 바로 득점할 기회가 있는 같은 팀 선수에게 패스하는 빈도를 나타내는 지표이다."
    } else if (index == "PPG") {
        indexTitle = "PPG↑";
        teamData = teamFunction.PPG(obj);
        indexDescription = "평균득점";
    } else if (index == "RPG") {
        indexTitle = "RPG↑";
        teamData = teamFunction.RPG(obj);
        indexDescription = "리바운드 평균";
    } else if (index == "STL") {
        indexTitle = "STL↑";
        teamData = teamFunction.STL(obj);
        indexDescription = "스틸 평균";
    } else if (index == "Offensive") {
        indexTitle = "Offensive↑";
        teamData = teamFunction.Offensive(obj);
        indexDescription = "공격 리바운드 평균";
    } else if (index == "Defensive") {
        indexTitle = "Defensive↑";
        teamData = teamFunction.Defensive(obj);
        indexDescription = "수비 리바운드 평균";
    } else {
        indexTitle = "";
        teamData = {"Err": 0};
        indexDescription = "";
    }
    return [indexTitle, teamData, indexDescription];
};

