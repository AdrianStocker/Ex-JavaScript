let valor1 = document.querySelector("#vlr1");
let valor2 = document.querySelector("#vlr2");
let btCalcular = document.querySelector("#btCalcular");


function retornaMaior(){
    
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);

    let max = Math.max(vlr1, vlr2);

    alert("O maior e o numero " + max );

}
 
btCalcular.onclick = function(){

    retornaMaior();

}