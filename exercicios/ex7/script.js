let valor1 = document.querySelector("#vlr1");
let btCalcular = document.querySelector("#btCalcular");

function imparPar(){

    let vlr1 = Number(valor1.value);
    let total = vlr1 / 2;

    if(vlr1 %2 == 0){
        alert("Par");
    }else{
        alert("Impar");
    }
    alert(total);

}
btCalcular.onclick = function(){

    imparPar();
}