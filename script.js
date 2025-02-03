let operator = "";
let previousNumber = "";
let currentNumber = "";



//get the display numbers
let currentDisplayNumber = document.querySelector("#currentNumber")
let previousDisplayNumber = document.querySelector("#previousNumber");

//store all the components on HTML in the JS
let clear = document.querySelector(".clear");
let calculate = document.querySelector(".calculate");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number-btn");
let operators = document.querySelectorAll(".operator-btn");
let sign = document.querySelector(".sign");
let modulus = document.querySelector(".modulus");
let clearE = document.querySelector(".clearEntry")

//************* ADD EVENT LISTENERS */
numbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});


operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

//special operations
clear.addEventListener("click", () => clearDisplay());
calculate.addEventListener("click", () => performCalculate());
sign.addEventListener("click", () => changeSign());
modulus.addEventListener("click", () => applyModulus());
clearE.addEventListener("click", () => clearEntry());

// ********************CORE FUNCTIONS **************
function handleNumber(num){
    currentNumber += num;
    currentDisplayNumber.value = currentNumber;
}

function handleOperator(op){
    if (op === "X") op = "*";
    operator = op;
    previousNumber = currentNumber;
    previousDisplayNumber.value = previousNumber;
    currentNumber = "";
    currentDisplayNumber.value = "";
}

function performCalculate(){
    //get the previous num and current num 
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    let result = 0;

    switch (operator){
        case "+": result = previousNumber + currentNumber; break;
        case "-": result = previousNumber - currentNumber; break;
        case "/": result = currentNumber === 0 ? "Error" : previousNumber / currentNumber; break;
        case "*": result = previousNumber * currentNumber; break;
    }

    //resetting everything
    currentDisplayNumber.value = result; //set the current display to result
    previousDisplayNumber.value = ""; //remove the previous display
    previousNumber = ""; //remove prev number
    currentNumber = result.toString();
    operator = "";
}

function clearDisplay() {
    //reset everythibng
    currentNumber = "";
    previousNumber = "";
    operator = "";
    currentDisplayNumber.value = "";
    previousDisplayNumber.value = "";
}

function changeSign() {

    //chamge thje siogn 
    if (currentNumber !== "") {
        currentNumber = (-parseFloat(currentNumber)).toString();
        currentDisplayNumber.value = currentNumber;
    }
}

function applyModulus() {
    
    if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) / 100).toString();
        currentDisplayNumber.value = currentNumber;
    }
}

function clearEntry(){
    currentNumber = currentNumber.slice(0,-1);
    currentDisplayNumber.value = currentNumber;
}