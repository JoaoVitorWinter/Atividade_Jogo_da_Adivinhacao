let nome
let modo = 0
let numRandom
let chute = 0
let numChutes = 0
let pontos = 0
let tabela

function setarNome () {
    nome = document.getElementById("nome").value
    if(nome != ""){
        document.getElementById("nome").disabled = true
        document.getElementById("confirma1").disabled = true
        document.getElementById("confirma1").style.backgroundColor = "gray"
        document.getElementById("confirma1").style.color = "black"
        document.getElementById("confirma1").style.cursor = "default"
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
    document.getElementById("insano").style.backgroundColor = "gray"
    document.getElementById("insano").style.color = "black"
    document.getElementById("insano").style.cursor = "default"
    document.getElementById("dificil").style.backgroundColor = "gray"
    document.getElementById("dificil").style.color = "black"
    document.getElementById("dificil").style.cursor = "default"
    document.getElementById("medio").style.backgroundColor = "gray"
    document.getElementById("medio").style.color = "black"
    document.getElementById("medio").style.cursor = "default"
    document.getElementById("facil").style.backgroundColor = "gray"
    document.getElementById("facil").style.color = "black"
    document.getElementById("facil").style.cursor = "default"
    document.getElementById("noob").style.backgroundColor = "gray"
    document.getElementById("noob").style.color = "black"
    document.getElementById("noob").style.cursor = "default"
    jogar()
}

function jogar () {
    numRandom = parseInt(Math.random()*99 + 1)
    document.getElementById("tentativas").innerText = "Tentativas: " + modo
    document.getElementById("chute").removeAttribute("disabled")
    document.getElementById("confirma2").removeAttribute("disabled")
}

function verificarChute () {
    chute = document.getElementById("chute").value
    numChutes++
    if(chute == numRandom){
        pontos = 1000 / (modo + numChutes)
        alert("Parab??ns, " + nome + ", voc?? acertou! Pontua????o: " + pontos.toFixed(2))

        fetch("/rankear", {
            method: "POST",
            body: JSON.stringify({nome, pontos}),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
        })

        window.location.href = "/"
    } else if (chute > numRandom){
        document.getElementById("aviso").innerText = "O chute foi maior que o n??mero!"
    } else {
        document.getElementById("aviso").innerText = "O chute foi menor que o n??mero!"
    }

    if(numChutes == modo && chute != numRandom){
        alert("Voc?? perdeu! O n??mero era " + numRandom)
        window.location.href = "/"
    }

    document.getElementById("tentativas").innerText = "Tentativas: " + (modo - numChutes)
}

function pegarPlacar () {
    fetch("/pegarPlacar", {
        method: "GET",
        cache: "default",
    })
    .then(res => {
        res.json()
            .then(data => {
                atribuirInfo(data)
            })
    })
}

function atribuirInfo (results) {
    tabela = ""
    tabela += "<tr><th>Ranking</th><th>Nome</th><th>Pontos</th></tr>"
    
    for (let x in results){
        tabela += `<tr><td>${parseInt(x) + 1}</td><td>${results[x].nome}</td><td>${results[x].pontos}</td></tr>`
    }
    document.getElementById("placar").innerHTML = tabela
}