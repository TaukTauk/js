const todo = localStorage.getItem('todo');
const todolist = JSON.parse(todo) || [];

function renderTodo() {
	let todolistHTML = '';
	for (let i = 0; i < todolist.length; i++) {
		const todoObject = todolist[i];
		const { name, dueDate } = todoObject;
		const todoTag = `
		<div>${name}</div>
		<div>${dueDate}</div>
		<button onclick="
		todolist.splice(${i}, 1);
		renderTodo();
		" class="del-btn">
		Delete
		</button>
		`;
		todolistHTML += todoTag;
	}
	document.querySelector(".container").innerHTML = todolistHTML;
}

function addTodo() {
	const inputE = document.querySelector(".nameInput");
	const name = inputE.value;
	const dateI = document.querySelector(".dateInput");
	let dueDate = dateI.value;
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${year}-${month}-${day}`;
	if (dueDate === "") {
		dueDate += currentDate;
	}
	if (name !== ""){
		todolist.push({
			name,
			dueDate
		});
	}
	inputE.value = '';
	renderTodo();
	localStorage.setItem('todo', JSON.stringify(todolist));
}

if (todolist !== null)
	renderTodo();

function enterTodo(event) {
	if (event.key === 'Enter')
		addTodo();
}