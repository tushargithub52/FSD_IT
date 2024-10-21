// const myPromise = new Promise ( (resolve, reject) => {
//     let success = true
//     if (success) {
//         resolve("Data send successfully")
//     } else {
//         reject("Data not sent")
//     }
// });

const myPromise = new Promise ( (resolve, reject) => {
    let success = true
    setTimeout(() => {
        if (success) {
            resolve("Data send successfully")
        } else {
            reject("Data not sent")
        }
    }, 5000);
});

myPromise.then((message) => {
    console.log("Data : " + message);
}).catch( (error) => {
    console.log(error);
})