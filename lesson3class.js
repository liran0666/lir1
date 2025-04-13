'use strict';

// let day = prompt('enter day of the week');
// let answer;
// switch (day) {
//   case '1':
//   case 'sunday':
//   case 'ראשון':
//     alert('חזרה לשגרה');
//     break;
//   case '2':
//   case 'monday':
//   case 'שני':
//     alert('ישיבת צוות');
//     break;
//   case '3':
//   case 'tuesday':
//   case 'שלישי':
//     alert('עבודה על פרוייקט')
//     break;
//   case '4':
//   case 'wednsday':
//   case 'רביעי':
//     alert('ספורט בעקב');
//     break;
//   case '5':
//   case 'thursday':
//   case 'חמישי':
//     alert('סיום משימות');
//     break;
//   case '6':
//   case 'friday':
//   case 'שישי':
//     alert('קניות לשבת');
//     break;
//   case '7':
//   case 'saturday':
//   case 'שבת':
//     alert('מנוחה');
//     break;
//     default:alert('no such day')
// }


// let i=1;
// let sum=0;
// while(i!==101){
// sum+=i++;

// }
// console.log(sum)


// let num1;
// do{
//   num1=prompt('enter num')
//   }
// while(num1<=0||isNaN(num1));

// console.log(num1);
// let seven=7;
// for(let i=1;i<=10;i++){
// console.log("7 * "+i+" = "+(seven*i))
// }


let secret = 7;
for (let i = 1; i <= 10; i++) {
  let answer = prompt("guess the number")
  if (parseInt(answer) === secret) {
    alert("correct!")
    break;
  }
}


for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0)
    continue;
  console.log(i)
}

//#6 : answer is 1

//#7 answer is no because of the incremation position one will do 6 loop while the other only one
//#8 yes they will have same outcome because its a single line of code
//#9

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0)
    alert(i);
}

//#10
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}