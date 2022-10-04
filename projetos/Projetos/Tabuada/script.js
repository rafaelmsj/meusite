 function carregar() {

  var txt = window.document.getElementById('txt')
  var tab = window.document.getElementById('tabuada')
  
    if (txt.value.length == 0) {
        window.alert('Por favor preencha o campo "Número".')
    } else {}
        var t = Number(txt.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            tab.appendChild(item)
            c++
        }

}
