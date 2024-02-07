let display = document.getElementById("display");
let calculate = [];

function appendNumber(number) {
    calculate.push(number);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = calculate.join("");
}
function calculateResult() {
    try {
        let result = eval(calculate.join(""));
        calculate = [result];
        updateDisplay();
    } catch (error) {
        alert("Error in calculation");
    }
};
function backspace(){
    calculate.pop();
    updateDisplay();
}
function clearDisplay() {
    calculate = [];
    updateDisplay();
};



