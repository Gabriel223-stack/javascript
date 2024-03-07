function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        // BOM DIA!!!
        img.src = 'manha.png'
        window.document.body.style.background = '#E7D1A7'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!!
        img.src = 'tarde.png'
        window.document.body.style.background = '#D98673'
    } else {
        // Boa Noite!!
        img.src = 'noite.png'
        window.document.body.style.background = '#020659'
    }

}