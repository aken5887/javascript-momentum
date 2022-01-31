/**
   3.1 HTML in Javascript
   - document : (Given) HTML Object 
   - document.getElementById

 const title = document.getElementById("title");
 console.dir(title);
 console.log(title.innerText);
 title.innerText = "Grab me!";
 console.log(title.className);
*/
  
/** 
	3.2 Searching For Elements
	- document.getElementsByClassName : returns array
	- document.getElementsByTagname : returns array
	- document.querySelector(".hello h1") << important>> returns 1 element (first one)
	- document.querySelector("#hello") = document.getElementById("hello")
	- document.querySelectorAll(".hello h1") >> returns all element (array)
								** CSS selector
*/  
/**
	3.3 Events
 */
	const title = document.querySelector("div.hello:first-child h1");
	console.dir(title);;
	/*
	function handleTitleClick(name){
		const currentColor = title.style.color;
		let newColor;
		console.log(currentColor);
		switch(currentColor){
			case "blue":
				newColor = "tomato";
				break;
			case "tomato":
				newColor = "blue";	
				break;		
			default:
				newColor = "blue";
		}
		title.style.color = newColor;
		title.style.cursor = "pointer";
	}
	*/
	// == 는 연산이 되기전에 피연산자들을 비교할 수 있는 형태로 자동변환
	// === 은 연산이 되기전에 형변환을 하지 않음 - 명시적인 형변환이 필요함
	function handleTitleClick(){
		const clickedClass = "active";	// string 클래스명을 변수에 저장
	/*	if(title.className === clickedClass){
			title.className = "";
		}else{				
			title.className = clickedClass;
		}*/
		// classList
	/*	if(title.classList.contains(clickedClass)){
			title.classList.remove(clickedClass);
		}else{
			title.classList.add(clickedClass);
		}*/
		// toggle
		title.classList.toggle(clickedClass);
	}
	title.addEventListener("click", handleTitleClick);	// 기본 : 함수에 ()를 붙이지 않음
/*	title.addEventListener("click", function(){handleTitleClick("four")});	// 매개변수가 존재하는 경우
	title.addEventListener("mouseenter", handleMouseEnter);
	title.addEventListener("mouseleave", handleMousLeave);*/
	// addEventListener 대신 object.속성으로 이벤트 추가가능
	//title.onclick = handleTitleClick;
	//title.onmouseenter = handleMouseEnter;
	// resize 속성
	// 그외 : https://developer.mozilla.org/ko/docs/Web/API/Window
/*	 window.addEventListener("resize", handelWindowResize); 
*/