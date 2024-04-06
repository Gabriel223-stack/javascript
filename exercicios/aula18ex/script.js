let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
/* INICIO DO BOTAO ADICIONAR */
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) /* ADICIONOU VALORES E CRIOU FUNÇÕES PARA LIGAR NESTA FUNÇÃO, QUERENDO DAR VALOR A ELAS */{
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' /* LIMPANDO OS NUMEROS */
    } else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    num.value = '' 
    num.focus() /* PARA MOSTRAR A OPÇÃO QUANDO PASSA O MOUSER */
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l)  {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}
/* FIM DO BOTAO ADICIONAR */

/* INICIO BOTAO FINALIZAR */
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos] // VAI SOMANDO CONFORME A POSIÇÃO DOS ELEMENTOS
            if (valores[pos] > maior)
                maior = valores[pos] //ADICIONANDO VARIAVEIS PARA CADA POSIÇÃO
            if (valores[pos] < menor)
                menor = valores[pos] //ADICIONANDO VARIAVEIS PARA CADA POSIÇÃO
            /* OS OPERADORES RELACIONAIS MENOR E MAIOR JÁ DÃO VALORES DE ELEMENTOS PELA POSIÇÃO DENTRO DO ARRAY */
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
/* FIM DO BOTAO FINALIZAR */
}