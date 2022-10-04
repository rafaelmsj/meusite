
function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>` 
    if (vel > 60) {
        res.innerHTML += `Voce foi multado por exceder o limite da via.`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
