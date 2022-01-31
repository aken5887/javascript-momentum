const loginForm = document.querySelector("#login-form");	// HTML element
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName";

// submit이벤트는 form태그안의 enter나 button 클릭에 인해서 발생
/**
	모든 EventListener의 first argument는 항상 방금 일어난 event를 전달함
	(information about the event that just happened)
*/
/*
const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);
*/
// addEventListner가 event를 직접실행하는 것이 아니라 브라우저가 이벤트를 실행함
/*
function handleLinkClick(event){
	event.preventDefault();
	console.log(event);
	alert("href event");		 // alert blocks everyting
}
*/

function onLoginSubmit(event) {
	event.preventDefault();		// event의 기본동작을 막음
	const userName = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);	
	localStorage.setItem(USER_NAME_KEY, userName);
	printGreetings(userName);
}

function printGreetings(userName){
	greeting.innerText = `Hello ${userName}`;		// 백틱기호
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
	local storage
	https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
*/
const savedUserName = localStorage.getItem(USER_NAME_KEY);
// 새로고침 한 경우
if(savedUserName === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);	
}else{
	printGreetings(savedUserName);
}

