const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');


async function getData(URL) {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function addDataToList(factData) {
    catFacts.innerText = '';
    factData.forEach((text) => {
        const li = document.createElement('li');
        li.innerText = text;
        catFacts.append(li);
    });
}

async function handler() {
    try {
        const data = await getData(URL);
        const factData = data.map((obj) => {
            return obj.text;
        });
        addDataToList(factData);
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', handler)