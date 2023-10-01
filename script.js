let numbers = [];
let inputStream = "";
let operand1 = "";
let operator = "";
let operand2 = "";
let hasOp = false;

for (let i=0; i < 10; i++) {
    numbers.push(document.querySelector(`#k${i}`));
    numbers[i].addEventListener('click', function() {inputNum(i)});
}

const btnAdd = document.querySelector('#kAdd');
btnAdd.addEventListener('click', function () {inputOp("+")});
const btnSub = document.querySelector('#kSub');
btnSub.addEventListener('click', function () {inputOp("-")});
const btnMul = document.querySelector('#kMul');
btnMul.addEventListener('click', function () {inputOp("*")});
const btnDiv = document.querySelector('#kDiv');
btnDiv.addEventListener('click', function () {inputOp("/")});
const btnE = document.querySelector('#kE');
btnE.addEventListener('click', function () {inputOp("=")});
const btnClear = document.querySelector('#kClear');
btnClear.addEventListener('click', clearAll);

const display = document.querySelector('#display');

function updateDisplay(displayOutput) {
    display.textContent = displayOutput;
}

function inputNum(i) {
    inputStream += i;
    updateDisplay(inputStream);
    console.log(inputStream);
}

function clearAll() {
    operand1 = "";
    operand2 = "";
    inputStream = "";
    updateDisplay("");
}

function inputOp(op) {
    if (inputStream === "" && operand1 === "") {
        //scenario 1: no numbers input at all yet
        //don't save operator, do nothing
        console.log(`op1 is ${operand1}`);
        console.log(`op2 is ${operand2}`);
        console.log(`operator is ${operator}`);
        return;
    } else if (inputStream !== "" && operand1 === "") {
        //scenario 2: one number entered
        //if normal operator, save number and operator and move on
        operand1 = parseInt(inputStream);
        inputStream = "";
        operator = op;
        console.log(`op1 is ${operand1}`);
        console.log(`op2 is ${operand2}`);
        console.log(`operator is ${operator}`);
        return;
    } else if (inputStream === "" && operand1 !== "") {
        //scenario 3: one number saved
        //user can overwrite operator at this stage if they want
        operator = op;
        console.log(`op1 is ${operand1}`);
        console.log(`op2 is ${operand2}`);
        console.log(`operator is ${operator}`);
        return;
    } else if (inputStream !== "" && operand1 !== "") {
        //scenario 4: one number saved, second number entered
        //act on previous entered values, store ans in operand1, hold entered operator
        operand2 = parseInt(inputStream);
        inputStream = "";
        operand1 = operate(operator);
        display.textContent = operand1;
        operator = op;
        console.log(`op1 is ${operand1}`);
        console.log(`op2 is ${operand2}`);
        console.log(`operator is ${operator}`);
        return;
    }

    console.log(`op1 is ${operand1}`);
    console.log(`op2 is ${operand2}`);
}

function inputEq() {
    if (inputStream === "" && operand1 === "") {
        //scenario 1: no numbers input at all yet
        //do nothing
        return;
    } else if (inputStream !== "" && operand1 === "") {
        //scenario 2: one number entered
        //still do nothing
        return;
    } else if (inputStream === "" && operand1 !== "") {
        //scenario 3: one number saved
        //still do nothing
        return;
    } else if (inputStream !== "" && operand1 !== "") {
        //scenario 4: one number saved, second number entered
        //act on previous entered values, don't store ans or operator
        operand2 = parseInt(inputStream);
        inputStream = "";
        display.textContent = operate(operator);
        return;
    }
}

function operate(op) {


    if (op === "+"){
        return operand1 + operand2;
    } else if (op === "-") {
        return operand1 - operand2;
    } else if (op === "*") {
        return operand1 * operand2;
    } else if (op === "/") {
        if (operand2 === 0) {
            clearAll();
            updateDisplay("Div by 0 Err");
        } else {
            return operand1 / operand2;
        }
    }
}



