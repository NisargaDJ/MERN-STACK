// CONDITIONS

let age = 20;
let marks = 75;
let day = 2;


// 1. if
if (age >= 18) {
    console.log("Eligible");
}


// 2. if else
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 3. else if
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}


// 4. switch
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}


// 5. ternary operator
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);