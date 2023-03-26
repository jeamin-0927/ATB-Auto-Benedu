const main = () => {
	console.log("test");
	document.querySelector("#toggle-result-format > label:nth-child(1)").click();
	document.querySelector("#QuestionSearchOption-div > div:nth-child(2) > div:nth-child(1) > div.search-filter-element > div:nth-child(1) > label > input").click();
	document.querySelector("#QuestionSearchOption-div > div:nth-child(2) > div:nth-child(2) > div.search-filter-element > div:nth-child(1) > label > input").click();
	document.querySelector("#MockOption-div > div:nth-child(1) > div > div > div:nth-child(1) > label > input").click();
	document.querySelector("#QuestionBook-check").click();
	document.querySelector("#QuestionSearchOption-div > div:nth-child(4) > div.col-sm-8 > div.search-filter-element > div:nth-child(1) > label > input").click();
	document.querySelector("#QuestionOtherOption > div > div:nth-child(1) > div > input").value = "5";
	setTimeout(buttonClick, 3000);
}

const buttonClick = () => {
	document.querySelector("#QuestionSearch-button").click();
	setTimeout(createTest, 3000);
}

const createTest = () => {
	document.querySelector("#SearchQuestionList-Save").click();
	setTimeout(toTest, 3000);
}

const toTest = () => {
	document.querySelector("#SearchQuestionSaveConfirm-Dialog > div:nth-child(2) > div > button.btn.btn-sm.btn-success").click();
}

console.log("test");

setTimeout(main, 2000);

// document.onload = main;