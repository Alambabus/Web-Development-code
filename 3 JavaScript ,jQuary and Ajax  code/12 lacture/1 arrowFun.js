//Arrow Function:-> Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax


//1--------------------------->

// var add = (a, b) => a + b;
// console.log(add(2, 6));


//2--------------------------->

// var add = a => console.log(a);
// add(2);


//3----------------------------->

// var add = (a, b) => {
//     return a + b;
// }
// console.log(add(10, 20));


//4---------------------------->

//Function Expresion

var add = function add(a, b) {
    return a + b;
}

console.log(add(2, 8));

//5-------------------------------->
// Anomynous Function

var add = function(a, b) {
    console.log(a + b);
}

add(10, 20);