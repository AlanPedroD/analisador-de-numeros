// let numeroInserido = document.querySelector("input#input-number")
// let seletor = document.querySelector("select#seletor")
// let res = document.getElementById("div.resultado")
// let valores = []


let numeroInserido = document.querySelector("#input-number")
let seletor = document.querySelector("#seletor")
let res = document.querySelector(".resultado")
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(numeroInserido.value) && !inLista(numeroInserido.value, valores)){
        valores.push(Number(numeroInserido.value))
        let item = document.createElement('option')
        item.text = `Valor ${numeroInserido.value} adicionado`
        seletor.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou ja encontrado na lista')
    }
    numeroInserido.value = '';
    numeroInserido.focus();
}

function finalisar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalisar')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
                
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `A soma dos valores é ${soma}`
        res.innerHTML += `<p>A média do valores é ${media}</p>`
    }
}
    



