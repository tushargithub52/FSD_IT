let a = () => {
    console.log("Arrow Function");
}

let b = () => {
    console.log("Arrow Function 2");
}

a()
b()

// query selector

// function display() {
//     const p1 = document.querySelector("p");
//     p1.innerHTML = "I am in body";
//     p1.style.backgroundColor = "red";
//     p1.style.color = "white";
// }


// function display() {
//     const p1 = document.querySelectorAll("p");
//     p1[0].innerHTML = "I am in para 1";
//     p1[0].style.backgroundColor = "red";
//     p1[0].style.color = "white";
//     p1[1].innerHTML = "I am in para 2";
//     p1[1].style.backgroundColor = "yellow";
//     p1[1].style.color = "white";
// }


// function changeHeader() {
//     const header = document.querySelector("h1")
//     header.textContent = "New Heading"
// }

const a1 = document.querySelector("a");
a1.setAttribute("href", "http://aktu.ac.in");
a1.innerHTML = "AKTU website";

const newdiv = document.createElement('div') 
newdiv.textContent = "This is a new div"

const body = document.querySelector("body")
body.appendChild(newdiv)

const button = document.querySelector("button")
button.addEventListener('click', () => {
    alert("hello")
})
