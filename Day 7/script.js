let num = [ 45, 235 ,24, 13, 52]

// let newnum = num.map(x => x*2)
// console.log(newnum);

// const evennum = num.filter(x => x%2 === 0)
// console.log(evennum);

// let reducednum = num.reduce((acc, currval) => acc + currval,0)
// console.log(reducednum);

const students = [
    { name: "Alice", score: 50},
    { name: "Bob", score: 65},
    { name: "Charlie", score: 80},
    { name: "David", score: 45},
    { name: "Rahul", score: 50},
];

// const displayscore = students.map(x => x.score);
// console.log(displayscore);

// const sumscore = displayscore.reduce((acc, curr) => acc + curr, 0)
// console.log(sumscore);

// const sumscore = students.map(x => x.score).reduce((x,y) => x+y, 0)
// console.log(sumscore);

// const sumscore = students.map(x => x.score).filter(score => score > 60).reduce((acc, curr) => acc + curr, 0)
// console.log(sumscore);

// const sumscore = students.filter(score => score.score > 60).map(score => score.score + 10).reduce((acc, curr) => acc + curr, 0)
// console.log(sumscore);

// synchronous programming
// sayHello = () => {
//     console.log("I am a Hello function");
// }
// console.log("Start");
// setTimeout(sayHello, 3000)
// console.log("End");

console.log("Start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed");
        }, 3000)
    }, 2000)
}, 1000)
console.log("End");


