setTimeout(()=>{
    if(jumsujak){
        document.querySelector('#QuestionSearchOption-div > div:nth-child(2) > div:nth-child(1) > div.search-filter-element > div:nth-child(1) > label > input').click();
        document.querySelector('#MockOption-div > div:nth-child(1) > div > div > div:nth-child(1) > label > input').click();
        document.querySelector('#QuestionSearchOption-div > div:nth-child(4) > div.col-sm-8 > div.search-filter-element > div:nth-child(1) > label > input').click();
        document.querySelector('#QuestionOtherOption > div > div:nth-child(1) > div > input').value = 5;
        setTimeout(() => {
            document.querySelector('#QuestionSearch-button').click();
            setTimeout(() => {
                document.querySelector('#SearchQuestionList-Save').click();
                setTimeout(() => {
                    document.querySelector('#SearchQuestionSaveConfirm-Dialog > div:nth-child(2) > div > button.btn.btn-sm.btn-success').click();
                }, 1000);
            }, 1000);
        }, 1000);
    }
}, 100);