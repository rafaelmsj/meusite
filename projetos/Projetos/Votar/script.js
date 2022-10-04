function carregar(){

let idade = document.getElementById('idade')
let res = document.getElementById('res')
let idade1 = Number(idade.value)

if (idade1 < 16) {
    res.innerHTML = 'Voce ainda não vota!'
} else if (idade1 >= 16 && idade < 18) {
    res.innerHTML = 'Voto Opcional'
} else if (idade1 < 65) {
    res.innerHTML = 'voto obrigatorio'
} else {
    res.innerHTML ='Voto opcional'
}
}
