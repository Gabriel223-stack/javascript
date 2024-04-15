let res = document.getElementById('saida')

function reajuste() {
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let totalBonus = (porcentagem * salario) / 100
    let totalSalario = totalBonus + salario

    res.innerHTML = ''

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2><br>`
    
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p><br>`
    
    res.innerHTML += `<p>Com um aumento de ${porcentagem.toLocaleString('pt-BR')}%, o salário vai aumentar ${totalBonus.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no próximo mês.</p><br>`
    
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${totalSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
    
}

