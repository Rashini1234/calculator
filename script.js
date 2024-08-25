const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

//Variable to store the calculation value
let calculateValue = ' '

const operators = ['%', '/', '*', '-', '+']

//Function called when a number is pressed
function tapNum(numValue){
    //Prevent a decimal point from being added when the calculation string is empty
    if (calculateValue == ' ' && numValue == '.') {
        return;
    }

    //Prevent constructive decimal points from being added
    if (calculateValue.at(-1) == '.' && numValue == '.') {
        return;
    }

    //Add the number to the calculation screen
    addCalculateScreen(numValue)
}

//Function called when an operator is pressed
function tapOperator(operatorValue) {
    //Do not allow an operator if the calculation is empty
    if (calculateValue == ' ') return;

    //Prevent consecutive operators from being added
    if (operators.some(operator => calculateValue.at(-1) == operator)) {
        return;
    }

    // If there is a previous result, use that result as the starting value for the next calculation
    if (resultScreen.textContent.trim() !== '' && resultScreen.textContent !== 'Error') {
        calculateValue = resultScreen.textContent; // Store the current number
    // Do NOT clear the screen yet; wait until the next input
    }


    addCalculateScreen(operatorValue)
}

//Function called when the equals button is pressed
function tapResult() {
    try {
        resultScreen.textContent = eval(calculateValue)
    } catch(e){
        resultScreen.textContent = 'Error'
    }
}

//Function called when the clear button is pressed
function tapClear() {
    //Clear the calculation value
    calculateValue = ' '

    //Reset the calculation and result screen
    calculateScreen.textContent = calculateValue
    resultScreen.textContent = ' '
}

//Function called when delete button is pressed
function tapDel() {
    //Remove the last character from the calculation string
    calculateValue = calculateValue.slice(0, -1)

    //Clear the result screen
    resultScreen.textContent = ' '

    //Update the calculation screen
    calculateScreen.textContent = calculateValue
}

//Function to add a value to the calculate screen
function addCalculateScreen(value) {
    //Append the value to the calculation string
    calculateValue += value
    //Update the calculation screen display
    calculateScreen.textContent = calculateValue
}