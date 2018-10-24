// author : Wookjin Ha
// github : github.com/Hawookjin/

var teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};
var yearName = {"2015-2016":"2015-2016", "2016-2017":"2016-2017", "2017-2018":"2017-2018"};

//G게임수
this.G = function(obj) {
    var data = {};
    for (var key in teamName) {
        var temp = [];
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["G"]);
        }
        data[key] = temp;
    }
    return data;
};
//2P개수
this.EP = function(obj) {
    var data = {};
        for (var key in teamName) {
            var temp = [];
            for (var c = 0; c < (obj[key]).length; c++) {
                temp = Number(obj[key][c]["2P"]);
            }
            data[key] = temp;
    }
    return data;
};
//3P개수
this.SP = function(obj) {
    var data = {};
    for (var key in teamName) {
        var temp = [];
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["3P"]);
        }
        data[key] = temp;
    }
    return data;
};
//FT개수
this.FT = function(obj) {
    var data = {};
    for (var key in teamName) {
        var temp = [];
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["FT"]);
        }
        data[key] = temp;
    }
    return data;
};
//Ast개수
this.AST = function(obj) {
    var data = {};
    for (var key in teamName) {
        var temp = [];
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["2P"]);
        }
        data[key] = temp;
    }
    return data;
};
//OFF개수
this.OFF = function(obj) {
    var data = {};
    for (var key in teamName) {
        var temp = [];
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["2P"]);
        }
        data[key] = temp;
    }
    return data;
};