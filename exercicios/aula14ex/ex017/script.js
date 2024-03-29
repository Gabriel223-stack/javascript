function tabuada() {
    /* ADICIONAR VALOR NOS ELEMENTOS */
    let num = document.getElementById('txtn') //NUMERO ENTRADA
    let tab = document.getElementById('seltab') //SAIDA DO RESULTADO
    
    if (num.value.length == 0)
    /* SE O VALOR FOR IGUAL A ZERO AVISAR */
    {
        window.alert('por favor, adicione um número!')
    } else
    /* SE O VALOR NÃO FOR... */
    {
        let n = Number(num.value)
        let c = 1
        

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            tab.appendChild(item)
            item.text = (`${n} x ${c} = ${n * c}`)
        }

        /* TAMBÉM FUNCIONA COM 
        WHILE (C <= 10) {
        LET ITEM = DOCUMENT.CREATEELEMENT('')
        TAB.APPENDCHILD(ELEMENTOFILHO)
        ITEM.TEXT = RESULTADO A AMOSTRA
        }
        */
    }
}