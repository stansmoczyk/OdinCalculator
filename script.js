// Simple Calculator page for The Odin Project created by Stan Smoczyk

// Calculator logic for new layout
(() => {
    const screen = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');

    let currentInput = '';
    let operator = null;
    let firstValue = null;
    let waitingForSecondValue = false;

    keys.addEventListener('click', event => {
        if (!event.target.matches('button')) return;
        const { value } = event.target;

        switch (true) {
            case event.target.classList.contains('operator') && value !== '=':
                handleOperator(value);
                break;
            case event.target.classList.contains('decimal'):
                inputDecimal();
                break;
            case event.target.classList.contains('all-clear'):
                clearAll();
                break;
            case event.target.classList.contains('equal-sign'):
                calculate();
                break;
            default:
                inputNumber(value);
        }
        updateScreen();
    });

    function inputNumber(num) {
        if (waitingForSecondValue) {
            currentInput = num;
            waitingForSecondValue = false;
        } else {
            currentInput = currentInput === '0' ? num : currentInput + num;
        }
    }

    function inputDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    }

    function handleOperator(nextOperator) {
        if (firstValue === null && currentInput !== '') {
            firstValue = parseFloat(currentInput);
        } else if (operator) {
            const result = performCalculation(operator, firstValue, parseFloat(currentInput));
            firstValue = result;
            currentInput = String(result);
        }
        operator = nextOperator;
        waitingForSecondValue = true;
    }

    function calculate() {
        if (operator && firstValue !== null && currentInput !== '') {
            const result = performCalculation(operator, firstValue, parseFloat(currentInput));
            currentInput = String(result);
            firstValue = null;
            operator = null;
            waitingForSecondValue = false;
        }
    }

    function performCalculation(op, first, second) {
        switch (op) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return second !== 0 ? first / second : 'Error';
            default: return second;
        }
    }

    function clearAll() {
        currentInput = '';
        operator = null;
        firstValue = null;
        waitingForSecondValue = false;
    }

    function updateScreen() {
        screen.value = currentInput;
    }

    clearAll();
    updateScreen();
})();
const screen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

let currentInput = '';
let operator = null;
let firstValue = null;
let waitingForSecondValue = false;

keys.addEventListener('click', event => {
    if (!event.target.matches('button')) return;
    const { value } = event.target;

    switch (true) {
        case event.target.classList.contains('operator') && value !== '=':
            handleOperator(value);
            break;
        case event.target.classList.contains('decimal'):
            inputDecimal();
            break;
        case event.target.classList.contains('all-clear'):
            clearAll();
            break;
        case event.target.classList.contains('equal-sign'):
            calculate();
            break;
        default:
            inputNumber(value);
    }
    updateScreen();
});

function inputNumber(num) {
    if (waitingForSecondValue) {
        currentInput = num;
        waitingForSecondValue = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function handleOperator(nextOperator) {
    if (firstValue === null && currentInput !== '') {
        firstValue = parseFloat(currentInput);
    } else if (operator) {
        const result = performCalculation(operator, firstValue, parseFloat(currentInput));
        firstValue = result;
        currentInput = String(result);
    }
    operator = nextOperator;
    waitingForSecondValue = true;
}

function calculate() {
    if (operator && firstValue !== null && currentInput !== '') {
        const result = performCalculation(operator, firstValue, parseFloat(currentInput));
        currentInput = String(result);
        firstValue = null;
        operator = null;
        waitingForSecondValue = false;
    }
}

function performCalculation(op, first, second) {
    switch (op) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return second !== 0 ? first / second : 'Error';
        default: return second;
    }
}

function clearAll() {
    currentInput = '';
    operator = null;
    firstValue = null;
    waitingForSecondValue = false;
}

function updateScreen() {
    screen.value = currentInput;
}

clearAll();
updateScreen();
