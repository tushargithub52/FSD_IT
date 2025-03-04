const express = require("express");
const app = express()
const PORT = 3000;
app.use(express.json());
const products = [
    {
        id: 1,
        name:"Headphone",
        brand:"Boat",
        price:"$12",
        quantity: 4,
    },
    {
        id: 2,
        name:"Smartphone",
        brand:"Iphone",
        price:"$1500",
        quantity: 2,
    },
]

app.get('/products', (req, res) => {
    res.status(200);
    res.json(products);
})

app.post('/product', (req, res) => {
    const { name, brand, price, quantity} = req.body;

    if( !name || !brand || !price || !quantity){
        res.status(400).json({
            status:"Failed",
            message: "All fields required",
        })
        }
    else {
        // const newID = products.length > 0 ? (products[products.length - 1].id + 1) : 101
        const newID = Math.floor((Math.random()+1)*100000);
        const newproduct = {newID, name, brand, price, quantity}
        products.push(newproduct);
        res.status(201)
        res.json({
            status:"success",
            message:"product created successfully",
            newproduct,
        })
    }
})

app.get('/product/:id', (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid);
    if(index == -1){
        res.status(400).json({
            status: "fail",
            message: "Product is not found"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "Product found successfully"
        })
    }

})

app.listen(PORT, (err) => {
    try {
        if(err) throw err
        console.log(`Server is running at port ${PORT}`)
    } catch (err) {
        console.log(`SERVER ERROR: ${err.message}`)
    }
})