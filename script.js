const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.ops');

const equal = document.querySelector('.equal');
const display = document.querySelector('.display');

numbers.forEach((number) =>{
	number.addEventListener('click', (e) => {
		display.textContent += number.textContent;
	})
});

operations.forEach((operation) =>{
	operation.addEventListener('click', (e) => {
		display.textContent += " " + operation.textContent + " ";
	})
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
	return num1 / num2;
}

function operate(ops, num1, num2){
	if(ops == "+"){
		add(num1, num2);
	}else if(ops == "-"){
		subtract(num1, num2);
	}else if(ops == "*"){
		multiply(num1, num2);
	}else if(ops == "/"){
		divide(num1, num2);
	}else{
		return "Operation does not exist";
	}
}