// console.log("Working Fine");
//1----------------------------->

// var x = 10;

// function fun() {
//     var y = 20;
//     console.log('Inside function fun');
//     console.log(y);
// }

// console.log(x);
// fun();

//2------------------------------------>


// console.log(a);

// function b() {
//     c();
//     var d = 999;

//     function c() {
//         console.log(d);
//     }
// }
// b();
// var a = 100;


//3-------------------------------------->

// console.log(a);

// function b() {
//     c();

//     function c() {
//         console.log(d);
//     }
// }
// b();
// var a = 100;

//4------------------------------->

console.log(a);
b();

function b() {
    console.log('Inside b');
}

let a = 100;