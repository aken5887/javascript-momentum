/**
	2.3 const and let 
	- const : 변경불가능한 상수 (기본)
	- let : 변경가능 (변수를 변경해야 하는 경우, 때에 따라서 let을 사용)
		* let을 사용하면 블록 명령문이나 let을 사용한 표현식 내로 범위가 제한되는 변수를 선언할 수 있습니다. 
		  이는 let이 var 키워드와 다른 점으로, var는 변수를 블록을 고려하지 않고 현재 함수 (또는 전역 스코프) 
		  어디에서나 접근할 수 있는 변수를 선언합니다.
		* always const, sometimes let, never use var.

	2.4 Booleans 
	- true/false
	- null
	- undefined
	* string/numbers
	
 	2.5 Arrays 
 	- 정의 : []
 	- Arrays.push(element);
 	
 	2.6 Objects
 	- 한개의 개체(entity)
 	- 정의 : {}
 	- const로 정의된 Object 안 속성을 수정/추가하는 것은 가능 
 	
 	2.7 Function part1, part2
 	- arguments
 	- const player = {
		name : "nico",
		sayHello : function(name) {
					console.log("hello "+name);
				},
		}
		
	2.11 Returns
	 - function do something return value
	
	2.13 Conditionals
	 - parseInt(string) - number or NaN
	 - isNaN(number) = true or false (boolean)
	 - true || true  = true
	 - true || false = true
	 - false || true = true
	 - false || false = false
  */