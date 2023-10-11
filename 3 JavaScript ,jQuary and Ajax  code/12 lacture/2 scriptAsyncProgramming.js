console.log("hello");
//1-------------------------->

delay(2);
console.log("Programmer2");

//2-------------------------->

delay(5);
console.log("Programmer5");

//3-------------------------------->

setTimeout(() => {
    console.log("Programmer3");
}, 3000);

function delay(n) {
    let time = new Date().getTime();
    while (time + n * 1000 > new Date().getTime()) {

    }
}