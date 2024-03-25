function contar() {
    // PUXANDO OS ELEMENTOS
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    // FIM DOS ELEMENTOS

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        //window.alert('[ERRO] Falta dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        //CONVERTENDO A STRING PARA NUMBER
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
        }
        // USANDO FOR
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            // CONTAGEM REGRESSIVA  
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            // FIM FOR
        }
        res.innerHTML += `\u{1F3C1}`
    }
}