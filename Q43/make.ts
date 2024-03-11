// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great(magicians: string[]): string[] {
   return magicians.map(name => `Great ${name}`);
}  
function show_magicians(magicians: string[]): void {
    console.log(magicians.join(','));
}
let originalMagicians: string[] = ["David","Throne","bufi"];
let greatMagicians: string[] = make_great([...originalMagicians]);

console.log("Original Magicians");
show_magicians(originalMagicians);

console.log("Great Magicians");
show_magicians(greatMagicians);