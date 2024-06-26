// EJ1  Crea una función que reciba tres números y devuelva la media entre esos 3 números.

/*function getAverage(numberA, numberB, numberC) {
  const average = (numberA + numberB + numberC) / 3;
  return average;
}*/

const getAverage = (numberA, numberB, numberC) => {
  return (numberA + numberB + numberC) / 3;
};
const resultAverage = getAverage(7, 6, 5);
console.log('resultAverage', resultAverage);

// EJ2 Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio.

const getDiscount = (discount, price) => {
  return price - (price * discount) / 100;
};

const resultPrice = getDiscount(100, 10);
console.log('result price', resultPrice);

// EJ3 Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión

const getString = (wordA, wordB) => {
  return wordA + '-' + wordB;
};

const resultString = getString('rojo', 'verde');
console.log('result String', resultString);

// EJ4 Crea una función que reciba un número de kilómetros y los devuelva conviertidos a metros.

const getMeters = km => {
  return km * 1000;
};

const resultMeters = getMeters(3);
console.log('result meters', resultMeters);

// EJ5 Crea una función que reciba un número de horas y las devuelva convertidas a segundos.

const getSeconds = hour => {
  return hour * 3600;
};

const resultSeconds = getSeconds(1);
console.log('result Seconds', resultSeconds);
