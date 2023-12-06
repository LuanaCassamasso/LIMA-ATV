document.getElementById("Mostrar").addEventListener("click", function(){ //mostrar o id, pegar o elemento que tem o id   //
var nome= document.getElementById("nomeAluno").value; //variavel nome do aluno
var nota1= parseFloat(document.getElementById("n1").value); //variavel nota 1
var nota2=parseFloat(document.getElementById("n2").value); //variavel nota 2  //parsefloat conteudo que digitar ser numero 
var media=  (nota1 + nota2) /2; //veriavel media somei nota 1 com nota 2 e depois dividi po dois 

if (media >= 7){ //se a nota for maior ou igual a sete ele esta na media se formenor não esta 
document.getElementById("texto").textContent = " o aluno(a) " +  nome + " foi " + " APROVADO!!!! " + " a média é: " + media; //nome do auluno se for maior ou igual que 7 ele está aprovado
}else{ //se nao
    document.getElementById("texto").textContent = "o aluno(a) " + nome + " foi " + " REPROVADO!!!! " + " a média é: " + media; //ele ficou com a media menort que 7 ou seja reprovado 
}
}) //