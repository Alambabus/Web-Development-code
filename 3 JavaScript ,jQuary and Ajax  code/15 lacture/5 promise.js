// let kalMiluga = true;

// //Promise is introduced in ES6

// function kalMilugaYaNhi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (kalMiluga) resolve();
//             else reject(new Error);
//         }, 3000);
//     })
// }

// kalMilugaYaNhi().then(() => {
//         console.log("HumMilgye");
//     })
//     .catch((err) => {
//         // console.log("Nhi mile! dhoka dia!");
//         console.log(err);
//     });



function sumOfThreeElements(...elements) {
    return new Promise((resolve, reject) => {
        if (elements.length > 3) {
            reject("Only three elements or less are allowed");
        } else {
            let sum = 0;
            let i = 0;
            while (i < elements.length) {
                sum += elements[i];
                i++;
            }
            resolve("Sum has been calculated: " + sum);
        }
    })
}

sumOfThreeElements(10, 20)
    .then((str) => {
        console.log(str);
    })
    .catch((err) => {
        console.log(err);
    })