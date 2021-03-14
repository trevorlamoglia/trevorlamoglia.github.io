const tempNumber = parseFloat(document.getElementById('temp').textContent);
// console.log(tempNumber)

const speedNumber = parseFloat(document.getElementById('speed').textContent);
// console.log(speedNumber)

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16))
+ (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
// console.log(windchill);
windchill = Math.round(windchill);
// console.log(windchill);