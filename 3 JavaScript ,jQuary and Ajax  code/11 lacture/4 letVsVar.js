//1-------------------->

// function fun() {
//     console.log(x);
//     var x = 10;
//     var y = 20;
//     console.log(y);
// }

//Arrow function of Above function

// fun = () => {
//     console.log(x);
//     var x = 10;
//     var y = 20;
//     console.log(y);
// }

// fun();

//2---------------------->

// function fun() {
//     console.log(x);
//     if (true) {
//         var x = 10;
//     } else {
//         var y = 20;
//     }
//     console.log(y);
// }

//Arrow function of Above Function

// fun = () => {
//     console.log(x);
//     if (true) {
//         var x = 10;
//     } else {
//         var y = 20;
//     }
//     console.log(y);
// }

// fun();

//3-------------------------->

// function fun(v) {
//     console.log(x);
//     if (v > 10) {
//         let x = 10;
//     } else {
//         let y = 20;
//     }
//     console.log(y);
// }

//Arrow function of Above function

// fun = (v) => {
//     console.log(x);
//     if (v > 10) {
//         let x = 10;
//     } else {
//         let y = 20;
//     }
//     console.log(y);
// }


// fun(15);


// 4------------------------->

// function fun(v) {
//     console.log(x);
//     let x = 10;
//     let y = 20;
//     console.log(y);
// }

// //Arrow function of above function

// fun = (v) => {
//     console.log(x);
//     let x = 10;
//     let y = 20;
//     console.log(y);
// }

// fun(15);

//5-------------------------->

// function fun(v) {
//     let x = 10;
//     let y = 20;
//     console.log(y);
// }


//Arrow function of Above function

// fun = (v) => {
//     let x = 10;
//     let y = 20;
//     console.log(y);
// }

// fun(15);


//6-------------------------->

// function fun(v) {
//     let x = 20;
//     console.log(x);
//     if (v > 10) {
//         let x = 10;
//         console.log(x);
//     } else {
//         let y = 20;
//     }
//     console.log(x);
//     console.log(y);
// }


//Arrow function of Above function

// fun = (v) => {
//     let x = 20;
//     console.log(x);
//     if (v > 10) {
//         let x = 10;
//         console.log(x);
//     } else {
//         let y = 20;
//     }
//     console.log(x);
//     console.log(y);
// }

// fun(15);


//7---------------------------->

function fun(v) {
    var x = 20;
    console.log(x);
    if (v > 10) {
        var x = 10;
        console.log(x);
    } else {
        var y = 20;
    }
    console.log(x);
    console.log(y);
}

fun(15);