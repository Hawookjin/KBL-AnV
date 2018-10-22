// author : Wookjin Ha
// github : github.com/Hawookjin/

var teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};

//선수명단
// this.player = function(obj) {
//     var data = {};
//     for (key in teamName) {
//         var temp = [];
//         for (var c = 0; c < (obj[key]).length; c++) {
//             temp.push(obj[key][c]["선수"]);
//         }
//
//         data[key] = temp;
//     }
//     return data;
// };

//2PA%
this.EPA = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["2PA"]) / Number(obj[key][c]["2P"]) ;
        }
        data[key] = temp
    }
    return data;
};

//3PA%
this.SPA = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["3PA"]) / Number(obj[key][c]["3P"]) ;
        }
        data[key] =temp
    }
    return data;
};
//APG
this.APG = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["APG"]);
        }
        data[key] = temp
    }
    return data;
};
//FTA%
this.FTA = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0;  
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["FTA"]) / Number(obj[key][c]["FT"]) ;;
        }
        data[key] = temp
    }
    return data;
};
//FG%
this.FG = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = Number(obj[key][c]["FG%"]);
        }
        data[key] = temp ;
    }
    return data;
};