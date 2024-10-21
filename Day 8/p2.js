function task(message, delay) {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve()
        }, delay);
    })
}

task("First task completed", 2000)
    .then(() => task("Second task completed", 3000))
    .then(() => task("Third task completed", 4000))
    .then(() => task("Fourth task done", 5000))