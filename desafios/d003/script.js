function clicar() {
    var numInt = Number(window.prompt('Digite um número inteiro'))
    var res = 1
    var resSub = numInt-res
    var resAdc = numInt+res
    window.alert(`Antes de ${numInt}, temos o número ${resSub}. Depois de ${numInt}, temos o número ${resAdc}.`)
}