const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//true will execute at time of event Traversal

//false will execute at time of event propogation

grandParent.addEventListener('click', (e) => {
        console.log('Grand-parent Div Triggered');
    }, false) //default capture value is false


parent.addEventListener('click', (e) => {
    console.log('parent Div Triggered')
}, false)


child.addEventListener('click', (e) => {
    e.stopPropagation(); //for stoping propogation
    console.log('Child Div Triggered');
}, false)