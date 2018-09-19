    this.usg = function(year) {
        var data = {};
        var re = /(\w+)\S(\w+)\S(\w+)/; // 시간 00:00:00 정규표현식
        for (key in teamName) { // key = 팀이름
            var sum = 0;
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                var str = obj[year][key][1]["Min."];
                var playTime = Number(str.replace(re, "$2")) + Number(str.replace(re, "$1")) * 60;
                temp = ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (Number(obj[year][key][c]["FTA"]) * 0.44) + (Number(obj[year][key][c]["Ast"]) * 0.33) + Number(obj[year][key][c]["TO"])) * 40;
                temp /= playTime;
                sum += temp;
            }
            data[key] = sum / ((obj[year][key]).length);
        }
        return data;
    }

    this.efg = function(year) {
        var data = {};
        sum = 0;
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = ((Number(obj[year][key][c]["2P"]) + Number(obj[year][key][c]["3P"])) + (Number(obj[year][key][c]["3P"]) * 0.5));
                temp = temp / (Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]));
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    };

    this.TS = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = Number(obj[year][key][c]["PTS"]);
                temp = temp / (2 * ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (0.44 * (Number(obj[year][key][c]["FTA"])))));
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.TOR = function(year) {
        var data = {};
        for (key in teamName) {
            var sum = 0;
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = (Number(obj[year][key][c]["TO"]) * 100);
                temp /= ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) * 0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]));
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.Ast = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = (Number(obj[year][key][c]["Ast"]) * 100);
                temp /= ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) * 0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]));
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.PPG = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["PPG"]);
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.RPG = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["RPG"]);
            }
            data[key] = temp ;
        }
        return data;
    }

    this.STL = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["STL"])
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.Offensive = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["Offensive"]);
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }

    this.Defensive = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["Defensive"]);
            }
            data[key] = temp / ((obj[year][key]).length);
        }
        return data;
    }