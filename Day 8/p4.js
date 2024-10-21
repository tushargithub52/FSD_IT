function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = [
                { name: "Alice", score: 50},
                { name: "Bob", score: 65},
                { name: "Charlie", score: 80},
                { name: "David", score: 45},
                { name: "Rahul", score: 50},
            ];
            resolve(students)
        }, 4000);
    });
}

fetchData()
.then((students) => {
    const sumscore = students.map(x => x.score).reduce((x,y) => x+y, 0);
    console.log(sumscore);
})
.catch( (error) => {
    console.log(error);
})