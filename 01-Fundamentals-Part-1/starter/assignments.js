// // let country = "United States of America";
// // below make country a constant that cannot be changed
// const country = "United States of America";
// // country = "USA"
// let continent = "North America";

// let population = 20000000;

// let isIsland = false;

// let language = "English"

// console.log(country);
// console.log(continent);
// console.log(typeof continent);
// console.log(population);
// console.log(typeof population);
// console.log(isIsland);
// console.log(typeof isIsland);
// console.log(language);
// console.log(typeof language);

// console.log(population / 2);
// // increase the population by 1
// population++;

// console.log(population);
// console.log(population > 6000000)
// console.log(population < 33000000)

// const description1 =
//   country +
//   ' is in ' +
//   continent +
//   ', and its ' +
//   population +
//   ' million people speak ' +
//   language +
//   '.';

// console.log(description1);
// // use the ` to wrap for string interpolation/literal syntax and ${} for dynamic values.
// const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

// console.log(description);
// // conditional logical operators below
// if (population > 33000000) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(`${country}'s population is ${33000000 - population} below average.`);
// }

// // same as above but cleaner conditional (Ternary) operator

// console.log(
//   `${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`
// );

// // javascript sees the - and coerces the strings into numbers and then sees the + and concatenates the next string to the result. So + is for combining strings and - makes javascript change the string into a number
// // console.log('9' - '5'); // -> 4
// // console.log('19' - '13' + '17'); // -> 617
// // console.log('19' - '13' + 17); // -> 23
// // console.log('123' < 57); // -> false // lexicographical comparison coerces strings into numbers if each side of the comparison are strings(then compares their unicode values). If one side is a number then javascript coerces the string into a number and then compares each side.
// // console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// // const numNeighbours = prompt('How many neighbour countries does your country have?');

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours === 1) {
// //   console.log('Only 1 border!');
// // }
// // else if (numNeighbours > 1) {
// //   console.log('More than one border!');
// // }
// // else {
// //   console.log('No borders');
// // }

// // const newCountry = prompt('What country are you thinking of moving to?');

// // if (language === 'English' && population < 50000000 && !isIsland) {
// //   console.log(`You should live in ${newCountry}!`);
// // }
// // else {
// //   console.log(`${newCountry} does not match your criteria :(`)
// // }

// // .toLowerCase() is used to make the language variable from the previous code case-insensitive

// // switch (language.toLowerCase()) {
// //   case 'chinese':
// //   case 'mandarin':
// //     console.log('MOST number of native speakers!');
// //     break;
// //   case 'spanish':
// //     console.log('2nd place in number of native speakers');
// //     break;
// //   case 'english':
// //     console.log('3rd place');
// //     break;
// //   case 'hindi':
// //     console.log('Number 4');
// //     break;
// //   case 'arabic':
// //     console.log('5th most spoken language');
// //     break;
// //   default:
// //     console.log('Great language too :D');
// // }