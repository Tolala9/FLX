const rootNode = document.getElementById('root');

/* Creating start HTML layout */
rootNode.classList.add('todo-wrapper');
const headerHTML = `
<header class="todo-title">
	<h1 class="todo-title__text">TODO Cat List</h1>
	<p id="notification" class="notification hidden">Maximum item per list are created!</p>
</header>`;
rootNode.insertAdjacentHTML('beforeend', headerHTML);

const formHTML = `
<form class="todo-form">
	<input id="addTaskInput" class="add-task-input" type="text" placeholder="Add New Action" required>
	<button id="addTaskButton" class="add-task-btn btn--disabled" type="button" disabled >
		<i class="material-icons">add_box</i>
	</button>
</form>
<div class="divider-line"></div>`;
rootNode.insertAdjacentHTML('beforeend', formHTML);

const listHTML = `<ul class="todo-list"></ul>`;
rootNode.insertAdjacentHTML('beforeend', listHTML);

const footerHTML = `
<footer class="todo-footer">
	<img class="footer__img" src="assets/img/cat.png" alt="Cat paw">
</footer>`;
rootNode.insertAdjacentHTML('beforeend', footerHTML);
/* End Creating start HTML layout */

const maxTasks = 10;
const taskInput = document.querySelector('#addTaskInput');
const taskButtonAdd = document.querySelector('#addTaskButton');
const notification = document.querySelector('#notification');
const list = document.querySelector('.todo-list');
const taskItem = document.querySelector('.todo-list__item');

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
		taskInput.value = '';
		disabledAddBtn();
		checkAndDelTask();
		dragEndDropTask();
	}
}

function showTask(text) {
	let newItem = document.createElement('li')
	newItem.classList.add('todo-list__item');
	newItem.setAttribute('draggable', true);
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
			taskButtonAdd.classList.remove('btn--disabled');
			taskButtonAdd.disabled = false;
		} else {
			taskButtonAdd.classList.add('btn--disabled');
			taskButtonAdd.disabled = true;
		}
	}
}

function checkTaskAmount() {
	let taskListLenght = document.querySelectorAll('.todo-list__item').length;
	if (taskListLenght < maxTasks) {
		taskButtonAdd.classList.remove('btn--disabled');
		taskButtonAdd.disabled = false;
		taskInput.required = true;
		taskInput.disabled = false;
		notification.classList.add('hidden');
	} else {
		taskButtonAdd.classList.add('btn--disabled');
		taskButtonAdd.disabled = true;
		taskInput.required = false;
		taskInput.disabled = true;
		notification.classList.remove('hidden');
	}
}

function disabledAddBtn() {
	taskButtonAdd.classList.add('btn--disabled');
	taskButtonAdd.disabled = true;
}

function checkAndDelTask() {
	let tasks = document.querySelectorAll('.todo-list__item');
	tasks.forEach((item) => {
		const checkbox = item.querySelector('.checkbox');
		const del = item.querySelector('.list__item--delete');
		checkbox.onclick = (e) => {
			e.currentTarget.innerHTML = 'check_box';
		}
		del.onclick = (e) => {
			let task = e.currentTarget.parentNode;
			task.remove();
			checkTaskAmount();
		}
	})
}

function dragEndDropTask() {
	let dragTask = null;
	let tasks = document.querySelectorAll('.todo-list__item');
	for(let task of tasks) {
		task.addEventListener('dragstart', PerformDragStart, false);
		task.addEventListener('dragover', PerformDragOver, false);
		task.addEventListener('dragenter', PerformDragEnter, false);
		task.addEventListener('dragleave', PerformDragLeave, false);
		task.addEventListener('dragend', PerformDragEnd, false);
		task.addEventListener('drop', PerformDrop, false);
	}
	function PerformDragStart(e) {
		dragTask = e.currentTarget;
		e.currentTarget.style.opacity = '0.4';
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
	}
	function PerformDragOver(e) {
		e.preventDefault(); 
	}
	function PerformDragEnter(e) {
		e.currentTarget.classList.add('over'); 
	}
	function PerformDragLeave(e) {
		e.currentTarget.classList.remove('over'); 
	}
	function PerformDragEnd(e) {
		for(let task of tasks) {
			task.classList.remove('over'); 
			task.style.opacity = '1'
		}
	}
	function PerformDrop(e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		} 
		if (dragTask !== e.currentTarget) {
			dragTask.innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.innerHTML = e.dataTransfer.getData('text/html');
			checkAndDelTask();
		} 
		return false;
	}

}






