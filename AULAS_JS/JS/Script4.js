/*function myFunction(){
    alert('olá');
}
var myVar = setInterval(myTimer, 1000);

function myTimer(){
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function mostrarHora(){
    var d = new Date();
    document.body.innerHTML = "Hora " + d.getHours() + "Minuto " + d.getMinutes() + "Segundo " + d.getSeconds() + d.toLocaleTimeString();

}
mostrarHora();
 
function Hora(){
    const tempo = new Date();
    const hora = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`${hora} : ${min} : ${seg}`);
    document.body.innerHTML = `HORA ${hora} : ${min} : ${seg}`;
    setInterval(Hora, 1000);
}
Hora();
*/
function myFunction(){
    document.body.style.backgroundImage ="url(IMG/img1.jpg)";
}