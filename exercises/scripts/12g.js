let timeInterval = 0;

let num = 2;
const addI = () => {
	num++;
}

const removeI = () => {
	if (num > 0)
		num--;
}

setInterval(() => {
	if ((timeInterval % 2) === 0 && num > 0)
		document.title = `(${num}) New Messages`;
	else
		document.title = "App";
	console.log(num);
	timeInterval++;
}, 1000);