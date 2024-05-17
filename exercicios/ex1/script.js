let valor1 = document.querySelector("#vlrPago");
let valor2 = document.querySelector("#preco");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function somarValores(){
    let vlr1 = Number(valor1.value);    
    let  vlr2 = Number(valor2.value);
    let resultado = vlr1 - vlr2;
    h3Resultado.textContent = String(resultado);
}

btCalcular.onclick = function(){
    somarValores();
}