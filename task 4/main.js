let result = 0;
let prevEntry = 0;
let operation = null;
let currentEntry = '0';
updateScreen(result);

function updateScreen(displayValue) {
    displayValue = displayValue.toString();
    $('#result').val(displayValue.substring(0, 10)); 
    $('.screen').html(displayValue.substring(0, 10)); 
}

function isNumber(value) {
    return !isNaN(value);
}

function isOperator(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
}

function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
}

$(document).ready(function() {
    $('button').click(function() {
    const buttonPressed = $(this).html();
    if (buttonPressed === "del") {
        result = 0;
        currentEntry = '0';
    } 
    else if (buttonPressed === '.') {
        currentEntry += '.';}
    else if (isNumber(buttonPressed)) {
        if (currentEntry === '0') currentEntry = buttonPressed;
        else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = '';
    } else if (buttonPressed === '=') {
        currentEntry = operate(prevEntry, currentEntry, operation);
        operation = null;
    }
    updateScreen(currentEntry);
    });
});


