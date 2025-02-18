const http = require("http");
const PORT = 3000

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type","application/json");
    const statusCode = 200
    const data = await fetch("https://dummyjson.com/recipes");
    const jsondata = await data.json();
    const receipesnames = jsondata.recipes.map((receipe)=>{
        return receipe.name;
    })
    res.end(JSON.stringify(receipesnames));
})

server.listen(PORT, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running at PORT ${PORT}`)
    } catch (err) {
        console.log(`SERVER ERROR ${err.message}`)
    }
})
