const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}

/* for (let x = 0; x < hobbiesArray.length; x++) {
    printHobbyInfo(hobbiesArray[x]);
}

    OR    */

for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}

