let valor1 = document.querySelector("#vlr1");
let valor2 = document.querySelector("#vlr2");
let valor3 = document.querySelector("#vlr3");
let valor4 = document.querySelector("#vlr4");
let btCalcular = document.querySelector("#btCalcular");


function retornaMenor(){
    
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);
    let vlr3 = Number(valor3.value);
    let vlr4 = Number(valor4.value);

    let min = Math.min(vlr1, vlr2, vlr3, vlr4);

    alert("O menor e o numero " + min );

}
 
btCalcular.onclick = function(){

    retornaMenor();

}