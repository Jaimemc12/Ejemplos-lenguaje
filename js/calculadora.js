function escribir(valor){
    
    let resultado = document.getElementById("resultado");
    if(resultado.value == "0"){
        resultado.value = valor;
    }
    else{
        resultado.value = resultado.value +valor;
    }   

}

function borrar(valor){
    let resultado = document.getElementById("resultado");
    resultado.value = "0";
}

function calcular(){
    let resultado = document.getElementById("resultado");
    resultado.value = eval(resultado.value);
}