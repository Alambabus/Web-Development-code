//1------------------------------------------>

// Constructor
// function

// function Student(name, age, isAdult) {
//     this.name = name;
//     this.age = age;
//     this.isAdult = isAdult;

//     this.details = function() {
//         console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
//     }
// }


// let Student1 = new Student('Rajat', 20, true);
// let Student2 = new Student('Salman', 24, true);
// let Student3 = new Student('Radha', 16, false);

// console.log(Student1);
// console.log(Student1.details());
// console.log(Student2.details());
// console.log(Student3.details());


//2----------------------------------------------->

// console.log(Number);
// console.log(typeof Number);
// console.log(typeof Object);
// console.log(typeof Array);
// console.log(typeof String);
// console.log(typeof Function);


// 3--------------------------------------------->

function Student(name, age, isAdult) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;

    this.details = function() {
        console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
    }
}


let Student1 = new Student('Rajat', 20, true);
// let Student2 = new Student('Salman', 24, true);
// console.log(Student1);
// console.log(Student1.__proto__);
// console.log(Student1.__proto__ === Student);
// console.log(Student1.__proto__ === Student.prototype);
// console.log(Student2.__proto__ === Student.prototype);




//4------------------------------------------>

// let str = "Hello";
// console.log(str.__proto__);


// let arr = [2, , 3, 4, 5];
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);

// let num = 10;
// console.log(num.__proto__ == Number.prototype);


// let obj = {
//         a: "This is a",
//         b: true
//     }
// console.log(obj.__proto__ === Object.prototype);
// console.log(String.prototype.__proto__ === Object.prototype);



//5------------------------------------->
// console.log(Object.prototype);

// let arr = [2, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.pop());
// console.log(arr);
// console.log(Array.prototype.pop);


//Array.prototype.pop = function() {
//      console.log("Sorry! mai nhi karuga Pop");
//}
// f() {
//     console.log("Sorry! mainhi karuga Pop");
// }

// arr.pop();



//6------------------------------------->

let obj = {
    a: 10,
    b: true
}


let obj1 = Object.create(obj);
// console.log(obj);
// console.log(obj1);
// console.log(obj1.__proto__);
// console.log(obj1.__proto__ === obj);
// console.log(obj1.a);


let obj2 = Object.create(obj1);
console.log(obj2.__proto__);
console.log(obj2.__proto__ === obj1);
console.log(obj2.__proto__.__proto__);
console.log(obj2.__proto__.__proto__ === obj);
console.log(obj2.__proto__.__proto__.__proto__);
// console.log(obj2.__proto__.__proto__.__proto__ === Object.prototype);


// console.log(obj1.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('a'));