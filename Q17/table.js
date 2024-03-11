// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestlist = ["Ali", "Emaan", "Tayabba"];
var dontcome = guestlist[0];
console.log(dontcome, "will not come");
guestlist.splice(0, 1, "Amir");
// guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));
console.log('we find big table so we are inviting 3 more guests');
guestlist.unshift('Babar azam');
guestlist.splice(2, 0, 'Naseem shah');
guestlist.push('Fakhar zaman');
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');
while (guestlist.length > 2) {
    var remove_guest = guestlist.pop();
    console.log("Sorry ".concat(remove_guest, ", You are not invited for dinner.;"));
}
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ",You are still invited")); });
guestlist.splice(0, 2);
console.log(guestlist);
