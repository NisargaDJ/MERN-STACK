let arr = [10, 20, 30];

console.log("for loop");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\nwhile loop");
let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("\ndo while loop");
let j = 0;

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

console.log("\nfor of loop");
for (let value of arr) {
    console.log(value);
}

console.log("\nfor in loop");
for (let index in arr) {
    console.log(index, arr[index]);
}