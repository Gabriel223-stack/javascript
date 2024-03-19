function clicar() {
    var pro = String(window.prompt('Que produto você está comprando?'))
    var val = Number(window.prompt(`Quanto custa ${pro} que você está comprando?`))
    var pag = Number(window.prompt(`Qual foi o valor que você deu para pagar ${pro}?`))
    var res = pag-val
    window.alert(`Você comprou ${pro} que custou ${val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. \nDeu ${pag.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${res.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} de troco. \nVolte sempre!`)
}