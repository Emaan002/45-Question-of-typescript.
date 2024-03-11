// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["Apple", "Watermelon", "blueberry"];
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apple");
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon");
}
if (favorite_fruits.includes("blueberry")) {
    console.log("You really like blueberry");
}
if (favorite_fruits.includes("pair")) {
    console.log("You really like pair");
}
else {
    console.log("pair is not your favorite");
}
if (favorite_fruits.includes("Oranges")) {
    console.log("You really like Oranges");
}
else {
    console.log("you dont like oranges");
}
