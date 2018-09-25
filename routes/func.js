    this.usg = function(year) {
        var data = {};
        var re = /(\w+)\S(\w+)\S(\w+)/; // 시간 00:00:00 정규표현식
        for (key in teamName) { // key = 팀이름
            var sum = 0; var temp = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                var str = obj[year][key][1]["Min."];
                var playTime = Number(str.replace(re, "$2")) + Number(str.replace(re, "$1")) * 60;
                temp = ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (Number(obj[year][key][c]["FTA"]) * 0.44) + (Number(obj[year][key][c]["Ast"]) * 0.33) + Number(obj[year][key][c]["TO"])) * 40;
                temp /= playTime;
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
                sum += temp;
            }
            data[key] = sum / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.efg = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var sum = 0; var nanCount =0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = ((Number(obj[year][key][c]["2P"]) + Number(obj[year][key][c]["3P"])) + (Number(obj[year][key][c]["3P"]) * 0.5));
                temp = temp / (Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"]));
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
                sum = sum + temp;
            }
            data[key] = sum / ((obj[year][key]).length - nanCount) ;
        }
        return data;
    };

    this.TS = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var sum= 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = Number(obj[year][key][c]["PTS"]);
                temp = temp / 2 * ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + (0.44 * (Number(obj[year][key][c]["FTA"]))));
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
                sum += temp;
            }
            data[key] = sum / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.TOR = function (year) {
        var data = {};
        for (key in teamName){
            var temp =0; var sum = 0; var nanCount =0;
            for(var c=0; c<(obj[year][key]).length; c++){
                temp = Number((Number(obj[year][key][c]["TO"]) * 100) / Number(((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) * 0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]))));
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
                sum = sum + temp;
            }
            data[key] = sum / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.Ast = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var sum = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp = (Number(obj[year][key][c]["Ast"]) * 100);
                temp /= ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) + ((Number(obj[year][key][c]["2PA"]) + Number(obj[year][key][c]["3PA"])) * 0.44) + Number(obj[year][key][c]["Ast"]) + Number(obj[year][key][c]["TO"]));
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
                sum += temp;
            }
            data[key] = sum / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.PPG = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["PPG"]);
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
            }
            data[key] = temp / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.RPG = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["RPG"]);
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
            }
            data[key] = temp / ((obj[year][key]).length - nanCount) ;
        }
        return data;
    };

    this.STL = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var nancount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["STL"])
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
            }
            data[key] = temp / ((obj[year][key]).length - nancount);
        }
        return data;
    };

    this.Offensive = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["Offensive"]);
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
            }
            data[key] =temp / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    this.Defensive = function(year) {
        var data = {};
        for (key in teamName) {
            var temp = 0; var nanCount = 0;
            for (var c = 0; c < (obj[year][key]).length; c++) {
                temp += Number(obj[year][key][c]["Defensive"]);
                if(isNaN(temp)) {
                    nanCount++;
                    continue;
                }
            }
            data[key] = temp / ((obj[year][key]).length - nanCount);
        }
        return data;
    };

    // this.Efficiency =function (year) {
    //     var data = {};
    //     var re = /(\w+)\S(\w+)\S(\w+)/; // 시간 00:00:00 정규표현식
    //     for (key in teamName) {
    //         var temp = 0;
    //         var sum = 0;
    //         for (var c = 0; c < (obj[year][key]).length; c++) {
    //             var str = obj[year][key][1]["Min."];
    //             var playTime = Number(str.replace(re, "$2")) + Number(str.replace(re, "$1")) * 60;
    //             temp += ((Number(obj[year][c]["2P"]) + Number(obj[year][c]["3P"])) + Number(obj[year][c]["STL"]) + Number(obj[year][c]["BS"]) + Number(obj[year][c]["Defensive"]) + (Number(obj[year][c]["Offensive"]) + Number(obj[year][c]["Ast"]) + Number(obj[year][c]["GD"])) * 1.5 + playTime);
    //             temp /= 4;
    //             sum += temp;
    //         }
    //         data[key] = sum / ((obj[year][key]).length);
    //     }
    //     return data;
    // };