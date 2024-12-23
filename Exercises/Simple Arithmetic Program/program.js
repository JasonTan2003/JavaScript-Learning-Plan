let num1 = 20;
let num2 = 3;

let addAns = num1 + num2;
let subAns = num1 - num2;
let mulAns = num1 * num2;
let divAns = num1 / num2;
let modAns = num1 % num2;

console.log(`Addition: ${num1} + ${num2} = ${addAns}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subAns}`);
console.log(`Multiplication: ${num1} * ${num2} = ${mulAns}`);
console.log(`Division: ${num1} / ${num2} = ${divAns.toFixed(3)}`);
console.log(`Modulus: ${num1} % ${num2} = ${modAns}`);
console.log('');

let num3 = 7.789;
let num4 = 1.6;

let addAns2 = (num3 + num4).toFixed(3);
let subAns2 = (num3 - num4).toFixed(3);
let mulAns2 = (num3 * num4).toFixed(3);
let divAns2 = (num3 / num4).toFixed(3);
let modAns2 = (num3 % num4).toFixed(3);

console.log(`Addition: ${num3} + ${num4} = ${addAns2}`);
console.log(`Subtraction: ${num3} - ${num4} = ${subAns2}`);
console.log(`Multiplication: ${num3} * ${num4} = ${mulAns2}`);
console.log(`Division: ${num3} / ${num4} = ${divAns2}`);
console.log(`Modulus: ${num3} % ${num4} = ${modAns2}`);