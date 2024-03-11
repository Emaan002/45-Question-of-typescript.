// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

//  • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car :string = "subaru";
// test #1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// test #2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

//  test #3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

//  test #4
console.log("Is car !== 'Honda'? I predict True.");
console.log(car !== 'Honda');

//  test #5
console.log("Is car.Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

//  test #6
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');

//  test #7
console.log("Is car === 'SUBARU'? I predict false.");
console.log(car === 'SUBARU');

//  test #8
console.log("Is car === 'Train'? I predict false.");
console.log(car === 'Train');

//  test #9
console.log("Is car === 'Bike'? I predict false.");
console.log(car === 'Bike');

//  test #10
console.log("Is car === 'Ship'? I predict false.");
console.log(car === 'Ship');
