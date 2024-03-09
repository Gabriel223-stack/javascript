function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        // DEFININDO IMG PARA IMG E ATRIBUINDO ID DENTRO DE JAVASCRIPT
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            // DEFININDO PARAMETRO DE IDADE
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-criancam.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovemm.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adultom.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idosom.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            // DEFININDO PARAMETRO DE IDADE
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-criancaf.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovemf.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adultof.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idosaf.png')
            }
        }

        res.style.textAlign = 'center' // ADICIONANDO TEXTALIGN
        res.innerHTML = `Detectamos ${genero} e sua idade ${idade} anos.`
    
        // ADICIONA ELEMENTO
        res.appendChild(img)
    }
}