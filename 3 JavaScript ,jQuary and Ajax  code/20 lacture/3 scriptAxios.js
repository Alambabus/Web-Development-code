const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('button');
const catFacts = document.querySelector('.cat-facts');

function getData(URL) {
    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => reject(err));
    })

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

function addDataToList(factData) {
    catFacts.innerText = '';
    factData.forEach((text) => {
        const li = document.createElement('li');
        li.innerText = text;
        catFacts.append(li);
    });
}




btn.addEventListener('click', handler);