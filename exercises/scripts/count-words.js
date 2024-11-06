function countWords(array){
	let result = {};
	for (let i = 0; i < array.length; i++){
		const word = array[i];
		if (!result[word])
			result[word] = 1;
		else
			result[word]++;
	}
	return result;
}

// console.log(countWords(['apple', 'grape', 'apple', 'apple']))

function rmEgg(array) {
	let i = 0;
	const arr = array.slice();
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] !== 'egg') {
			continue;
		}
		if (arr[j] === 'egg') {
			i++;
			arr.splice(j, 1);
			j--;
			if (i === 2)
				break;
		}
	}
	return arr;
}

const food = ['egg', 'dog', 'egg', 'apple','egg','cat'];
console.log(rmEgg(food));
console.log(food);