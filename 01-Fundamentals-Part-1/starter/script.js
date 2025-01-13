// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// typeof shows us the datatype of either a variable/(k)ey?) or specific value
// console.log(typeof true);
// // first time declaring a variable you need to use let
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// // subsequent do not need to use let, just change the value if needed.
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let age = 30;
// // reassign the value of the variable or mutate the variable
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // var is old way of declaring and assigning a value to a variable. Let is block scoped and var is function scoped
// var job = 'programmer';
// job = 'teacher'
// const currentYear = 2037
// const ageNico = currentYear - 1984;
// const ageJenna = currentYear - 1986;
// console.log(ageNico, ageJenna);

// console.log(ageNico * 2, ageNico / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3
// // concatentation of strings
// const firstName = "Nico";
// const lastName = "Shanstrom";
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// x--; // x = x - 1
// console.log(x);

// // comparison operators
// console.log(ageNico > ageJenna);
// console.log(ageJenna >= 18);

// const isFullAge = ageJenna >= 18;
// console.log(currentYear - 1991 > currentYear - 1986);

// const currentYear = 2037
// const ageNico = currentYear - 1984;
// const ageJenna = currentYear - 1986;

// console.log(currentYear - 1991 > currentYear - 1986);

// // 
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avgAge = (ageJenna + ageNico) / 2;

// console.log(ageJenna, ageNico, avgAge);

// const firstName = 'Nico';
// const job = 'software developer';
// const birthYear = 1984;
// const year = 2037
// // older way to create a string annoying, in ES6 template literal makes it easier.
// const nico = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(nico);
// // template literal, use backticks for template string
// const nicoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(nicoNew);

// // multiline line string old way before ES6
// console.log('String with \n\
//   multiple \n\
//   lines');

// // new in ES6 use multiline with backticks instead of the \n\ linebreaks 
// console.log(`String
//   multiple
//   lines`);

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log('Sarah can start driving license 😎');
// }
// else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1984;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1
// n = n - 1;
// console.log(n);

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Nico'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// //so if money is truthy or if money is falsy based off of the above values or not
// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)")
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// // equality operators
// const age = 18;
// if (age === 18) console.log('You just became an adult :)');

// const favorite = Number(prompt("What's your favorite number?")); // 3

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 3) { // 3 === 3
//   console.log('Cool! 3 is a great number!')
// } else if (favorite === 7) {
//   console.log('7 is also a cool number')
// } else if (favorite === 7) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 3 or 7 or 9')
// }

// if (favorite !== 3) console.log('Why not 3?');

// // boolean logic
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...');
// }


// console.log(hasDriversLicense && hasGoodVision && isTired);

// // switch statements
// const day = 'fridays';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

// // conditional ternary one line if/else
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// // normal if/else
// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${drink}`);
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);