let rootNode = document.getElementById("root");


/* Creating HTML layout */
rootNode.classList.add("todo-wrapper");

let headerHTML = `
<header class="todo-title">
	<h1 class="todo-title__text">TODO Cat List</h1>
	<p id="notification" class="notification hidden">Maximum item per list are created!</p>
</header>`;
rootNode.insertAdjacentHTML("beforeend", headerHTML);

let formHTML = `
<form class="todo-form">
	<input id="addTaskInput" class="add-task-input" type="text" placeholder="Add New Action" required>
	<button id="addTaskButton" class="add-task-btn btn--disabled" type="button" disabled ><i class="material-icons">add_box</i></button>
</form>
<div class="divider-line"></div>`;
rootNode.insertAdjacentHTML("beforeend", formHTML);

let listHTML = `<ul class="todo-list"></ul>`;
rootNode.insertAdjacentHTML("beforeend", listHTML);

let footerHTML = `
<footer class="todo-footer">
	<img class="footer__img" src="assets/img/cat.png" alt="Cat paw">
</footer>`;
rootNode.insertAdjacentHTML("beforeend", footerHTML);

let taskItemPattern = `
<li class="todo-list__item">
	<span class="list__item--checkbox">
		<i class="material-icons">check_box_outline_blank</i>
	</span>
	<p class="list__item--text"></p>
	<span class="list__item--delete">
		<i class="material-icons">delete</i>
	</span>
</li>`;


let maxTasks = 10;

let taskInput = document.querySelector('#addTaskInput');
let taskButtonAdd = document.querySelector('#addTaskButton');
let notification = document.querySelector('#notification');
let list = document.querySelector('.todo-list');

let form = document.querySelector('.todo-form');

window.onload = function () {
	taskInput.onkeyup =  function() {
		checkInputField();
	}

	taskButtonAdd.onclick = function() {
		let newTask = showTask(taskInput.value);
		list.appendChild(newTask);
		taskInput.value = "";
		checkInputField();
	}
}

let showTask = function(text) {
	let newItem = document.createElement("li")
	newItem.classList.add("todo-list__item");
	newItem.innerHTML = `
	<span class="list__item--checkbox">
			<i class="material-icons">check_box_outline_blank</i>
		</span>
		<p class="list__item--text">${text}</p>
		<span class="list__item--delete">
			<i class="material-icons">delete</i>
	</span>
	`;
	return newItem;
}

let checkInputField = function() {
	if (taskInput.value.trim()) {
		taskButtonAdd.classList.remove("btn--disabled");
		taskButtonAdd.disabled = false;
	} else {
		taskButtonAdd.classList.add("btn--disabled");
		taskButtonAdd.disabled = true;

	}
}


// function showTask(task) {
// 	listHTML.insertAdjacentHTML("beforeend", taskItemPattern);
// 	let taskItem = document.querySelector(".todo-list__item").cloneNode(true);
// 	let taskText = document.querySelector
// }
// showTask("hello");

function addTask() {
	if (tasks.length >= maxTasks) {
		notification.classList.remove("hidden");
		taskInput.disabled = true;
		taskInput.required = false;;
	} else {
		
		// tasks.push({
		// 	task: 
		// });
	}
};
