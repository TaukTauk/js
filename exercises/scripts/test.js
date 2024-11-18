// const multiply = (x, y) => x * y

// console.log(multiply(2, 3));
// console.log(multiply(7, 10));
// console.log(multiply(7, 19));

// const countPositive = (array) => {
// 	let i = 0;
// 	array.forEach((value, index) => {
// 		if (array[index] > 0) {
// 			i++;
// 		}
// 	})
// 	return i;
// }

// console.log(countPositive([-2, 3, -5, 7, 10]))

// const addNum = (array, num) => {
// 	array.map((value, index) => array[index] = array[index] + num);
// 	return array;
// }

// console.log(addNum([1, 2, 3, 5], 2));

// const removeEgg = (array) => {
// 	return array.filter(value => value !== 'egg');
// }

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

const removeEgg = (array) => {
	let egg = 0;
	return array.filter((value) => {
		if (value === 'egg' && egg < 2) {
			egg++;
			return false;
		}
		return true;
	})
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));