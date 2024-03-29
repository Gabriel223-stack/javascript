function conversor() {
    let val = Number(window.prompt('Digite uma temperatura em graus °C (Celsius'))
    let res = document.getElementById('res')

    res.innerHTML = '' //ADICIONAR ISTO, LIMITA O CLIQUE PARA UMA VEZ DE CADA, E NÃO FICA ACUMULANDO RESPOSTAS

    res.innerHTML += `<h1>A temperatura de ${val.toLocaleString('pt-BR')}°C, corresponde a...<h1/>`
    res.innerHTML += `<p>${(val * 9 / 5 + 32).toLocaleString('pt-BR')}° F (FAHRENHEIT)<p/>`
    res.innerHTML += `<p>${(val + 273.15).toLocaleString('pt-BR')}° K (KELVIN)`

}