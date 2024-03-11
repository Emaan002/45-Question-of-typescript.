// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestlist = ["Ali", "Emaan", "Tayabba"];
var dontcome = guestlist[0];
console.log(dontcome, "will not come");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
