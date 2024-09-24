const vt = 6

let salario, vtdesconto

function calcular() {
    //entrada
    salario = frmVT.txtSalario.value
    //processamento
    valor = (vt * salario) / 100
    //processamento 2
    vtdesconto = salario - valor
    //saída
    frmVT.txtVT.value = `R$${valor.toFixed(2)}`
    frmVT.txtDesconto.value = `R$${vtdesconto.toFixed(2)}`
    
    return false
}