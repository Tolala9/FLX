let rootNode = document.getElementById("root");

/* Creating HTML layout */
rootNode.classList.add("todo-wrapper");

let headerHTML = `
<header class="todo-title">
	<h1 class="todo-title__text">TODO Cat List</h1>
	<p class="notification hidden">Maximum item per list are created!</p>
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

/* Creating HTML layout */
let tasks = [];
let maxTasks = 10;

let taskInput = document.querySelector('#addTaskInput');
let taskButtonAdd = document.querySelector('#addTaskButton');



window.onload = function () {
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

