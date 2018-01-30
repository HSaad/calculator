const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.ops');

const ops = "+x-/";

const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

const display = document.querySelector('.display');

numbers.forEach((number) =>{
	number.addEventListener('click', (e) => {
		display.textContent += number.textContent;
	})
});

operations.forEach((operation) =>{
	operation.addEventListener('click', (e) => {
		//check if last char in display an operator (ie x/+)
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

equal.addEventListener('click', (e) =>{
	stringOperations = display.textContent.match(/[^\d()]+|[\d.]+/g);
	let product = 0;

	for (let i = 0; i < stringOperations.length; i++){
		if(ops.indexOf(stringOperations[i]) != -1){
			let op = stringOperations[i];
			let num1 = +stringOperations[i-1];
			let num2 = +stringOperations[i+1];
			product += operate(op, num1, num2);
		}
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
	return num1 / num2; //to the 10th decimal place
}

function operate(ops, num1, num2){
	console.log(ops);
	if(ops == "+"){
		return add(num1, num2);
	}else if(ops == "-"){
		return subtract(num1, num2);
	}else if(ops == "x"){
		return multiply(num1, num2);
	}else if(ops == "/"){
		return divide(num1, num2);
	}else{
		return "Operation does not exist";
	}
}