// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
var veg = "cucumber";
console.log("Is vegetable == 'cucunber'? I predict True.");
console.log(veg == "cucumber");
console.log("Is vegetable != 'chilli'? I predict True.");
console.log(veg != "chilli");
// Tests using the lower case function
var city = "new york";
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
console.log("Is city.toLowerCase() == 'new jersy'? I predict false.");
console.log(city.toLowerCase() == 'new jersy');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 15;
console.log("Is number == 15? I predict True.");
console.log(number == 15);
console.log("Is number != 5? I predict True.");
console.log(number != 5);
console.log("Is number > 5? I predict True.");
console.log(number > 5);
console.log("Is number < 20? I predict True.");
console.log(number < 20);
console.log("Is number >= 15? I predict True.");
console.log(number >= 20);
console.log("Is number <= 15? I predict True.");
console.log(number <= 20);
// Tests using "and" operators
console.log("And operator test:", 5 === 5 && 10 > 5);
// Tests using "or" operators
console.log("or operator test:", 5 === 5 || false);
// • Test whether an item is in a array
var fruits = ['Banana', 'Orange', 'Apricot'];
console.log('Test "Orange" in the array:', fruits.includes("Orange"));
// • Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', fruits.includes('Apple'));
