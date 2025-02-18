const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/html")
    const url = req.url;

    if (url == "/home" && req.method == "GET") {
        const data = await fs.readFile("home.html",)
        res.write(data);
    }
    else if (url == "/about" && req.method == "GET") {
        const data = await fs.readFile("about.html")
        res.write(data)
    }
    else {
        const data = await fs.readFile("error.html")
        res.write(data)
    }
    res.end();
})
server.listen(8080,(err)=>{
    try {
        if (err) throw err;
        console.log("Server is running on port number 8080");
    } catch (err) {
        console.log("Server Error: ",err.message);
    }
})

