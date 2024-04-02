let num = [5, 8, 2, 9, 3]
num.push(7) // ACRESCENTA MAIS UM ELEMENTO NA POSIÇÃO DESEJAVEL
num.length // CUMPRIMENTO
num.sort() // ORGANIZA
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5) //PROCURA O ELEMENTO 4 DENTRO DA CHAVES 
console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}