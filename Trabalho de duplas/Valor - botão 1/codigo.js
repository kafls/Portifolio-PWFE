var gramas = document.getElementById("gramas")

function preco() {
    if (Number(gramas.value) == 0){
        answer.innerHTML  = `<p>Valor INVÁLIDO!</p>`
    }else if (Number(gramas.value) <= 100){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 7).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 200){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 6.75).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 300){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 6.50).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 400){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 6.25).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 500){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 6).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 600){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 5.75).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 700){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100)* 5.50).toFixed(2)}</p>`
    }else if (Number(gramas.value) <= 800){
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(gramas.value) / 100) * 5.25).toFixed(2)}</p>`
    }else{ 
        answer.innerHTML = `<p>O preço à pagar é de R$ ${((Number(atual.value) / 100)* 5).toFixed(2)}</p>` 
    }
}