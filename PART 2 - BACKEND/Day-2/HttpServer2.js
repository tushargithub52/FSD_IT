//create a http server which display the Content of goo=iven api = https://dummyjson.com/recipes

const http = require("http")
const port = 3000

const Server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type","application/json");
    res.statusCode = 200
    const data = await fetch("https://dummyjson.com/recipes");
    const jsondata = await data.json()
    const newdata = jsondata.recipes;
    const rnames = newdata.map((re)=>{
        return re.name;
    });
    res.end(JSON.stringify(rnames));
})

Server.listen(port, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running at port ${port}`)
    } catch (err) {
        console.log(`Error message: ${err.message}`)
    }
})