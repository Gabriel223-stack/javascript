let cotacao = Number(window.prompt('Antes de mais nada. Quanto está cotaçao do dólar agora?'))

function conversor() {
    let real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    let dolar = cotacao * real 
    let resultado = document.getElementById('saida')

    resultado.innerHTML = `<h2>Conversão de Reais para Dólares<h2/>`

    resultado.innerHTML += `<p>O valor da sua carteira é de ${real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<p/>`

    resultado.innerHTML += `<p>O valor da cotação está em torno de ${cotacao.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.<p/>`
    
    resultado.innerHTML += `<p>Ou seja, o valor da sua carteira em conversão com a moeda dos Estados Unidos é de< ${dolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.<p/>`
}