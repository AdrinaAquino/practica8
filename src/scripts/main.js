const pantalla = document.querySelector("#pantalla")
const botones = document.querySelector("#botones")

const teclas = [7, 8, 9, "AC", 4, 5, 6, "X", 1, 2, 3, "/", "-", 0, "+", "*", "="]




function enviar(lista, indexhtml) {
    indexhtml.innerHTML = ""
    lista.forEach((a) => {
        const template = `<button class="tecla" id="btn">${a}</button>`
        indexhtml.innerHTML += template
    })
}
enviar(teclas, botones)


teclas.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn === "=") {
            pantalla.value = eval(pantalla.value);
        } else if (btn === "AC") {
            pantalla.value = "";
        } else if (btn === "X") {
            pantalla.value = pantalla.value.slice(0, -1);
        } else {
            pantalla.value += btn
        }
    })
})


