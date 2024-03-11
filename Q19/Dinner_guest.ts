let guestlist: string[] = ["Ali","Emaan","Tayabba"];

let dontcome = guestlist[0];

// console.log(dontcome, "will not come");

guestlist.splice(0, 1, "Amir"); 

// guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));

//  console.log('we find big table so we are inviting 3 more guests');
// add 3 guests in array
 guestlist.unshift('Babar azam');
 guestlist.splice(2 , 0 , 'Naseem shah');
 guestlist.push('Fakhar zaman');

// print 6 guest
//  guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));

// not invited guest
//  console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');

// remove guest
 while(guestlist.length > 2){
    let remove_guest = guestlist.pop();
    // console.log(`Sorry ${remove_guest}, You are not invited for dinner.;`)
 }
//  remaing 2 guest
//  guestlist.forEach(guest => console.log(`Salam ${guest},You are still invited`));
// remove all guest from array
 guestlist.splice(0,2);
 console.log(guestlist);


// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inv

console.log(`Total number of guest are: ${guestlist.length}`);