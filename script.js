

const displayElement = document.getElementById('result'); 
let displayValue = '0'; 
let operator = null;
let operand = null; 

function addToDisplay(number) {
  if (displayValue.length < 11) {
    if (displayValue === '0') {
      displayValue = number;
    } else {
      displayValue += number;
    }
    updateDisplay();
  }
}
function deleteLast() {
    if (displayValue.length > 1) {
      displayValue = displayValue.slice(0, -1);
    } else {
      displayValue = '0';
    }
    updateDisplay();
  }

function updateDisplay() {
    let longText = displayValue.toString().replace('.',',');
    displayElement.textContent = longText.substring(0, Math.min(longText.length, 11));
  }
  
  function resetDisplay() {
    displayValue = '0';
    operator = null;
    operand = null;
    updateDisplay();
  }

  function addDecimal() {
    if (!displayValue.includes('.')) {
      displayValue += '.';
    }
    updateDisplay();
  }

  function setOperator(selectedOperator) {
    if (operator !== null && operand !== null) {
      calculate()
    }
    operator = selectedOperator;
    operand = parseFloat(displayValue.toString().replace(',','.'));
    displayValue = '0';
  }

  function calculate() {
    if (operator === null || operand === null) return;

    const currentOperand = parseFloat(displayValue.toString().replace(',','.'));
    let result;
  
    switch (operator) {
      case '+':
        result = operand + currentOperand;
        break;
      case '-':
        result = operand - currentOperand;
        break;
      case '*':
        result = operand * currentOperand;
        break;
      case '/':
        result = operand / currentOperand;
        break;
      default:
        result = currentOperand;
    }
  
    
    displayValue = result.toString().replace('.',',');
    operator = null;
    operand = null;
    updateDisplay();
  }