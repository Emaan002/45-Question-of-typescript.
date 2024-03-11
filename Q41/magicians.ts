// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void{
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const magicians: string[] = ["Sikandar", "Fazal", "Imran", "Aadi"];
show_magicians(magicians);