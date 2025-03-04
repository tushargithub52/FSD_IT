const express = require("express");
const app = express();
const port = 3001;
const users = [
    {
    id:1,
    name:"Tushar Rai",
    email: "tushar@abes.ac.in",
    password: "abes",
    }
]
app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200);
    res.json(users);
})

app.post("/user", (req, res) => {
    const {id, name, email, password} = req.body;
    const newuser = { id, name, email, password }
    users.push(newuser);
    res.status(201)
    res.json({status:"success", message: "user created successfully"});
})

app.delete("/deleteuser/:id", (req, res) => {
    const uid = req.params.id;
    if(uid != null){
        const index = users.findIndex(ind => ind.id == uid);
        if(index != -1){
            users.splice(index,1);
            res.status(200);
            res.json({status:"success", message: "user deleted successfully"});
        }
        else{
            res.status(400);
            res.json({status:"fail", message: "Wrong user id"})
        }
    }
});

app.listen(port, (err) => {
    try {
        if(err) throw err;
        console.log(`Server is running on ${port}`)
    } catch (err) {
        console.log("Server error: ",err.message);
    }
})