// var a = 12
// var a = 45

// function display() {
//     console.log(a);
// }
// display()
// console.log(a);  

// function display() {
//     let x = confirm("Are you above 18")
//     alert(x)
// }

// function display(){
//     let x = prompt("Enter you Name", "Tushar")
//     alert(x)
// }

function validate() {
    let name = document.getElementById("name").value
    let password = document.getElementById("pass").value
    if(name == "admin" && password == "admin"){
        document.getElementById("result").innerText = "Login Success"
    }
    else{
        document.getElementById("result").innerText = "Login Failed"
    }
    return false;
}