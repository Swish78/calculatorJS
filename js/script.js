const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

function handleClick(event) {
  const target = event.target;
  const value = target.value;

  display.value += value;
}

function handleEquals() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function handleClear() {
  display.value = '';
}

buttons.addEventListener('click', handleClick);
equals.addEventListener('click', handleEquals);
clear.addEventListener('click', handleClear);
