//1-------------------------------------------->

//destructuring:-Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a concise and structured way.

// let person = {
//     fullName: "Salman Khan",
//     age: 56,
//     height: 5.7
// };
// let { age, height, fullName } = person;
// console.log(fullName);
// console.log(age);
// console.log(height);
// console.log('Full Name:', fullName);
// console.log(`Full Name: ${fullName}, Age: ${age}, Height:${height}`);



// const numbers = [1, 2, 3, 4, 5];
// // Destructuring assignment
// const [first, second, ...rest] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]


//2----------------------------------------------->

//Array concatination

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [7, 9, 10];
let arr4 = [11, 12, 23];

// let arr3 = arr1 + arr2;
// console.log(arr3);

// let arr3 = arr1.concat(arr2);

// let arr3 = arr2.concat(arr1);
// console.log(arr3);
// let arr3 = arr1.concat(arr2, arr4);
// console.log(arr3);

//3-------------------------------------------->

//spread operator

// let newArr = [...arr1, ...arr2, ...arr4];
// console.log(newArr);



// function addFourNumbers(num1, num2, num3, num4) {
//     return num1 + num2 + num3 + num4;
// }
// let fourNumbers = [5, 6, 7, 8];
// addFourNumbers(...fourNumbers); // Spreads [5,6,7,8] as 5,6,7,8



// let array1 = [3, 4, 5, 6];
// let clonedArray1 = [...array1]; // Spreads the array into 3,4,5,6
// console.log(clonedArray1); // Outputs [3,4,5,6]


// let obj1 = { x: 'Hello', y: 'Bye' };
// let clonedObj1 = {...obj1 }; // Spreads and clones obj1
// console.log(obj1);

// let obj2 = { z: 'Yes', a: 'No' };
// let mergedObj = {...obj1, ...obj2 }; // Spreads both the objects and merges it
// console.log(mergedObj); // Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};


//4---------------------------------------------->

//rest parameter

// function sum(...nums) {
//     console.log(nums);
// }

// sum(1, 2, 3, 4, 5);

// function sum(x, y) {
//     let z = x + y;
//     console.log(z);
// }

// sum(1, 2);
// sum(1, 2, 3, 4);


// function sum(x, y, ...nums) {
//     let a = nums.reduce((total, num) => {
//         return num + total;
//     }, 0);
//     let b = x + y;
//     console.log(a + b);
// }

// sum(1, 2, 3, 4, 5);

//5-------------------------------------------------->

//rest parameter
// function extractingArgs(...args) {
//     return args[1];
// }

// extractingArgs(8, 9, 1); // Returns 9

// function addAllArgs(...args) {
//     let sumOfArgs = 0;
//     let i = 0;
//     while (i < args.length) {
//         sumOfArgs += args[i];
//         i++;
//     }
//     return sumOfArgs;
// }

// addAllArgs(6, 5, 7, 99); // Returns 117
// addAllArgs(1, 3, 4); // Returns 8




// // Incorrect way to use rest parameter
// // function randomFunc(a, ...args, c) {
// //Do something
// // }

// // Correct way to use rest parameter
// function randomFunc2(a, b, ...args) {
//     //Do something
// }