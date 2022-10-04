function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 12
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'foto-manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'foto-tarde.png'
    document.body.style.background = '#b9846f'
} else {
    //boa noite
    img.src = 'foto-noite.png'
    document.body.style.background = '#515154'
}
}