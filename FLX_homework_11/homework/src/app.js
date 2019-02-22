let rootNode = document.getElementById("root");

/* Creating start HTML layout */
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
/* ========== */

let maxTasks = 4;
let taskInput = document.querySelector('#addTaskInput');
let taskButtonAdd = document.querySelector('#addTaskButton');
let notification = document.querySelector('#notification');
let list = document.querySelector('.todo-list');
let taskItem = document.querySelector('.todo-list__item');

window.onload = function () {
	checkInputField();
	addNewTask();
}

function addNewTask() {
	checkTaskAmount();
	taskButtonAdd.onclick = function() {
		checkInputField();
		let newTask = showTask(taskInput.value);
		list.appendChild(newTask);
		checkTaskAmount();
		taskInput.value = "";
		disabledAddBtn();
		checkAndDelTask();
	}
}

function showTask(text) {
	let newItem = document.createElement("li")
	newItem.classList.add("todo-list__item");
	newItem.innerHTML = `
	<span class="list__item--checkbox">
		<i class="material-icons checkbox">check_box_outline_blank</i>
	</span>
	<p class="list__item--text">${text}</p>
	<span class="list__item--delete">
		<i class="material-icons">delete</i>
	</span>
	`;
	return newItem;
}

function checkInputField() {
	taskInput.onkeyup = function() {
		if (taskInput.value.trim()) {
			taskButtonAdd.classList.remove("btn--disabled");
			taskButtonAdd.disabled = false;
		} else {
			taskButtonAdd.classList.add("btn--disabled");
			taskButtonAdd.disabled = true;
		}
	}
}

function checkTaskAmount() {
	let taskListLenght = document.querySelectorAll(".todo-list__item").length;
	if (taskListLenght < maxTasks) {
		taskButtonAdd.classList.remove("btn--disabled");
		taskButtonAdd.disabled = false;
		taskInput.required = true;
		taskInput.disabled = false;
		notification.classList.add("hidden");
	} else {
		taskButtonAdd.classList.add("btn--disabled");
		taskButtonAdd.disabled = true;
		taskInput.required = false;
		taskInput.disabled = true;
		notification.classList.remove("hidden");
	}
};

function disabledAddBtn() {
	taskButtonAdd.classList.add("btn--disabled");
	taskButtonAdd.disabled = true;
}

function checkAndDelTask() {
	let tasks = document.querySelectorAll(".todo-list__item");
	tasks.forEach((item) => {
		let checkbox = item.querySelector(".checkbox");
		let del = item.querySelector(".list__item--delete");
		checkbox.onclick = (e) => {
			e.currentTarget.innerHTML = "check_box";
		}
		del.onclick = (e) => {
			let task = e.currentTarget.parentNode;
			task.remove();
			checkTaskAmount();
		}
	})
}


