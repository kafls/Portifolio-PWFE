var n1 = document.getElementById("salario")

function calculo(){

    if(Number(salario.value)>0 && Number(salario.value)<=1200){
        salario_aumento = Number(salario.value) * 1.16
    }
    else if(Number(salario.value)>1200 && Number(salario.value)<=2100){
        salario_aumento = Number(salario.value) * 1.13
    }
    else if(Number(salario.value)>2100 && Number(salario.value)<=3000){
        salario_aumento = Number(salario.value) * 1.10
    }
    else{
        salario_aumento = Number(salario.value) * 1.05
    }
    resp.innerText = `O valor do salário é R$ ${salario_aumento}`
}
