let res = document.querySelector('div#res')

function calcular() {
    let produto = String(window.prompt('Qual é o produto que você está comprando?'))
    let preco = Number(window.prompt(`Qual é o preço de ${produto}`)) 
    let precoDesconto = preco * 0.1
    let valorReal = preco - precoDesconto

    //let desconto = Number(precoDesconto.value)
    //let vlreal = Number(valorReal.value)
    
    res.innerHTML = ''

    res.innerHTML += `<h2>Calculando desconto de 10% para ${produto}</h2><br>`

    res.innerHTML += `<p>O preço original era de ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p><br>`

    res.innerHTML += `<p>Você acaba de ganhar ${precoDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%).</p><br>`
    
    res.innerHTML += `<p>No fim, você vai pagar ${valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${produto}.</p><br>`

}
