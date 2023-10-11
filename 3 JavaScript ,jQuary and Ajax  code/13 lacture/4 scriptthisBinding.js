//1--------------------------------------------------------------->

//A->This is default binding

// console.log(this); //this will point to Window object

// function add() {
//     console.log(this); //this will point to Window object
// }
// add();



//B->This is Implicit binding

// let obj = {
//     name: 'Coding Blocks',
//     location: ['pitampura', 'noida'],
//     fun: function() {
//         console.log(this); //this will point obj object
//     }
// }

// obj.fun();


//2------------------------------------------>

// function updateAge() {
//     person1.age = 30;
//     person2.age = 20;
// }

// let person1 = {

//     name: 'Shahzad Alam',
//     age: 22
// }

// let person2 = {
//     name: 'Sana Tasmeen',
//     age: 18
// }

// updateAge();
// console.log(person1);
// console.log(person2);


//3-------------------------------------------------------->


// function updateAge(age) {
//     this.age = age;
// }

// let person1 = {

//     name: 'Shahzad Alam',
//     age: 22
// }

// let person2 = {
//     name: 'Sana Tasmeen',
//     age: 18
// }

// updateAge.call(person1, 30);
// console.log(person1);
// console.log(person2);


//4----------------------------------------------->

// C->Explicit binding:->
//a->call(obj_name,properties of object);
// //b->apply(object_name,array);


// function updateAge(age, name, location = 'India') {
//     this.age = age;
//     this.name = name;
//     this.location = location;
// }

// let person1 = {

//     name: 'Shahzad Alam',
//     age: 22
// }

// let person2 = {
//     name: 'Sana Tasmeen',
//     age: 18
// }

// updateAge.call(person1, 25, 'Alam', 'BangLore');
// // // updateAge.apply(person1, [22, 'AlamBabu', 'Banglore']);
// console.log(person1);
// console.log(person2);


//6-------------------------------------------->

//D->new keyword binding


// function Car(color, wheels, seat) {
//     this.color = color;
//     this.wheels = wheels;
//     this.seat = seat;
// }

// let car1 = new Car('Balck', 4, 2);
// let car2 = new Car('Yellow', 4, 8);
// console.log(car1);
// console.log(car2);
// console.log(window);