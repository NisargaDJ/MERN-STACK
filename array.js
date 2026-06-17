// ARRAY ADD METHODS

// let arr = [10, 20, 30];

// console.log("Original Array:", arr);

// // 1. push() → add at END
// arr.push(40);
// console.log("\npush(40):");
// console.log(arr);


// // 2. unshift() → add at START
// arr.unshift(5);
// console.log("\nunshift(5):");
// console.log(arr);


// // 3. splice(index, deleteCount, items)
// // Add without deleting
// arr.splice(2, 0, 15);

// console.log("\nsplice(2, 0, 15):");
// console.log(arr);


// // 4. fill(value, start, end)
// // Replace values in range
// arr.fill(9, 1, 3);

// console.log("\nfill(9, 1, 3):");
// console.log(arr);


// // 5. Indexing → arr[index] = value
// arr[2] = 100;

// console.log("\narr[2] = 100:");
// console.log(arr);




//ARRAY CREATE METHOD

// let arr = [10, 20, 30, 40];

// console.log("Original:", arr);

// // concat()
// let newArr = arr.concat([50, 60]);
// console.log("concat:", newArr);

// // pop()
// arr.pop();
// console.log("pop:", arr);

// // shift()
// arr.shift();
// console.log("shift:", arr);

// // splice()
// arr.splice(1, 1);
// console.log("splice:", arr);




//ARRAY DELETE METHOD

let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

// pop() → remove last
arr.pop();
console.log("pop():", arr);

// shift() → remove first
arr.shift();
console.log("shift():", arr);

// splice() → remove from index
arr.splice(1, 1);
console.log("splice():", arr);

// delete → remove value but keeps empty slot
delete arr[0];
console.log("delete:", arr);