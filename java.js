var button = document.getElementById("helloButton");
var output = document.getElementById("output");

function sayHello() {
    output.textContent = "Hello Losers!";
}

button.addEventListener("click", sayHello);
