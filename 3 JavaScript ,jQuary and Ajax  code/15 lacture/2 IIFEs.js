//IIFE is a JS function that runs as soon as it is defined.


//()
//(()=>{})
//(()=>{})(); 



(function() {
    var message = "Hello from inside the IIFE!";
    console.log(message);
})();

// The variable 'message' is not accessible outside the IIFE's scope


// console.log(message); // This would result in an error





// let details = (() => {
//     let Person = {
//         name: "Shahzad alam",
//         age: 20,
//         marks: 90
//     }

//     function updateMarks(m) {
//         Person.marks = m;
//     }

//     updateMarks(80);

//     function updateAge(a) {
//         Person.age = a;
//     }
//     return {
//         Person: Person,
//         updateAge: updateAge
//     }
// })();
// details.updateAge(25);
// console.log(details.Person);