var km = document.getElementById("distancia")
var answer = document.getElementById("answer")

function preco() {
    if (Number(km.value) == 0)
        answer.innerHTML  = `<p>Valor INVÁLIDO!</p>`
    else 
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(km.value) * 5) + 1).toFixed(2)}</p>`
}