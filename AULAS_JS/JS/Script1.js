/* var pessoas = ["Maria", "Jose", "Carlos", "Ana"];
var objetos = ["Colher", "Garfo"];
var frutas = ["Uva", "Maça","Abacaxi"];
pessoas[0];
pessoas.length;
objetos[objetos.length] = "Faca";
frutas.indexOf("Uva");

document.write(pessoas + "<br>" + pessoas.length + "<br>");
document.write(objetos + "<br>");
document.write(frutas + "<br>");

var comida = ["Lasanha","Macarrao","Brigadeiro","Pipoca","Sorvete","Chocolate","Carne "];
comida[0];
comida.length;
document.write(comida + "<br>" + comida[0]+ "<br>" + comida.length + "<br>"); */
//atividade2
/*var d = new Date("October 13, 2014 11:13:00");
document.getElementById("D1").innerHTML= d;

d = new Date(0);
document.getElementById("D2").innerHTML = d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML= d;

var d = new Date(2014,7,20);
document.getElementById("D4").innerHTML= d;
//
var d = new Date();
document.getElementById("D5").innerHTML= d.toString();


d = new Date();
document.write("<br>" + d.toUTCString());
document.write("<br>" + d.toDateString());
document.write("<br>" + d.toLocaleDateString());
document.write("<br>" + d.toLocaleTimeString('pt-PT',{hour12: false}));*/

/*var hoje, prazo;
hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023,10,28);
var dia = ["Domingo", "Segunda", "Terça","Quarta","Quinta","Sexta","Sábado"];

document.write("<p> Hoje é:" + dia[hoje.getDay()] + "," + hoje.getDate() + "/" + (hoje.getMonth()) + "/" + hoje.getFullYear() + "</p>");

document.write("<p> O prazo é:" + dia[prazo.getDay()] + "," + prazo.getDate() + "/" + (prazo.getMonth()) + "/" + prazo.getFullYear() + "</p>");
*/
//atividade3
/*try {
     var x;
      if(x == "") throw "vazio";
      if(isNaN(x)) throw " nao é um numero";
      if(x == 10) throw x;
      console.log(x);
      document.write(x);
}catch(err){
console.log("Input is " + err);
document.write("Input is" + err);
}*/

/*try{
    adddlert("ERRO!!");
}
catch(err){
    document.write = err.message;

}*/
//atividade4
/*var dividendo = 10;
var divisor = 2;

try{
    if(divisor ==0){
        throw new Error("Erro:Divisao por zero nao é permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado", resultado);
}catch(err){
    console.log(err.message);
}*/
//atividade5
/*function myFunction(){
var message, x;
message = document.getElementById("message");
message.innerHTML=" ";
x = document.getElementById("demo").value;
try{
    if(x ==" ") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x<5) throw "too low";
    if(x<10) throw "too high";

}
catch(err){
    message.innerHTML ="Input is " + err;
}
}
*/
try{
    
    addlert("ERRO!!");
}catch(err){
    document.write("<br>" + err.message);
}finally{
    document.write("<br> Será mostrado mesmo com o Erro");
}





