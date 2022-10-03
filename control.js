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

const password = 'pass';

if(password.length >= 12){
  console.log('that password is super strong');
} else if (password.length >= 8) {
  console.log('That is long enough.')
} else {
  console.log('That is not long enough.')
}

//logical operators - OR || and AND 4&&