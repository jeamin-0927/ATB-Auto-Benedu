const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const answerClick = () => {
	document.querySelector(`#Answer > tbody > tr:nth-child(1) > td:nth-child(${rand(2, 6)}) > span`).click();
	document.querySelector(`#Answer > tbody > tr:nth-child(2) > td:nth-child(${rand(2, 6)}) > span`).click();
	document.querySelector(`#Answer > tbody > tr:nth-child(3) > td:nth-child(${rand(2, 6)}) > span`).click();
	document.querySelector(`#Answer > tbody > tr:nth-child(4) > td:nth-child(${rand(2, 6)}) > span`).click();
	document.querySelector(`#Answer > tbody > tr:nth-child(5) > td:nth-child(${rand(2, 6)}) > span`).click();

	const time = document.querySelector("#main-container > div.main-content > div > div.page-content > div > div > div:nth-child(3) > div > div.table-header.bolder > span.badge.pull-right").innerText.replace(/[^0-9]/g, '');
	const timeInt = parseInt(time);
	const second = Math.floor(timeInt / 100) * 60 + timeInt % 100;

	setTimeout(() => {
		document.querySelector("#main-container > div.main-content > div > div.page-content > div > div > div.TestArea > div.AnswerArea > div.AnswerOptions > div:nth-child(2) > div.AnswerSubmit > a").click();
	}, second * 1000);
}

answerClick();