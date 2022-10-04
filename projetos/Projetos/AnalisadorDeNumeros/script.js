    let txtn = document.getElementById('txtn')
    let numeros = document.getElementById('numeros')
    let res = document.getElementById('res')
    let valores = []
    
    function isnumero(n){
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inlista(n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if(isnumero(txtn.value) && !inlista(txtn.value, valores)) {
            res.innerHTML = ''
            valores.push(Number(txtn.value))
            
            let item = document.createElement('option')
            item.text += `O valor ${Number(txtn.value)} foi adicionado.`
            numeros.appendChild(item)
            txtn.value = ''
            txtn.focus()

        } else {
            window.alert('O valor não esta entre 0 e 100 ou já adicionado.')
        }
    
    }
    
    function finalizar(){
        if (valores.length == 0){
            window.alert('Voce precisa adicionar numeros.')
        } else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            for (let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
        media = soma / total
        res.innerHTML = ``        
        res.innerHTML += `Ao todo, temos ${total} números cadastrados. </br>`
        res.innerHTML += `O maior valor informado foi ${maior}.</br>`
        res.innerHTML += `O menor valor informado foi ${menor}.</br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.</br>`
        res.innerHTML += `A média dos valores digitados é ${media}.</br>`
        }
        
        

    }