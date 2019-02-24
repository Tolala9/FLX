const rootNode = document.getElementById('root');

// const todoItems = [
//     {isDone: false, id: 12345, description: 'Todo 1'}
// ];

// rootNode.appendChild(/* Append your list item node*/);

/* Creating HTML layout */
rootNode.classList.add('app-wrapper');
const listPageHTML = `
	<div id="page-list" class="list-page">
		<h1 class="page-title">Simple TODO aplication</h1>
		<button id="btn-add--new" class="btn">Add new task</button>
		<ul id="task-list" class="task-list">
			<p class="empty-list">TODO is empty</p>
			<li class="task-list__item">
				<img class="item-status" src="assets/img/todo-s.png" alt="checkbox">
				<a class="item-text" href="#">Hello</a>
				<img class="item-delete" src="assets/img/remove-s.jpg" alt="delete button">
			</li>
		</ul>
	</div>`;
rootNode.insertAdjacentHTML('beforeend', listPageHTML);
const addTaskPageHTML = `
	<div id="page-add-task" class="add-task-page">
		<h1 class="page-title">Add task</h1>
		<input id="add-new-input" class="input" type="text" >
		<div class="btns-wrapper">
			<button id="btn-cancel" class="btn">Cancel</button>
			<button id="btn-add-item" class="btn">Save changes</button>
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

const listPage = document.querySelector('#page-list');
const addTaskPage = document.querySelector('#page-add-task');
const modifyTaskPage = document.querySelector('#page-modify-task');

// location.hash = '#/add';
// location.hash = '#/modify/';
// location.hash = '#/add';


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

hashServ();