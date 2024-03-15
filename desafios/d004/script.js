function clicar() {
    var pro = String(window.prompt('Que produto você está comprando?'))
    var val = Number(window.prompt(`Quanto custa ${pro} que você está comprando?`))
    var pag = Number(window.prompt(`Qual foi o valor que você deu para pagar ${pro}?`))
    var res = pag-val
    window.alert(`Você comprou ${pro} que custou R$${val}. Deu R$${pag} em dinheiro e vai receber R$${res} de troco. Volte sempre!`)
}