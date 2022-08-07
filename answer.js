const setAnswer = data => {
    let answer = new Array();
    data = data.Table01;
    data.forEach(e => {
        answer.push(e.QST_CORRECT);
    });

    let waitTime = document.querySelector("#main-container > div.main-content > div > div.page-content > div > div > div:nth-child(3) > div > div.table-header.bolder > span.badge.pull-right");
    waitTime = waitTime.innerText.split(':');
    waitTime = waitTime[1] * 60 + waitTime[2];

    let answerTable = document.querySelectorAll("#Answer > tbody > tr");

    //console.log(answer);

    for(let i = 0; i < answerTable.length; i++){
        let e = answerTable[i];
        let howMany = e.childElementCount - 2;
        if(howMany == 5){
            let bg = document.querySelector(`#Answer > tbody > tr:nth-child(${i + 1}) > td:nth-child(${++answer[i]}) > span`);
            bg.click();
        }
        else{
            let bg = document.querySelector(`#Answer > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > input`);
            bg.value = answer[i];
        }
        //console.log(e, e.childElementCount);
    }
    console.log(jumsujak, autoPush);
    setTimeout(() => {
        console.log('time');
        console.log(jumsujak, autoPush);
        if(autoPush){
            document.querySelector("#main-container > div.main-content > div > div.page-content > div > div > div.TestArea > div.AnswerArea > div.AnswerOptions > div:nth-child(2) > div.AnswerSubmit > a").click();
        }
    }, waitTime * 1000 + 2000);
}
const main = url => {
    url = url.split('?')[1].split('&');
    data = new Object();
    for(let i = 0; i < url.length; i++){
        data[url[i].split('=')[0]] = url[i].split('=')[1];
    }
    let fch = fetch("https://benedu.co.kr/Utils/TestDetailPrint", {
    "headers": {
        "accept": "*/*",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "beneduajax": "true",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://benedu.co.kr/StudentStudy/TestList",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `values%5B0%5D%5Bvalue%5D=${data.id}&values%5B0%5D%5Bdetailvalue%5D=${data.value}&type=${document.querySelector("#main-container > div.main-content > div > div.page-content > div > div > div.form-group.form-inline.no-margin > div > div > ul > li:nth-child(1) > label:nth-child(3) > input").value}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    }).then(res => res.json())
    .then(data => setAnswer(data));
    /*
    .catch(err => {
        console.log(`${err} error`);
    });
    */
}
const isTesk = () => {
    let url = location.href.split('/')[4];
    return url.substr(0, 8) == 'TakeTest' ? true : false;
}
const isResult = () => {
    let url = location.href.split('/')[4];
    return url.substr(0, 10) == 'TestResult' ? true : false;
}

let url = location.href.split('/')[4];
if(isTesk()) main(url);

setTimeout(() => {
    console.log(isResult(), jumsujak)
    if(isResult() && jumsujak) location.href = 'https://benedu.co.kr/StudentStudy/SearchQuestion';
}, 1000);