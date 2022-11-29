let nome
let modo = 0
let numRandom

function setarNome () {
    nome = document.getElementById("nome").value
    if(nome != ""){
        document.getElementById("nome").disabled = true
        document.getElementById("confirma1").disabled = true
        document.getElementById("insano").removeAttribute("disabled")
        document.getElementById("dificil").removeAttribute("disabled")
        document.getElementById("medio").removeAttribute("disabled")
        document.getElementById("facil").removeAttribute("disabled")
        document.getElementById("noob").removeAttribute("disabled")
    }
}

function setarModo (num) {
    modo = num
    document.getElementById("insano").disabled = true
    document.getElementById("dificil").disabled = true
    document.getElementById("medio").disabled = true
    document.getElementById("facil").disabled = true
    document.getElementById("noob").disabled = true
    jogar()
}

function jogar () {
    numRandom = parseInt(Math.random()*99 + 1)
    document.getElementById("tentativas").innerText = "Tentativas: " + modo
    document.getElementById("chute").removeAttribute("disabled")
    document.getElementById("confirma2").removeAttribute("disabled")
}

function verificarChute () {

}