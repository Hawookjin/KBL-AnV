// author : Wookjin Ha
// github : github.com/Hawookjin/

var teamName = {"부산KT소닉붐":"06", "울산모비스피버스":"10", "원주동부프로미":"16","고양오리온스":"30","서울삼성":"35","창원LG":"50","서울SK나이츠":"55","전주KCC이지스":"60","인천전자랜드엘리펀츠":"65","안양KGC인삼공사":"70"};

this.EFG = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var sum = 0; var nanCount =0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = ((Number(obj[key][c]["2P"]) + Number(obj[key][c]["3P"])) + (Number(obj[key][c]["3P"]) * 0.5));
            temp = temp / (Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"]));
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
            sum = sum + temp;
        }
        data[key] = sum / ((obj[key]).length - nanCount) ;
    }
    return data;
};

this.TS = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var sum= 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp =  Number(obj[key][c]["2P"]) + Number(obj[key][c]["3P"]);
            temp = temp / (2 * ((Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"])) + (0.44 * (Number(obj[key][c]["FTA"]))))) * 100;
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
            sum += temp;
        }
        data[key] = sum / ((obj[key]).length - nanCount);
    }
    return data;
};

this.TOR = function (obj) {
    var data = {};
    for (key in teamName){
        var temp =0; var sum = 0; var nanCount =0;
        for(var c=0; c<(obj[key]).length; c++){
            temp = Number((Number(obj[key][c]["TO"]) * 100) / Number(((Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"])) + ((Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"])) * 0.44) + Number(obj[key][c]["Ast"]) + Number(obj[key][c]["TO"]))));
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
            sum = sum + temp;
        }
        data[key] = sum / ((obj[key]).length - nanCount);
    }
    return data;
};

this.Ast = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var sum = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp = (Number(obj[key][c]["Ast"]) * 100);
            temp /= ((Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"])) + ((Number(obj[key][c]["2PA"]) + Number(obj[key][c]["3PA"])) * 0.44) + Number(obj[key][c]["Ast"]) + Number(obj[key][c]["TO"]));
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
            sum += temp;
        }
        data[key] = sum / ((obj[key]).length - nanCount);
    }
    return data;
};

this.PPG = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp += Number(obj[key][c]["PPG"]);
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
        }
        data[key] = temp / ((obj[key]).length - nanCount);
    }
    return data;
};

this.RPG = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp += Number(obj[key][c]["RPG"]);
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
        }
        data[key] = temp / ((obj[key]).length - nanCount) ;
    }
    return data;
};

this.STL = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp += Number(obj[key][c]["STL"]);
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
        }
        data[key] = temp / ((obj[key]).length - nanCount);
    }
    return data;
};

this.Offensive = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp += Number(obj[key][c]["Offensive"]);
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
        }
        data[key] =temp / ((obj[key]).length - nanCount);
    }
    return data;
};

this.Defensive = function(obj) {
    var data = {};
    for (key in teamName) {
        var temp = 0; var nanCount = 0;
        for (var c = 0; c < (obj[key]).length; c++) {
            temp += Number(obj[key][c]["Defensive"]);
            if(isNaN(temp)) {
                nanCount++;
                continue;
            }
        }
        data[key] = temp / ((obj[key]).length - nanCount);
    }
    return data;
};

