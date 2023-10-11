let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//1------------------------------->

//find:->This will return value if  value is present in array otherwise return undefined

// let num = arr.find((val) => {
//     // return val > 4;
//     // return val === 8;
//     // return val === 10;
// });

// console.log(num);

//2------------------------------>

//some:->this will return true or false if some any element is present

// let num = arr.some((val) => {
//     // return val % 2 == 0;
//     // return val > 8;
//     return val > 9;
// });

// console.log(num);

//3------------------------------>
//every:->This will return true or false value if All element of array is present

// let arr1 = [2, 4, 6, 8, 10];
// let num = arr1.every((val) => {
//     // return val % 2 === 0;
//     return val > 4;
// });

// console.log(num);


//4----------------------------->
//sort:->this function sort the array and return new array

let arr2 = [9, 1, 5, 2, 3, 8, 10];
let num = arr2.sort((a, b) => {
    // return a - b;
    return b - a;
});

console.log(num);