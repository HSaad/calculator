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
    if (display.textContent == "0" || display.textContent == "" || display.textContent == "ERROR"){
        display.textContent = displayText;
    } else {
        display.textContent += displayText;
    }
}

function clearDisplay(){
    display.textContent = "";
}

function updateDisplayOperator(operatorElement){
    if (display.textContent != "" && display.textContent != "ERROR"){
        display.textContent += ` ${operatorElement.target.textContent} `;
    } 
}

function setNumber(digit){
    if(number1 == "0"){
        number1 = digit;
    }else {
        number1 += digit;   
    }
}

function setDigit(digit){
    if(digit == "." && number1.includes(".")){
        return
    }else {
        setNumber(digit)
        updateDisplay(digit);
    }
}

function setDigitFunction(){
    let digits = document.querySelectorAll(".digit");
    digits.forEach(digit => digit.addEventListener("click", e => setDigit(e.target.value)));
}

function setOperator(operatorElement){
    operator = operatorElement.target.id
}

function setOperatorFunction(e){
    if (display.textContent == "ERROR") return;

    if(number2 != "" && number1 != ""){
        clearDisplay();
        number1 = operate(operator, +number1, +number2);
        operator = ""
        if(number1 == "Infinity" || number1 == "-Infinity"){
            setClearFunction();
            updateDisplay("ERROR");
            return
        }
        updateDisplay(number1);
    }

    if(number1 != ""){
        number2 = `${number1}`;
        number1 = ""
    }

    if(e.target.textContent != "=" && operator == ""){
        setOperator(e)
        updateDisplayOperator(e);
    }else if(e.target.textContent == "="){
        number1 = `${number2}`;
        number2 = ""
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

    if(displayText == "ERROR") return;

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

function getKeyboardDigits(){
    document.addEventListener('keypress', (event) => {
        var name = event.key;
        if(!isNaN(name) && name != " "){
            setDigit(name);
        }else if (name == "."){
            setDigit(name);
        }else if (name == "+"){
            document.getElementById("add").click();
        } else if (name == "-"){
            document.getElementById("subtract").click();
        }else if (name == "x" || name == "*"){
            document.getElementById("multiply").click();
        } else if (name == "/"){
            document.getElementById("divide").click();
        } else if (name == "=" || name == "Enter"){
            document.getElementById("enter").click();
        }
    }, false);
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
    getKeyboardDigits();
}

calculator();