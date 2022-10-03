// // // // // // // // let radius = 10;
// // // // // // // // const pi = 3.14;

// // // // // // // // // console.log(radius, pi);

// // // // // // // // //Math ops + - * / ** %

// // // // // // // // // console.log(10 / 2);

// // // // // // // // // let result = radius % 3;

// // // // // // // // // let result = pi * radius ** 2;

// // // // // // // // //order of operation - B I D M A S

// // // // // // // // // let result = 5 * (10-3)**2;

// // // // // // // // // console.log(result);

// // // // // // // // let likes = 10;

// // // // // // // // // likes++;
// // // // // // // // // likes--;

// // // // // // // // // likes += 10;
// // // // // // // // // likes -=5;
// // // // // // // // // likes *= 2;
// // // // // // // // // likes /= 2;
// // // // // // // // // console.log(likes);

// // // // // // // // // NaN - not a number

// // // // // // // // //console.log(5 / 'hello');
// // // // // // // // // console.log(5 * 'hello');

// // // // // // // // let result = 'the blog has ' + likes + ' likes';
// // // // // // // // console.log(result);




// // // // // // // const title = 'Best reads of 2019';
// // // // // // // const author = 'Mario';
// // // // // // // const likes = 30;


// // // // // // // // concatenation way

// // // // // // // // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// // // // // // // // console.log(result);


// // // // // // // // template string way

// // // // // // // let result = `The blog called ${title} by ${author} has ${likes} likes`;
// // // // // // // console.log(result);

// // // // // // // // creating html templates

// // // // // // // let html = `
// // // // // // // <h2>${title}</h2>
// // // // // // // <p>${author}</p>
// // // // // // // <span>This blog has ${likes} likes</span>`;

// // // // // // // console.log(html);


// // // // // let ninjas = ['guy', 'guy2', 'guy3'];

// // // // // // // // ninjas[1] = 'guy50';

// // // // // // // console.log(ninjas[1]);

// // // // // // let ages = [20, 25, 30, 35];
// // // // // // console.log(ages[2]); 

// // // // // // let random = ['shaun', 'crystal', 30, 20];
// // // // // // console.log(random); 

// // // // // // console.log(ninjas.length);

// // // // // //array methods

// // // // // // let results = ninjas.join('-');

// // // // // // let result = ninjas.indexOf('guy3');

// // // // // // let result = ninjas.concat(['ken', 'crystal']);

// // // // // let result = ninjas.push('ken');
// // // // // result = ninjas.pop();

// // // // // console.log(result);


// // // // let age = null;

// // // // console.log(age, age + 3, `age is ${age}`);

// // // //booleans & comparisons
// // // // console.log(true, false, "true", "false");



// // // // methods can return booleans

// // // // let email = "luigi@thenetninja.co.uk";
// // // // let names = ['mario', 'luigi', 'toad'];

// // // // let result = names.includes('bowser');
// // // // console.log(result);


// // // // comparison operators

// // let age = 25;

// // // // console.log(age == 25);
// // // // console.log(age == 30);
// // // // console.log(age != 30);
// // // // console.log(age != 25);
// // // // console.log(age > 20);
// // // // console.log(age < 20);
// // // // console.log(age <= 25);
// // // // console.log(age >= 25);

// // // let name = 'shaun';

// // // console.log(name == 'shaun');
// // // console.log(name == 'Shaun');
// // // console.log(name > 'crystal');
// // // console.log(name > 'Shaun');
// // // console.log(name > 'Crystal');

// // // loose comparison (different types can st ill be equal)

// // // console.log(age == 25);
// // // console.log(age == '25');
// // console.log(age != 25);
// // console.log(age != '25');

// // //strict comparison (different types cannot be equal)

// // console.log(age === 25);
// // console.log(age === '25');
// // console.log(age !== 25);
// // console.log(age !== '25');

// let score = '100';

// // score = Number(score);
// // console.log(score + 1);
// // console.log(typeof score);

// // let result = Number('hello');
// // let result String(50);
// // let result = Boolean(0
// let result = Boolean('');

// console.log(result, typeof result);

