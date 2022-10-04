// // //function expression
// // const speak = function() {
// //   console.log('good day');
// // };

// // // greet();
// // // greet();
// // // greet();
// // speak();
// // speak();
// // speak();

// // //function declaration
// // function greet() {
// //   console.log('hello there');
// // }


// // arguments and parameters

// // const speak = function(name = "luigi", time = "night") {
// //   console.log(`good ${time} ${name}!`);
// // };

// // speak();
// // speak('test', 'test');

// //returning values

// // const calcArea = function(radius) {
// //   return 3.14 * radius ** 2;
// // }

// //arrow function
// // const calcArea = (radius) => 3.14 * 
// // radius ** 2;


// // const area = calcArea(5);
// // console.log('area is:', area);



// // const greet = function() {
// //   return 'hello, world';
// // };

// // turn to arrow

// const greet = () => 'hello, world';

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10, 15, 30], 0.2));

// const fName = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods

// let resultTwo = fName.toUpperCase();
// console.log(resultTwo);

// callback and foreach

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);


//get a reference to the 'ul'

const ul = document.querySelector('.people');


const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(function(person) {
  html += `<li style="color: blue">${person}</li>`
});

console.log(html)
ul.innerHTML = html;