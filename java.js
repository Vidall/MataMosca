var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempoDificuldade = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel == 'normal') {
    tempoDificuldade = 1500
} else if (nivel == 'dificil') {
    tempoDificuldade = 1000
}else if (nivel == 'impossivel') {
    tempoDificuldade = 650
}

function ajustarTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    // console.log(altura, largura)
}
ajustarTela()

var cronometro =  setInterval ( function() {
    
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('icronometro').innerHTML = tempo
    }
},1000)

function posicaoMosca() {
    //se a mosca ja existir na tela remover
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if ( vidas > 3) {
            window.location.href = 'fimJogo.html'
        }else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    //osicção randomica
    var alturaY = Math.floor(Math.random()* altura) - 90
    var larguraX = Math.floor(Math.random()* largura) - 90 
    
    if (alturaY < 0) {alturaY = 0}
    if (larguraX < 0) {larguraX = 0}
    // criar o img
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoMosca() + ' ' + ladoMosca()
    mosquito.style.top = alturaY + 'px'
    mosquito.style.left = larguraX + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
    
}

function tamanhoMosca () {
    var classe = Math.floor(Math.random() * 3)
    switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoMosca() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        }
}
