// funcion que suma 2 valores
function sum (num1, num2){
  return num1 + num2;
}

// funcion callback
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
// llamada a la funcion suma usando la funcion callback calc
console.log(calc(2, 2, sum));



setTimeout(() => {
  console.log('Hola Javascript');
}, 2000);



function gretting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Raul');