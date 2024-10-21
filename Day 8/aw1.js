async function orderFood(name, time) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(name + " Prepared")
        }, time);
    });
};

async function restaurant(){
    console.log("Order Placed");
    let pizza = await orderFood("Pizza", 1000)
    console.log(pizza);
    let burger = await orderFood("Burger", 2000)
    console.log(burger);
}

restaurant()