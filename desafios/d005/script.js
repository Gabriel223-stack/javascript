function converter() {
    var met = Number(window.prompt('Digite uma distância em metros (m)'))

    var saida = window.document.getElementById('exit')
    saida.innerHTML = (`<h2>A distância de ${met.toLocaleString('pt-BR')} metros, corresponde a...<h2/>`)

    saida.innerHTML += `<p>${(met / 1000).toLocaleString('pt-BR')} quilômetros (KM)<p/>`

    saida.innerHTML += `<p>${(met / 100).toLocaleString('pt-BR')} Hectômetros (HM)<p/>`

    saida.innerHTML += `<p>${(met / 10).toLocaleString('pt-BR')} Decâmetros (DAM)<p/>`

    saida.innerHTML += `<p>${(met * 10).toLocaleString('pt-BR')} Decímetros (DM)<p/>`

    saida.innerHTML += `<p>${(met * 100).toLocaleString('pt-BR')} Centímetros (CM)<p/>`

    saida.innerHTML += `<p>${(met * 1000).toLocaleString('pt-BR')} Milímetros (MM)<p/>`
    
}