//create a http server which creates endpoints for a CRUD app

const http = require("http")
const PORT = 8080

let data = [{
    id: 1,
    name: "Tushar",
    email: "e@email.com",
}]


const server = http.createServer(async (req, res) => {
    const URL = req.url;

    if(URL == "/users" && req.method == "GET") {
        res.writeHead(200, {"Content-Type" : "application/json"});
        const obj = data.map((i) => {
            return {id:i.id,
                    name:i.name,
                    email:i.email,    
                }
        })
        res.end(JSON.stringify(obj))
    }
    
    else if (URL == "/users" && req.method == "POST") {
        res.statusCode = 200;
        let body = '';
        req.on("data", (d) => {
            body += d.toString();
        })
        req.on("end",() => {
            const length = data.length;
            const newid = data[length-1].id;
            const jsonbody = JSON.parse(body);
            const {name, email} = jsonbody;
            const newData = {
                id: newid+1,
                name:name,
                email:email,
            }
            data.push(newData);
        })
        res.end("Data created successfully");
    }

    else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("PAGE NOT FOUND")
    }

});

server.listen(PORT, (err) => {
    try {
        if (err) throw err
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    } catch (err) {
        console.log(`SERVER ERROR ${err.message}`)
    }
})