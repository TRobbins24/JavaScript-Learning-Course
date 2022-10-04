// for loops

// 
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//   //console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < 5) {
//   console.log('in loop: ', i);
//   i++;
// }

// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// do while
// let i = 5;
// do {
//   console.log('val of i is: ', i);
//   i++;
// } while(i < 5);

// if statement
// const age = 20;
// if (age < 25) {
//   console.log("you are old");
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3) {
//   console.log("That is a lot of ninjas");
// }

// const password = 'password';

// if (password.length >= 12 && password.includes('@')) {
//   console.log('that password is super strong');
// } else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//   console.log('That is strong enough.')
// } else {
//   console.log('That is not strong enough.')
// }

// //logical operators - OR || and AND && 

//logical not (!)

// let user = false;

// if(!user){
//   console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0; i < scores.lengthl i++){

//   if(scores[i] === 0){
//     continue;
//   }



//   console.log('your score: ', scores[i])

//   if(scores[i] === 100){
//     console.log("you got the top score!");
//     break;
//   }
// }

// const grade = 'gf';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

//variable & block scope

// let age = 30;

// if (true) {
//   const age = 40;
//   const name = 'shaun'
//   console.log('inside 1st code block: ', age, name);

//   if (true) {
//     const age = 50;
//     console.log('inside 2nd code block: ', age);
//   }

// }

// console.log('outside code block: ', age);

