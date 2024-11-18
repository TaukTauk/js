// let isClick = false;
// const changeState = () => {
// 	if (!isClick) {
// 		document.querySelector(".start").innerHTML = "Finished!";
// 		isClick = true;
// 	}
// 	else {
// 		document.querySelector(".start").innerHTML = "Start";
// 		isClick = false;
// 	}
	
// }

const changeState = () => {
	setInterval(() => {
		document.querySelector(".start").innerHTML = "Finished!";
	}, 1000);
	document.querySelector(".start").innerHTML = "Loading...";
}

let timeoutId;

const addCart = () => {
	const messageElement = document.querySelector('.js-message');
    messageElement.innerHTML = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      messageElement.innerHTML = '';
    }, 2000);
}