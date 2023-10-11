console.log("working Fine!");

//1----------------------->mouse Events

const h1 = document.querySelector('h1');



// h1.addEventListener('mouseenter', (e) => {
//     console.log(e.target); //this is refering element h1
//     e.target.style.backgroundColor = "teal";
// })



// h1.addEventListener('mouseleave', (e) => {
//     console.log(e.target); //this is refering element h1
//     e.target.style.backgroundColor = "";
// })


// h1.addEventListener('click', (e) => {
//     // e.target.style.padding = '25px';

//     e.target.style.display = 'none'; //To hide the element content on page
// })


//2----------------------------->keybord events

const inp = document.querySelector('input');

//keypress is depricated



// inp.addEventListener('keypress', (e) => {
//     // console.log(e);
//     console.log(e.key);
// })

// inp.addEventListener('keydown', (e) => {
//     // console.log(e);
//     // console.log(e.key);
//     console.log(e.target.value); //by the value we can write on page whatever we write on on text
// })


// inp.addEventListener('keyup', (e) => {
//     // console.log(e);
//     console.log(e.key);
// })


const usernameInp = document.getElementsByName('username')[0];
const passwordInp = document.getElementsByName('password')[0];
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //to stop reload the page
    console.log(usernameInp.value);
    console.log(passwordInp.value);

    //for empty text box after submit
    usernameInp.value = "";
    passwordInp.value = "";
})