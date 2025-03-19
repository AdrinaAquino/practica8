const pantalla = document.querySelector("#pantalla")
const botones = document.querySelectorAll("button")
const numeros = document.querySelectorAll("#num")
const operadores = document.querySelectorAll("#operador")
const borrar = document.querySelectorAll("#borrar")
const igual = document.querySelector("#igual")

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "AC") {
            pantalla.value = "";
        } else if (btn.textContent === "X") {
            pantalla.value = pantalla.value.slice(0, -1)
        } else if (btn.textContent === "=") {
            pantalla.value = eval(pantalla.value)
        } else if (btn.textContent === "+" && pantalla.value === "") {
            pantalla.value = "";
        } else if (btn.textContent === "-" && pantalla.value === "") {
            pantalla.value = "";
        } else if (btn.textContent === "*" && pantalla.value === "") {
            pantalla.value = "";
        } else if (btn.textContent === "/" && pantalla.value === "") {
            pantalla.value = "";
        }else {
            pantalla.value += btn.textContent
        }
    })
})