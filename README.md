# momentum
javascript study - nico / making momentum 

1. Variable
	- const / let : 주로 const를 사용(불변변수), let은 블록단위 사용가능
	- let을 사용하면 블록 명령문이나 let을 사용한 표현식 내로 범위가 제한되는 변수를 선언할 수 있습니다. 
		이는 let이 var 키워드와 다른 점으로, var는 변수를 블록을 고려하지 않고 현재 함수 (또는 전역 스코프) 
		어디에서나 접근할 수 있는 변수를 선언합니다.
		* always const, sometimes let, never use var.

2. Element
	- document.getElementById = document.querySelector("#");
	- document.getElememtByClassName : returns array
	- document.getElementByTagname : returns array  
	** document.querySelector를 주로 사용
	- element.classList.* (add&rmove = toggle) : 클래스에 추가/삭제
	- document.createElement(tag) ex) tag : input, p, span, li ...
  
3. Event
	- javascript의 EventListner는 브라우저에서 일어나는 event를 알고있다.
	- element.addEventListener(event, function); ex) event : click, resize, mouseover, mouseleave
	- addEventListner가 event를 직접실행하는 것이 아니라 브라우저가 이벤트를 실행함, 실행시에 첫번째 argument로 event 인자 전달
	- event.preventDefault : 해당 메소드의 기본 실행 동작을 막는다. ex) submit
	
4. LocalStorage
	- 브라우저내 메모리 
	- localStorage.getItem, setItem 
 
5. javascript에서 제공하는 객체 
	- Math ex) Math.floor(Math.random()*arrays.length)
	- JSON ex) JSON.stringify : array to string, JSON.parse : string to array
	- Date ex) String(date.getHours).padStart(2,"0"), Date.now() - 70년1월1일부터 진행된 밀리초 반환
	- position : 현재 사용자의 위치정보를 포함한 객체 ex) position.coords.latitude, position.coords.longitude
	- navigator.geolocation.getCurrentPostion(successCallbackFnc, errorCallbackFnc);

6. filter
	- array 중에서 return 값이 true인 값들만 포함된 새로운 array 생성
	ex) const newArray = arrays.filter( item => item.id !== parseInt(element.id) );
	
7. setTimeout/setInterval
	- setInterval(function, 1000);
	ex) setInterval( () => console.log('interval test'), 1000);

8. fetch 
	- promise 타입의 인자를 return 
	- promise 객체는 자바스크립트에서 제공하는, 비동기를 간편하게 처리할 수 있도록 도와주는 객체이다. 
	  정해진 기능을 수행하고 나서 결과에 따라 성공이나 실패에 대한 정보를 return 한다.
	- fetch(url).then(response => response.json())
							.then(data => {});
