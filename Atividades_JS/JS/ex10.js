function myFunction(){
    var numero = parseInt(document.getElementById("numero").value); //prga o numero e trasforma em inteiro (parseInt)
    var tabuada=''; //recebe a tabuada, inicialmente é nula
    var resultado = document.getElementById("resultado"); //exibe a tabuada

    for(var count=1; count<=10 ; count++){ //Exibe o número de vezes em que a chamada count em particular foi invocada.
        tabuada += numero+" x "+count+" = "+ numero*count+"<br/>"; //tabuada += nova_string
        resultado.innerHTML = tabuada; //mostrar o resultado da tabuada
    }
    
   
   
 
}