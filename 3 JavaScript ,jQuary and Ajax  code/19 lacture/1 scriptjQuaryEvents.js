// const headingUsingDOM = document.querySelector('h1');
// console.log(headingUsingDOM);
//

//using jQuary

// console.log($('.special-heading'));
// console.log($('h1')[0]);

const heading1 = $('h1')[0];
console.log(heading1);

// $(heading1).click(() => {
//     console.log("Clicked");
// })//click is depricated 

//----------------mouse events---------------------
$(heading1).on('click', () => {
    console.log('Clicked handed with on function');
})

// $(heading1).on('click', (e) => {
//     console.log(e);
//     // console.log('Clicked handed with on function 2');
// })

$(heading1).on('dbclick', () => {
    console.log('Clicked handed with on function');
})

//----------------keybord events-------------------


// //we can't bind this keyword with arrow function
// $('#inp').on('keydown', function(e) {
//     // console.log(e.target);
//     // console.log(e.target.value);
//     console.log(this); //print element
// })



// $('#inp').on('keydown', (e) => {
//     console.log(this); //print window object
// })