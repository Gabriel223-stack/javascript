function contar() {
    /* ADICIONANDO VALORES NOS ELEMENTOS */
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res')

    /* VALOR DAS VARIAVEIS PARA AVISAR SE NÃO PREENCHER */
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        //window.alert('Por favor, adicione os números para que possa funcionar')
        res.innerHTML = 'Impossível contar!'
    }
    /* CONVERSÃO DE STRING PARA NUMBER */
    else {
        res.innerHTML = `Contando: <br/>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0) /* DEFININDO AVISO DE ERRO */ {
            window.alert('Passo Inválido! Considerando PASSO 1')
        }

        if (i < f) /* INICIO FOR MENOR QUE FIM */ {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1f449} ${c}`
            }
        } else /* INICIO FOR MAIOR QUE FIM */{
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1f449}${c}`
            }
        } res.innerHTML += `\u{1f3c6} Congratulations!`
    }
}