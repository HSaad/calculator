const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.ops');

const ops = "+*-/";

const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const decimal = document.querySelector('.decimal');

const display = document.querySelector('.display');

numbers.forEach((number) =>{
	number.addEventListener('click', (e) => {
		if (display.textContent == "ERROR"){
			display.textContent = "";
		}
		display.textContent += number.textContent;
	})
});

operations.forEach((operation) =>{
	operation.addEventListener('click', (e) => {
		if (display.textContent == "ERROR"){
			display.textContent = "";
		}
		display.textContent += operation.textContent;
	})
});

clear.addEventListener('click', (e) =>{
	display.textContent = "";
});

//removes the last digit in the display
back.addEventListener('click', (e) =>{
	display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

decimal.addEventListener('click', (e) =>{
	stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
	if(stringOperations[stringOperations.length -1].indexOf(".") == -1){
		display.textContent += ".";
	}
});

equal.addEventListener('click', (e) =>{
	stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
	let product = 0;

	for (let i = 0; i < stringOperations.length; i++){
		if(ops.indexOf(stringOperations[i]) != -1){
			let op = stringOperations[i];
			let num1 = +stringOperations[i-1];
			let num2 = +stringOperations[i+1];
			if(op == "/" && num2 == 0){
				product = "ERROR";
				break;
			}
			product += operate(op, num1, num2);
		}
	}

	//incase of = before finishing operation
	if(stringOperations.length < 3){
		product = display.textContent;
	}

	display.textContent = product;
});

function add(num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return +(num1 / num2).toFixed(7); 
}

function operate(ops, num1, num2){
	console.log(ops);
	if(ops == "+"){
		return add(num1, num2);
	}else if(ops == "-"){
		return subtract(num1, num2);
	}else if(ops == "*"){
		return multiply(num1, num2);
	}else if(ops == "/"){
		return divide(num1, num2);
	}else{
		return "Operation does not exist";
	}
}
