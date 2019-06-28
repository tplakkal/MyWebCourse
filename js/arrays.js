let hobbiesArray = ['coding',
'testing',
'listening to music'];

function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }  
}

printHobbies(hobbiesArray);

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

arr1.find(function(currentValue){return currentValue})
