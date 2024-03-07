function displayNumber(value){
  if (value === 'x') 
    value = '*';
   document.querySelector(".input-display-calcu").value += value;
}
function clearNumber(){
  document.querySelector(".input-display-calcu").value = ''
}
function numberSlice(){
  let inputDisplay = document.querySelector(".input-display-calcu");
  let currentValue = inputDisplay.value;
  let slicedValue = currentValue.slice(0, -1);
  inputDisplay.value = slicedValue;
}
function calculate() {
  try {
      var result = eval(document.querySelector(".input-display-calcu").value);
      document.querySelector(".input-display-calcu").value = result;
  } catch (error) {
      document.querySelector(".input-display-calcu").value = 'Syntax Error';
  }
}
function calculatePercentage() {
  var result = document.getElementById('.input-display-calcu');
  let value = parseFloat(result.value);
  display.value = value / 100; 
}