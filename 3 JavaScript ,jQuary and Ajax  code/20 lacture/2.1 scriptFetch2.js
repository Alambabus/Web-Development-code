const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');

function getData(URL) {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
    })
}

function addDataToList(factData) {
    catFacts.innerText = '';
    factData.forEach((text) => {
        const li = document.createElement('li');
        li.innerText = text;
        catFacts.append(li);
    });
}

function handler() {
    getData(URL)
        .then((data) => {
            const factData = data.map((obj) => {
                return obj.text;
            })
            console.log(factData);
            addDataToList(factData);
        })
        .catch(err => console.log(err));
}

btn.addEventListener('click', handler)