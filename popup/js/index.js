var autoPush = false;
var jumsujak = false;

chrome.storage.sync.get(['autoPush'], function(result) {
    autoPush = result.autoPush;
    if(autoPush){
        try{
            document.getElementById("autoPush").checked = true;
        } catch{}
    }
});
chrome.storage.sync.get(['jumsujak'], function(result) {
    jumsujak = result.jumsujak;
    if(jumsujak){
        try{
            document.getElementById("jumsujak").checked = true;
        } catch{}
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gotoBenedu')?.addEventListener('click', () => {
        window.open('https://benedu.co.kr');
    });
    document.getElementById('SearchQuestion')?.addEventListener('click', () => {
        window.open('https://benedu.co.kr/StudentStudy/SearchQuestion');
    });
    document.getElementById('TestList')?.addEventListener('click', () => {
        window.open('https://benedu.co.kr/StudentStudy/TestList');
    });
    document.getElementById('MyPoint')?.addEventListener('click', () => {
        window.open('https://benedu.co.kr/StudentMyBenedu/MyPoint');
    });
    document.getElementById('TaskList')?.addEventListener('click', () => {
        window.open('https://benedu.co.kr/StudentStudy/TaskList');
    });
    document.getElementById('jumsujak')?.addEventListener('click', () => {
        if(jumsujak) {
            jumsujak = false;
            autoPush = false;
            document.getElementById("autoPush").checked = false;
        }
        else {
            jumsujak = true;
            autoPush = true;
            document.getElementById("autoPush").checked = true;
            window.open('https://benedu.co.kr/StudentStudy/SearchQuestion');
        }

        chrome.storage.sync.set({jumsujak: jumsujak}, function() {
            console.log('Value is set to ' + jumsujak);
        });
        chrome.storage.sync.set({autoPush: autoPush}, function() {
            console.log('Value is set to ' + autoPush);
        });
    });
    document.getElementById('autoPush')?.addEventListener('click', () => {
        if(autoPush) autoPush = false;
        else autoPush = true;

        chrome.storage.sync.set({autoPush: autoPush}, function() {
            console.log('Value is set to ' + autoPush);
        });
    });
});