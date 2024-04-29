let res = document.getElementById('saida')

function calcular() {
    let a = Number(window.prompt('Qual é o valor de a'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c ?'))
    
    let resx1 = -b + (b ** 2 - 4 * a * c) / 2 * a
    let resx2 = -b - (b ** 2 - 4 * a * c) / 2 * a
    
    res.innerHTML = `<h2>Resolvendo Bhaskara</h2><br>`
    res.innerHTML += `<p>A equação atual é <b>${a}x²+ ${b}x + 2 = 0</b></p><br>`
    res.innerHTML += `<p>O cálculo realizado será <b>Δ = - ${b}² +- 4 . 3 . 2</b></p><br>`
    res.innerHTML += `<p>O valor calculado de <b>X¹ = ${resx1} e X² = ${resx2}</b></p>`
    res.innerHTML += ''
}