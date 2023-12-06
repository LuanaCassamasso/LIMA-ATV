function categorizarAlunos(){
    var nomeAtleta = document.getElementById("nomeAtleta").value;
    var idade = parseInt(document.getElementById("idade").value);
    var resultado = document.getElementById("resultado");

    if(idade <= 12){
        resultado.innerHTML = nomeAtleta + "<br>" + "Categoria: Infantil";
    }else if(idade >= 13 && idade <= 18){
        resultado.innerHTML = nomeAtleta + "<br>" + "Categoria: Juvenil";
    }else if(idade  >=18){
        resultado.innerHTML = nomeAtleta + "<br>" + "Categoria: Adulto";
    }
}
/*function retornarTracos(nomeAtleta){
    return nomeAtleta.replace (/[A-Za-z]/g , "-");*/

document.getElementById("nomeAtleta").addEventListener("click", function(){
    var atleta = document.getElementById("atleta").value;
    return nomeAtleta.replace (/[A-Za-z]/g , "-");
})