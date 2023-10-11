const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1------------------------------------>

//map function:->This will return new Array


// const newArr = arr.map((num, index) => {
//     console.log(num, index);
//     // return num;
//     // return 2 * num;
//     // return { num: num, updaatedVal: num * 2, index: index };
// });

// console.log(newArr);
// console.log(Math.sqrt(4));


//2-------------------------------------->

//filter function:->this will return an array of all values


// const filteredArr = arr.filter((num, ind) => {
//     return num % 2 == 0;
// });

// console.log(filteredArr);


//3-------------------------------------->

//filter function


// const vehicals = [{
//         wheels: 4,
//         color: 'white'
//     },
//     {
//         wheels: 2,
//         color: 'black'
//     },
//     {
//         wheels: 8,
//         color: 'green'
//     },
//     {
//         wheels: 2,
//         color: 'red'
//     },
//     {
//         wheels: 1,
//         color: 'orange'
//     },
//     {
//         wheels: 2,
//         color: 'black'
//     },
//     {
//         wheels: 12,
//         color: 'gray'
//     },
//     {
//         wheels: 4,
//         color: 'blue'
//     }
// ];

// const vehicalsAfterFilter = vehicals.filter((vehical) => {
//     return vehical.color == 'red';
// });
// console.log(vehicalsAfterFilter);

//4---------------------------------------------------->
// let a = 40;
// let b = '40';
// console.log(a == b);
// console.log(a === b);


//5----------------------------------->

//reduce function


// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const totalAmount = arr2.reduce((total, num) => {
//     return total + num;
// }, 10);

// console.log(totalAmount);