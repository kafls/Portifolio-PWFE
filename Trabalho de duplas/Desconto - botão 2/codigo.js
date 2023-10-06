var preco = document.getElementById("preco")
var aniversario = document.getElementById("aniversario")
var data = new Date()
// var answer = document.getElementById("answer")

function desconto() {
    var idade = data.getFullYear() - Number(aniversario.value)
    if (idade <= 25){
        var desconto = Number(preco.value) - (Number(preco.value) * 0.05)
        answer.innerHTML = `<p>O preço à pagar é de R$ ${desconto}</p>`
    }else if (idade <= 50){
        var desconto = Number(preco.value) - (Number(preco.value) * 0.1)
        answer.innerHTML = `<p>O preço à pagar é de R$ ${desconto}</p>`
    }else if (idade <= 75){
        var desconto = Number(preco.value) - (Number(preco.value) * 0.15)
        answer.innerHTML = `<p>O preço à pagar é de R$ ${desconto}</p>`
    }else{
        var desconto = Number(preco.value) - (Number(preco.value) * 0.20)
        answer.innerHTML = `<p>O preço à pagar é de R$ ${desconto}</p>`
    }

} 