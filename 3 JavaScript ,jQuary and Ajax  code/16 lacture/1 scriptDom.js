//------------------------------------ Selectors ------------------------------------------------------



// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// const favMovies = document.getElementById('movies');
// console.log(favMovies);


// const para = document.getElementById('specialPara')
// console.log(para);

const headings = document.querySelector('h1');
const fav_movies = document.querySelector('.fav-movies'); //will select only first element
const specialPara = document.querySelector('#specialPara');
const allFavMovies = document.querySelectorAll('.fav-movies');


// headings.style.color = 'red';
// headings.style.backgroundColor = 'teal';


//-------------------------------> innerText vs innerHTML 
// headings.innerText = 'Change the content';
// headings.innerText = '<em> this is heading </em>';
// headings.innerHTML = '<em> this is heading </em>';


// //---------------------------->getAttribute(), setAttribute(), removeAttribute()


// specialPara.setAttribute('class', 'one');
// specialPara.getAttribute('class');
// specialPara.setAttribute('class', 'one two');
// headings.removeAttribute('style');



// // ----------------------classList.add(), classList.remove(), classList.toggle(),classList.contains()


// // fav_movies.classList.add('three');
// // fav_movies.classList.remove('three');
// // fav_movies.classList.contains('three');
// // favMovies.classListtoggle('one');