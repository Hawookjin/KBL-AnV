var cheerio = require('cheerio');
var request = require('request');
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('CP949', 'UTF-8//TRANSLIT//IGNORE');


module.exports = function(app) {
    app.get('/crawler', function (req, res) {
        var url = "http://www.kbl.or.kr/stats/team_player_gamerecord.asp?gpart=1&tcode=06&scode=29&gcode=01";

        request({url, encoding: null}, function (error, response, body) {
            var htmlDoc = iconv.convert(body).toString();

            const $ = cheerio.load(htmlDoc);
            let all = $('.print_stl table');
            // all => 테이블이 총 4개 들어가있는 배열의 형태라고 보면 됨
            // all[0] 첫번째 테이블, all[1] 두번째 테이블, all[2] 세번째 테이블, all[3] 용어설명 테이블

            //첫번째테이블 데이터 출력
            const $firstTable = cheerio.load(all[0]);
            // all[0] (첫번째 테이블)을 cheerio를 이용하여 가공할 것임.
            let firstThead = $firstTable('thead');
            let firstTr = $firstTable('tbody tr');
            // firstTr는 <tr></tr> 26개로 이루어져있음.
            //process.stdout.write($firstTable.text() + " ");

            // <tr></tr> 26개를 각각 모두 반복하며 데이터를 추출. 즉 이 for문은 26번 돌음.
            for(var i=0; i<firstTr.length; i++) {
                const $firstTd = cheerio.load(firstTr[i]); // i번째 <tr></tr> 을 $firstTd에 넣음
                let getTd = $firstTd('td'); // 26개 중 i번째 <tr></tr>에서 14개의 <td></td>를 뽑아서 getTd에 넣음.
                process.stdout.write((i + 1) + "번째 tr : "); // 번째수 출력
                for (var j = 0; j < getTd.length; j++) { // 14개의 <td></td>를 돌면서 안의 내용을 추출할거임. 얘는 14번 돌겠지?
                    const $Td = cheerio.load(getTd[j]); // 14개 중 j번째 <td></td> 안의 내용을 뽑아서 $Td에 넣음.
                    process.stdout.write($Td.text() + " "); // $Td 안에 든 콘텐츠 출력
                }
                console.log(" "); // 줄바꿈
            }
            console.log(" ");
            //secondtable 두번째 테이블 데이터 출력
            const $secondTable = cheerio.load(all[1]);
            // all[1] (두번째 테이블)을 cheerio를 이용하여 가공할 것임.
            let secondThead = $secondTable('thead');
            let secondTr = $secondTable('tbody tr');
            // secondTr는 <tr></tr> 26개로 이루어져있음.

            for (var k = 0; k < secondTr.length; k++) {
                const $secondTd = cheerio.load(secondTr[k]);
                let secondgetTd = $secondTd('td');
                process.stdout.write((k + 1) + "번째 tr : ");
                for (var l = 0; l < secondgetTd.length; l++) {
                    const $Td = cheerio.load(secondgetTd[l]);
                    process.stdout.write($Td.text() + " ");
                }
                console.log(" "); // 줄바꿈
            }
            console.log(" ");
            //세번째 테이블 데이터 출력
            const $thirdTable = cheerio.load(all[2]);
            // all[2] (세번째 테이블)을 cheerio를 이용하여 가공할 것임.
            //let thirdThead = $thirddTable('thead');
            let thirdTr = $thirdTable('tbody tr');
            // secondTr는 <tr></tr> 26개로 이루어져있음.

            for (var p = 0; p < thirdTr.length; p++) {
                const $thirdTd = cheerio.load(thirdTr[p]);
                let thirdgetTd = $thirdTd('td');
                process.stdout.write((p + 1) + "번째 tr : ");
                for (var u = 0; u < thirdgetTd.length; u++) {
                    const $Td = cheerio.load(thirdgetTd[u]);
                    process.stdout.write($Td.text() + " ");
                }
                console.log(" "); // 줄바꿈
            }

        });
    });
}
