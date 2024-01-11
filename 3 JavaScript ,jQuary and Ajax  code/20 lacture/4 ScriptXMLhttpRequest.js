const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');

const xhr = new XMLHttpRequest();

//Request ke success hone per ye chalega
xhr.onload = function(res) {
    data = res.currentTarget.response;
    console.log(JSON.parse(data));
}

//Request ke fail hone pr ye chalega
xhr.onerror = function(err) {
    console.log(err);
}

//Request kha bhejni hai, define karo
xhr.open("GET", URL);

btn.addEventListener('click', () => {
    //Request ko send karna
    xhr.send();
})