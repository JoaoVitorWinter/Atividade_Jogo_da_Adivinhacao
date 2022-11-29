let nome
let modo = 0

function setarNome () {
    nome = document.getElementById("nome").value
    document.getElementById("nome").disabled = true
    console.log(nome)
}

function setarModo (num) {
    modo = num
}