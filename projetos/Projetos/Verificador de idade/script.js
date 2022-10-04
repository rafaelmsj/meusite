function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 2){
                //bebe
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 10) {
                //crianca
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 2){
                //bebe
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 10) {
                //crianca
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
    }
}