const rootNode = document.getElementById('root');

/* Creating HTML layout */
rootNode.classList.add('app-wrapper');
const listPageHTML = `
	<div id="page-list" class="list-page">
		<h1 class="page-title">Simple TODO aplication</h1>
		<button id="btn-add--new" class="btn">Add new task</button>
		<ul id="task-list" class="task-list"> </ul>
	</div>`;
rootNode.insertAdjacentHTML('beforeend', listPageHTML);
const addTaskPageHTML = `
	<div id="page-add-task" class="add-task-page">
		<h1 class="page-title">Add task</h1>
		<input id="add-new-input" class="input" type="text" >
		<div class="btns-wrapper">
			<button id="btn-cancel" class="btn">Cancel</button>
			<button id="btn-add-item" class="btn" disabled >Save changes</button>
		</div>
	</div>`;
rootNode.insertAdjacentHTML('beforeend', addTaskPageHTML);
const modifyTaskPageHTML = `
	<div id="page-modify-task" class="modify-task-page">
		<h1 class="page-title">Modify item</h1>
		<input id="modify-input" class="input" type="text" >
		<div class="btns-wrapper">
			<button id="btn-cancel" class="btn">Cancel</button>
			<button id="btn-modify-item" class="btn">Save changes</button>
		</div>
	</div>`;
rootNode.insertAdjacentHTML('beforeend', modifyTaskPageHTML);
/* End Creating HTML layout */

/* Main variables */
let tasks = [];
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let data = JSON.parse(localStorage.getItem('items'));

const listPage = document.querySelector('#page-list');
const addTaskPage = document.querySelector('#page-add-task');
const modifyTaskPage = document.querySelector('#page-modify-task');
let addNewInput = document.querySelector('#add-new-input');
const btnAdd = document.querySelector('#btn-add--new');
const btnAddItem = document.querySelector('#btn-add-item');
const taskList = document.querySelector('#task-list');

/* App execution */
window.onload = function () {
	hashServ();
	window.onhashchange = hashServ;
	checkInputField();
	showTaskList(data);
	saveNewTask();
	// resetLocalStorage();
}

/* Local Storage functions*/
function setItemToLocalStorage(){
	localStorage.setItem('items', JSON.stringify(itemsArray));
}
function resetLocalStorage() {
	localStorage.clear();
	localStorage.removeItem('items');
}

/* Serving hash in links */
function hashServ() {
	listPage.classList.add('hidden');
	addTaskPage.classList.add('hidden');
	modifyTaskPage.classList.add('hidden');

	if (location.hash === '#/add') {
		addTaskPage.classList.remove('hidden');
	} else if(location.hash === '#/modify/') {
		modifyTaskPage.classList.remove('hidden');
	} else {
		listPage.classList.remove('hidden');
	}
}
btnAdd.onclick = (e) => {
	location.hash = '#/add';
}


function checkInputField() {
	addNewInput.onkeyup = function() {
		if (addNewInput.value.trim()) {
			btnAddItem.disabled = false;
		} else {
			btnAddItem.disabled = true;
		}
	}
}

function saveNewTask() {
	btnAddItem.onclick = function() {
	addNewInput = document.querySelector('#add-new-input');
	location.hash = '';
	addTask(addNewInput.value);
	showTaskList(data);
	addNewInput.value = '';
	}
}

function addTask(text) {
	let indexItem = data.length ;
	itemsArray.push({
		isDone: false,
		id: 'task_' + ++indexItem,
		description: text  
	});
	setItemToLocalStorage();
	location.reload();
}

function showTask(task) {
	let newTask = document.createElement('li');
	newTask.classList.add('task-list__item');
	newTask.dataset.id = task.id;
	if(task.isDone) {
		newTask.classList.add('done');
		newTask.innerHTML += `<img id="item-status" class="item-status" 
		src="assets/img/done-s.png" alt="checkbox">`;
		newTask.innerHTML += `<a class="item-text" 
		href="#">${task.description}</a>`;
		newTask.innerHTML += `<img id="delete-icon" class="item-delete" 
		src="assets/img/remove-s.jpg" alt="delete button">`;
	} else {
		newTask.innerHTML += `<img id="item-status" class="item-status" 
		src="assets/img/todo-s.png" alt="checkbox">`;
		newTask.innerHTML += `<a class="item-text" 
		href="#">${task.description}</a>`;
		newTask.innerHTML += `<img id="delete-icon" class="item-delete" 
		src="assets/img/remove-s.jpg" alt="delete button">`;
	}

	return newTask;
}

function showTaskList(data) {
	taskList.innerHTML = '';
	if (data && data.length) {
		data.forEach( function(task) {
			let newTask = showTask(task);
			taskList.appendChild(newTask);
		});
	} else {
		taskList.innerHTML = `<p class="empty-list">TODO is empty</p>`;
	}
	checkAndDelTask();
}

function checkAndDelTask() {
	let taskItems = document.querySelectorAll('.task-list__item');
	taskItems.forEach((item) => {
		const checkbox = item.querySelector('#item-status');
		const del = item.querySelector('#delete-icon');
		checkbox.onclick = (e) => {
			const parentItem = e.currentTarget.parentNode;
			completeTask(parentItem.dataset.id);
			showTaskList(data);
		}
		// del.onclick = (e) => {
		// 	let task = e.currentTarget.parentNode;
		// 	task.remove();
		// }
	})
}

function completeTask(id) {
	itemsArray = itemsArray.map((item) =>{
		if(item.id === id) {
			item.isDone = true;
		}
		return item;
	});
	setItemToLocalStorage(); 
	location.reload(); //add to setItemToLocalStorage()
}




