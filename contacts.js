let myArray = [];

while (true) {
    let obj = { name: "", rating: "" };
    movieName = prompt("Enter a movie name:");
    movieRating = prompt("Enter the movie rating:");
    if (movieName == false && movieRating == false) { break; }
    obj.name = movieName;
    obj.rating = movieRating;
    myArray.push(obj);

}
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].rating > 7) {
        console.log(`${myArray[i].name} : ${myArray[i].rating} `)
    }
}



// let gate = prompt("Choose gate: a, b, or c");

// let win = false;

// switch (gate) {
//     case "a":
//         {
//             let message = "Gate A";
//             console.log(message);
//         }

//     case "b":
//         {
//             let message = "Gate B";
//             console.log(message);
//             //break;
//         }
//     case "c":
//         {
//             let message = "Gate C";
//             console.log(message);
//         }
//     default:
//         alert("No gate " + String(gate));

// }

// if (win) { alert("Winner!"); }
// let names = [];

// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel.");
//     if (name != null) {
//         names.push(name);
//     } else { isOver = true }

// }


// for (let i = 0; i < names.length; i++) { console.log(names[i] + "\n") }