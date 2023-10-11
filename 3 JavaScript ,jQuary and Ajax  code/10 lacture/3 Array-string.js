//1------------------------->

//declaration of Array


// var arr = [2, 4, 6, 7];
// console.log(arr);


//2--------------------------------------->

//In JS, Array is colection of hetrogeneous data type of elements

// var arr = [2, 'c', "Hello", 4, 6, 7];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


//3---------------------------------------->

//for loop(like cpp)

// var arr = [2, 'c', "Hello", 4, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



//4--------------------------------------->

//for of loop  (this will give the value of Array at each iteration)


// var arr = [2, 'c', "Hello", 4, 6, 7];
// for (let val of arr) {
//     console.log(val);
// }


//5--------------------------------------->
//for in loop  (this will give the index of each element of Array at each iteration)


// var arr = [2, 'c', "Hello", 4, 6, 7];
// for (let inxd in arr) {
//     console.log(inxd, "->", arr[inxd]);
// }


//6---------------------------------------->

//push and pop element of Array as a last



// var arr = [2, 'c', "Hello", 4, 6, 7];
// arr.push("last Item");
// arr.pop();
// arr.pop();
// for (let inxd in arr) {
//     console.log(inxd, "->", arr[inxd]);
// }


//7---------------------------------------------->


//shift and unshift element of Array as a first

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.shift();
// arr.unshift(0);
// for (let x of arr) {
//     console.log(x);
// }



//8------------------------------------------------------------------->


//->splice(starting indx, deletion count, elements to be inserted);

// In JavaScript, the splice() method is used to change the contents of an array by removing, replacing, or adding elements to it. 
//The splice() method modifies the original array and returns an array containing the removed elements (if any).

var arr = [1, 2, 3, 4, 5, 6];
const arr1 = arr.splice(1);
// arr.splice(1, 2);
// arr.splice(2, 2, 10, 12);
// arr.splice(2, 0, 500);
// arr.splice(2, 1);
// console.log(arr);
console.log(arr1);



//9----------------------------------------------------------->

//---------------------------string-----------------------------


var str = "We are Learning JS";

// console.log(str);

// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//     newStr += str[i] + '-';
// }
// console.log(newStr);

// let indx = str.indexOf('area'); //indexOf function will return index of seraching string if it is present in string in which we have to search otherwise return -1

// let indx = str.indexOf('are');
// console.log(indx);

let file = 'myfile.jpg';
// console.log(file.split('.'));


//---------------------string.split(separator, limit)-------------------------------

//1->The split() method splits a string into an array of substrings.
//2->The split() method returns the new array.


// console.log(str.split(' '));
// var updatedStr = str.split(' ').pop();
// console.log(updatedStr);

let format = file.split('.').pop();
console.log(format);
console.log(file);
// // // //jpg, jpeg, png

if (['jpg', 'jpeg', 'png'].indexOf(format) != -1) {
    console.log("Done!")
} else {
    console.log("!Sorry")
}