var n1 = document.getElementById("sal_bruto")
var n2 = document.getElementById("extras_normais")
var n3 = document.getElementById("extras_fds")
var resp = document.getElementById("resp")

function calculo(){
    total = ((sal_bruto.value / 200) * extras_normais.value + (extras_fds.value * (sal_bruto.value/200) * 1.5) + Number(sal_bruto.value)).toFixed(2)
    resp.innerText = `O valor do salário é R$ ${total}`
}
