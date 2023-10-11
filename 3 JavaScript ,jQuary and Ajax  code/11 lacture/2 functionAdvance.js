// functions are also the data types in js similar to string,number and boolean

//1------------------------->

// function add(a = 2, b = 8) {
//     console.log(a + b);
// }
// var x = 10;
// var y = 20;

// add(x, y);

//we can also write Arrow function of Above function

// add = (a = 2, b = 8) => console.log(a + b);
// var x = 10;
// var y = 20;
// add(x, y);

//2-------------------------------->

var addition = function add(a, b) {
    return a + b;
}

//------------------addition vs addition()------------------------

// console.log(addition);//This will return function defination 
// console.log(addition(5, 2));//This is function calling
//3------------------------------------>

//anonymous function(we don't give the name of function is called Anonymous function)

var sub = function(a, b) {
    return a - b;
}
console.log(sub(4, 2));