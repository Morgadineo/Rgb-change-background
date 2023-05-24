
function mudarCor() {
    let vermelho = document.getElementById("vermelho").value
    let verde = document.getElementById("verde").value
    let azul = document.getElementById("azul").value

    let label_vermelho = document.getElementById("valor-vermelho")
    let label_verde = document.getElementById("valor-verde")
    let label_azul = document.getElementById("valor-azul")

    let body = document.body

    body.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`

    label_vermelho.innerHTML = vermelho
    label_verde.innerHTML = verde
    label_azul.innerHTML = azul

}