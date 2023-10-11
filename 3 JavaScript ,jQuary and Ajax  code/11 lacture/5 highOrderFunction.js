//High Order Function:->Higher order functions are function that take one or more functions as arguments, or return a function as their result.


//1------------------------------------->

// movies function is returning makkhi function and favMovies variable are refering mukhhi function


// function movies() {
//     function jungleBoo() {
//         console.log("jungleBook");
//     }

//     function makkhi() {
//         console.log("makkhi");
//     }

//     function mirjapur() {
//         console.log("mirjapur");
//     }

//     return makkhi;
// }
// let favMovie = movies();
// console.log(favMovie);
// console.log(favMovie());


//2------------------------------------->

function movies(fun) {
    let num = 10;
    fun(2, 5);

    function jungleBoo() {
        console.log("jungleBook");
    }

    function makkhi() {
        console.log("makkhi");
    }

    function mirjapur() {
        console.log("mirjapur");
    }

    return makkhi;
}

let add = function(a, b) {
    console.log(a + b);
}
movies(add);