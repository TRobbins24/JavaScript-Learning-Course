// // // // //const para = document.querySelector('body > h1');

// // // // // console.log(para);

// // // // const paras = document.querySelector('p');
// // // // const errors = document.querySelectorAll('.error');


// // // // console.log(paras[2]);

// // // //get an element by ID

// // // const title = document.getElementById('page-title');
// // // console.log(title);

// // // //get elements by their class name

// // // const errors = document.getElementsByClassName('error');
// // // console.log(errors);
// // // console.log(errors[0]);
// // // errors.forEach(errors => {
// // // console.log(errors);
// // // });

// // // //get elements by their tag name
// // const paras = document.getElementsByTagName('p');
// // console.log(paras);
// // console.log(paras[1]);


// const para = document.querySelector('p');

// // console.log(paras.innerText);
// // para.innerText = 'ninjas are awesome!';

// const paras = document.querySelector('p');

// // paras.forEach(para => {
// //   console.log(para.innerText);
// //   para.innerText += 'new text';
// // });

// const content = document.querySelector('.content');

// // content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'lugii', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'The Youtube Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');

//ENDED AT 36:09