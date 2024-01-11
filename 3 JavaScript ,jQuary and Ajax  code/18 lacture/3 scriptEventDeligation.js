const childs = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');


// console.log(childs)
//-------------------------------->1

// for (let child of childs) {
//     child.addEventListener('click', (e) => {
//         console.log(e.target.innerText);
//     })
// }


//------------------------------------>2
//in console

// let child = document.createElement('div');
// child.setAttribute('class', 'child');
// child.innerText = 'child-9';
// const parent = document.querySelector('.parent');
// parent.append(child);


//--------------------------------------->3

parent.addEventListener('click', (e) => {
    console.log(e.target.innerText);
})

//in console
let child = document.createElement('div');
child.setAttribute('class', 'child');
child.innerText = 'child-9';
// const parent = document.querySelector('.parent');
parent.append(child);