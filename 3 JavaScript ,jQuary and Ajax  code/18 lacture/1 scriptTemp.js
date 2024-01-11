const div = document.querySelector('.container');
const para = document.querySelector('.para');


para.addEventListener('click', (e) => {
    // console.log(e.target);

    setTimeout(() => {
        e.target.style.color = 'red';
    }, 3000);
})