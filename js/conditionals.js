let numOne = 1;
let stringOne = '1';
console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

let working = false;

const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday
if (day == 0) {
    console.log('Today is Sunday');
    working = false;
}
else if (day == 1) {
    console.log('Back to work');
    working = false;
}
else if (day == 3) {
    console.log('Over the hump');
    working = false;
}
else {
    console.log('It is a weekday');
    working = false;
}
