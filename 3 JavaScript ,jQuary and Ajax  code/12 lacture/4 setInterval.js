const id = setInterval(() => {
    let date = new Date().getSeconds();
    console.log("say hi  " + date);
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 8000);