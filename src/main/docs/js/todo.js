const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let todos = [];
const TODO_KEYS = "todos";

function saveToDos(){
	//array to string
	localStorage.setItem(TODO_KEYS, JSON.stringify(todos));
}

function deleteToDo(event){
	const parentEle = event.target.parentElement;
	console.log(parentEle.id);
	parentEle.remove();
	// filter : callback 함수 return 값이 true인 경우에만 array에 포함
	todos = todos.filter((item)=> item.id !== parseInt(parentEle.id));
	console.log(todos);
	saveToDos();
}

function paintToDo(newTodoObj){
	// making elements
	const li = document.createElement("li");
	li.id = newTodoObj.id;
	const span = document.createElement("span");
	span.innerText = newTodoObj.text;
	const button = document.createElement("button");
	button.innerText = "X";
	button.addEventListener("click", deleteToDo);
	
	// appending elements
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	//localStorage.setItem(`todo${localStorage.length -1}`, newTodo);
	const newTodoObj = {
		text : newTodo,
		id : Date.now(),
	};
	
	paintToDo(newTodoObj);
	todos.push(newTodoObj);
	saveToDos();
	toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEYS);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	/** 
		for(const todos in parsedToDos){
		paintToDo(parsedToDos[todos]);
	}*/
	/**
		parsedToDos.forEach((item)=>{
			paintToDo(item);
		})
	 */
	console.log(parsedToDos);
	todos = parsedToDos;
	parsedToDos.forEach(paintToDo);	// paintToDo 함수에 item을 인자로 전달 (명시하지 않아도)
}

