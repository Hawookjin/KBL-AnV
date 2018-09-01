
var cheerio = require('cheerio');
var request = require('request');
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('CP949', 'UTF-8//TRANSLIT//IGNORE');


module.exports = function(app) {
    app.get('/crawler', function (req, res) {
        var url = "http://www.kbl.or.kr/stats/team_player_gamerecord.asp?gpart=1&tcode=06&scode=29&gcode=01";
        request({url, encoding: null}, function (error, response, body) {
            var htmlDoc = iconv.convert(body).toString();
            const $ = cheerio.load(htmlDoc); // all => 테이블이 총 4개 들어가있는 배열의 형태라고 보면 됨
            let all = $('.print_stl table'); // all[0] 첫번째 테이블, all[1] 두번째 테이블, all[2] 세번째 테이블, all[3] 용어설명 테이블

            allResult = [];

            for(var k=0; k<3; k++) {
                const $Table = cheerio.load(all[k]); // all[n] 총 3개의 테이블 중 n번째 테이블을 가공할 것임.
                let Thead = $Table('thead tr th'); // thead 안의 tr 안의 14개의 <th></th>를 가져옴.
                let Tr = $Table('tbody tr'); // Tr는 <tr></tr> 26개로 이루어져있음.
                allResult[k] = []; // 2차원 배열로 만들어줌.
                for (var i = 0; i < Tr.length; i++) { // <tr></tr> 26개를 각각 모두 반복하며 데이터를 추출. 즉 이 for문은 26번 돌음.
                    tempDictionary = {}; // 선수 한 명 당 한개의 딕셔너리를 부여받아 데이터를 저장하고, 데이터를 allResult 배열로 넘겨준 뒤, 다시 초기화.
                    const $fTd = cheerio.load(Tr[i]); // i번째 <tr></tr> 을 $fTd에 넣음
                    let GetTd = $fTd('td'); // 26개 중 i번째 <tr></tr>에서 14개의 <td></td>를 뽑아서 getTd에 넣음.
                    for (var j = 0; j < GetTd.length; j++) { // 14개의 <td></td>를 돌면서 안의 내용을 추출할거임. 얘는 14번 돌겠지?
                        const $Td = cheerio.load(GetTd[j]); // 14개 중 j번째 <td></td> 안의 내용을 뽑아서 $Td에 넣음. 딕셔너리에서 value로 사용됨.
                        const $Th = cheerio.load(Thead[j]); // 14개 중 j번째 <th></th>를 불러옴. 딕셔너리에서 key로 사용됨.
                        tempDictionary[$Th.text()] = $Td.text(); // tempDictionary 에 <th> : <td>로 값 추가.
                    }
                    allResult[k].push(tempDictionary);
                }
            }
            // allResult[0][0] => 0번 테이블의 0번째 선수 Dictionary {"배번":2 , "선수":김명진 ... }
            // allResult[1][0] => 1번 테이블의 0번째 선수 Dictionary
            finalResult = [];
            for(var k=0; k<26; k++) {
                var temp = Object.assign({}, allResult[0][k], allResult[1][k], allResult[2][k]);
                finalResult.push(temp);
                finalResult[k]["Offensive"] = finalResult[k]["REBOUNDS"];
                delete finalResult[k]["REBOUNDS"];
                finalResult[k]["Defensive"] = finalResult[k]["RPG"];
                delete finalResult[k]["RPG"];
                finalResult[k]["RPG"] = finalResult[k]["Ast"];
                delete finalResult[k]["Ast"];
                finalResult[k]["Ast"] = finalResult[k]["APG"];
                delete finalResult[k]["APG"];
                finalResult[k]["APG"] = finalResult[k]["w/FT"];
                delete finalResult[k]["w/FT"];
                finalResult[k]["w/FT"] = finalResult[k]["w/oFT"];
                delete finalResult[k]["w/oFT"];
                finalResult[k]["w/oFT"] = finalResult[k]["Off"];
                delete finalResult[k]["Off"];
            }

            console.log(finalResult[0]);
            // console.log("k=0 " + allResult[0][0]["배번"]);
            // console.log("k=1 " + allResult[1].length);
            // console.log("k=2 " + allResult[2].length);
        });
    });
}

