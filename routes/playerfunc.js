// author : Wookjin Ha
// github : github.com/Hawookjin/

this.player = function(year) {
    var data = {};
    var array = [];
    for (key in teamName) {
        var temp = {};
        for (var c = 0; c < (obj[year][key]).length; c++) {
            temp = (obj[year][key][c]["선수"]);
           array = array.push((obj[year][key][c]["선수"]))
        }
        data[key] = array ;
    }
    return data;
};