let display = document.querySelector(".display");
let operator = "";
let number1 = "0";
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
    if (display.textContent == "0" || display.textContent == ""){
        display.textContent = displayText;
    } else {
        display.textContent += displayText;
    }
}

function clearDisplay(){
    display.textContent = "";
}

function updateDisplayOperator(operatorElement){
    display.textContent += ` ${operatorElement.target.textContent} `;
}

function setNumber(digitElement){
    if(number1 == "0"){
        number1 = digitElement.target.value;
    }else {
        number1 += digitElement.target.value;   
    }
}

function setDigitFunction(){
    let digits = document.querySelectorAll(".digit");
    digits.forEach(digit => digit.addEventListener("click", e => {
        if(e.target.value == "." && number1.includes(".")){
            return
        }else {
            setNumber(e)
            updateDisplay(e.target.value);
        }
    }));
}

function setOperator(operatorElement){
    operator = operatorElement.target.id
}

function setOperatorFunction(e){
    if(number2 != "" && number1 != ""){
        clearDisplay();
        number1 = operate(operator, +number1, +number2);
        operator = ""
        updateDisplay(number1);
    }
    if(number1 != ""){
        number2 = `${number1}`;
        number1 = ""
    }

    if( e.target.textContent != "=" && operator == ""){
        setOperator(e)
        updateDisplayOperator(e);
    }
}

function setClearFunction(){
    clearDisplay();
    operator = "";
    number1 = "0";
    number2 = ""
    updateDisplay("0");
}

function setDeleteFunction(){
    let displayText = display.textContent.trim();
    let lastChar = displayText[displayText.length - 1];

    if(lastChar == "+" ||
        lastChar == "x" ||
        lastChar == "-" ||
        lastChar == "/"){
            number1 = number2;
            number2 = "";
            operator = ""
            clearDisplay();
            updateDisplay(displayText.slice(0,-1));
    }
    else{
        number1 = number1.slice(0, -1) == "" ? "0" : number1.slice(0, -1);
        text = displayText.slice(0,-1) == "" ? "0" : displayText.slice(0,-1);
        clearDisplay();
        updateDisplay(text);
    }
}

function calculator(){
    let addButton = document.querySelector("#add");
    let subtractButton = document.querySelector("#subtract");
    let multiplyButton = document.querySelector("#multiply");
    let divideButton = document.querySelector("#divide");
    let equalButton = document.querySelector("#enter");

    let clearButton = document.querySelector("#clear");
    let deleteButton = document.querySelector("#delete");

    addButton.addEventListener("click", (e) => setOperatorFunction(e));
    subtractButton.addEventListener("click", (e) => setOperatorFunction(e));
    multiplyButton.addEventListener("click", (e) => setOperatorFunction(e));
    divideButton.addEventListener("click", (e) => setOperatorFunction(e));
    equalButton.addEventListener("click", (e) => setOperatorFunction(e));

    clearButton.addEventListener("click", setClearFunction);
    deleteButton.addEventListener("click", setDeleteFunction);

    setDigitFunction();
}

calculator();