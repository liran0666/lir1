'use strict';
//#1 yes there will be an alert
//#2 
let ques = prompt("whats the officail name of js");
if (ques === "ecma script")
  alert("coreect!")
else
  alert("no silly its - ecma script!")

//#3
let score = prompt("whats your score?")
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
alert(grade);

//#4
let zero = prompt("enter a num")
if (zero > 0)
  alert("bigger than zero")
else
  if (zero < 0)
    alert("lower than zero")
  else
    alert("equals zero");
// let result;

// if (a + b < 4) {
//   result = 'Not enough';
// } else {
//   result = 'A lot';
// }
// alert(result);

//#5
let a = prompt("enter number for a")
let b = prompt('enter number for b');
let result = parseInt(a) + parseInt(b) < 4 ? 'not enough' : 'a lot';

alert(result);
//#6
let login = prompt("enter your occupation")

let message = login == 'Employee' ? 'Hello' : login == 'director' ? 'hello' : login == '' ? 'no login' : "";

alert(message)

//#7
//1 true
//2 false
//3 true
//4 false
//5 null
//6 null
//7 undifined
//8 true
//9 1
//10 1