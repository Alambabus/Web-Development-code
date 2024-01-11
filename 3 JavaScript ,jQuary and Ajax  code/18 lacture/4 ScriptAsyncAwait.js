function getData() {
    let data = [{ name: 'Iphone', price: 100 }, { name: 'Ipad', price: 60 }, { name: 'TV', price: 80 }];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    })
}


// let data = getData();
// console.log(data);


//using promise

// getData()
//     .then((data) => {
//         let newData = data.filter((item) => {
//             return item.price >= 80;
//         })
//         console.log(newData);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


//Async Await

async function solve() {
    let data = await getData();
    let newData = data.filter((item) => {
        return item.price >= 80;
    })
    console.log(newData);
}


solve();