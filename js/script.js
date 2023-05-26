let operator = "";
let number1 = "";
let number2 = "";

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num2 - num1;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num2 / num1;
}

function operate(operator, num1, num2){
    switch(operator){
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

function updateDisplay(displayText){
    let display = document.querySelector(".display");
    if (display.textContent == "0" || display.textContent == ""){
        display.textContent = displayText;
    } else {
        display.textContent += displayText;
    }
}

function clearDisplay(){
    let display = document.querySelector(".display");
    display.textContent = "";
}

function updateDisplayOperator(operatorElement){
    let display = document.querySelector(".display");
    display.textContent += operatorElement.target.textContent;
}

function setNumber(digitElement){
    number1 += digitElement.target.value;
}


function setDigitFunction(){
    let digits = document.querySelectorAll(".digit");
    digits.forEach(digit => digit.addEventListener("click", e => {
        setNumber(e)
        updateDisplay(e.target.value);
    }));
}

function setOperator(operatorElement){
    operator = operatorElement.target.id
}

function calculator(){
    let add = document.querySelector("#add");
    let subtract = document.querySelector("#subtract");
    let multiply = document.querySelector("#multiply");
    let divide = document.querySelector("#divide");

    add.addEventListener("click", (e) => {
        if(number2 != ""){
            clearDisplay();
            number1 = operate(operator, +number1, +number2);
            updateDisplay(number1);

        }
        setOperator(e)
        number2 = number1;
        number1 = ""
        updateDisplayOperator(e);
    });

    subtract.addEventListener("click", (e) => {
        if(number2 != ""){
            clearDisplay();
            console.log(number1);
            console.log(number2);
            number1 = operate(operator, +number1, +number2);
            updateDisplay(number1);
        }
        setOperator(e)
        number2 = number1;
        number1 = ""
        updateDisplayOperator(e);
    });

    multiply.addEventListener("click", (e) => {
        if(number2 != ""){
            clearDisplay();
            number1 = operate(operator, +number1, +number2);
            updateDisplay(number1);

        }
        setOperator(e)
        number2 = number1;
        number1 = ""
        updateDisplayOperator(e);
    });

    divide.addEventListener("click", (e) => {
        if(number2 != ""){
            clearDisplay();
            console.log(number1);
            console.log(number2);
            number1 = operate(operator, +number1, +number2);
            updateDisplay(number1);
        }
        setOperator(e)
        number2 = number1;
        number1 = ""
        updateDisplayOperator(e);
    });

    setDigitFunction();
}

calculator();