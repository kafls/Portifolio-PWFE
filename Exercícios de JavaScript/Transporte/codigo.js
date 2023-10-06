var n1 = document.getElementById("funcionarios")
var n2 = document.getElementById("dias")

function calculo(){

    if(Number(funcionarios.value)>0 && Number(funcionarios.value)<=49){
        custo = Number(funcionarios.value) * Number(dias.value) * 4.50
    }
    else if(Number(funcionarios.value)>49 && Number(funcionarios.value)<=99){
        custo = Number(funcionarios.value) * Number(dias.value) * 4.10 
    }
    else if(Number(funcionarios.value)>99 && Number(funcionarios.value)<=149){
        custo = Number(funcionarios.value) * Number(dias.value) * 3.80
    }
    else{
        custo = Number(funcionarios.value) * Number(dias.value) * 3.60
    }
    resp.innerText = `O custo mensal é de R$ ${custo}`
}