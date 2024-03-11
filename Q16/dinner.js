// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.  
var guestlist = ["Ali", "Emaan", "Tayabba"];
var dontcome = guestlist[0];
console.log(dontcome, "will not come");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
console.log('we find big table so we are inviting 3 more guests');
guestlist.unshift('Babar azam');
guestlist.splice(2, 0, 'Naseem shah');
guestlist.push('Fakhar zaman');
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
