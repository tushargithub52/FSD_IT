const express = require("express")
const fs = require("fs/promises")
const app = express();
const PORT = 3000;
let users = [];
const loadUser = async () => {
    try {
        const data = await fs.readFile("./users.json", "utf-8");
        users = JSON.parse(data);
    } catch (err) {
        users=[];
    }
}
const saveData = async () => {
    await fs.writeFile("./users.json", JSON.stringify(users));
}

app.use(express.json());
loadUser();
app.get("/users", (req, res) => {
    res.status(200).json(users);
})

app.get("/user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id==uid)
    if(index==-1){
        res.status(400).json({status:"Fail", message: "User not found"});
    }
    else{
        res.status(400).json({status:"Success",message: "User found", data: users[index]});
    }
})

app.post("/createuser", (req, res) => {
    const {name, email} = req.body;
    const newid = Date.now();
    const newuser = {
        id:newid,
        name,
        email,
    }
    users.push(newuser);
    saveData();
    res.status(201).json({status: "Success", message: "User created successfully", data: newuser});
})
app.patch("/edituser/:id", (req, res) => {
    const uid = req.params.id;
    const {NewName, NewEmail} = req.body;
    if(!NewName || !NewEmail){
        res.status(400).json({status: "Fail", message: "All fields are required"})
    }
    else{
        const index = users.findIndex(ind => ind.id == uid);
        if(index==-1){
            res.status(400).json({status: "Fail", message: "User not found"})
        }
        else{
            users[index].name = NewName;
            users[index].email = NewEmail; 
            res.status(200).json({status: "Success", message: "User data updated successfully", data: users[index]});
        }
    }
})
app.delete("/deleteuser/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid);
    if(index==-1){
        res.status(400).json({status: "Fail", message: "User not found"})
    }
    else{
        const deleteduser = users.splice(index,1);
        res.status(200).json({status: "Success", message: "User deleted successfully", data:deleteduser});
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})