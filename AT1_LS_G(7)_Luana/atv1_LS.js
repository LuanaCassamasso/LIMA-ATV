
//nome = document.getElementById('nomeAluno').value;
//media = document.getElementById('verMedia').value;
/*

document.getElementById("Mostrar").addEventListener("click", function(){ //mostrar o id, pegar o elemento que tem o id   //
    var nome= document.getElementById("nomeAluno").value; //variavel nome do aluno
    /*var nota1= parseFloat(document.getElementById("n1").value); //variavel nota 1
    var nota2=parseFloat(document.getElementById("n2").value); //variavel nota 2  //parsefloat conteudo que digitar ser numero 
     media =  (nota1 + nota2) /2; //variavel media somei nota 1 com nota 2 e depois dividi por dois 
    
    if (media >= 7){ //se a nota for maior ou igual a sete ele esta na media se formenor não esta 
    document.getElementById("texto").textContent = " o aluno(a) " +  nome + " foi " + " APROVADO!!!! " + " a média é: " + media; //nome do auluno se for maior ou igual que 7 ele está aprovado
    }else{ //se nao
        document.getElementById("texto").textContent = "o aluno(a) " + nome + " foi " + " REPROVADO!!!! " + " a média é: " + media; //ele ficou com a media menort que 7 ou seja reprovado 
    }
    }) //
    //LOCALSTORAGE
*/
function adicionarAlunos(){
    //const nome = document.getElementById("nome").value;
    //const media = document.getAnimations("media").value;
    document.getElementById("verMedia").addEventListener("click", function(){ 
    var nome= document.getElementById("nomeAluno").value; 
    var nota1= parseFloat(document.getElementById("n1").value);
    var nota2=parseFloat(document.getElementById("n2").value);
    media =  (nota1 + nota2) /2; 
    console.log(media);
    
    if (media >= 7){
        document.getElementById("texto").textContent = " o aluno(a) " +  nome + " foi " + " APROVADO!!!! " + " a média é: " + media; 
        }else{ 
            document.getElementById("texto").textContent = "o aluno(a) " + nome + " foi " + " REPROVADO!!!! " + " a média é: " + media; //ele ficou com a media menort que 7 ou seja reprovado 
    }//fim if
         
    })//fim addEvent
}//fim funcao


/*
  if(nome && media){
  localStorage.setItem(nome, media);
 }
*/



function mostrarAlunos(){
    const nome = document.getElementById("nome").value;
    localStorage.getItem(nome);
    console.log(nome);
    const media = document.getElementById("media").value;
    localStorage.getItem(media);
    console.log(media);
}//fim mostrar

/*
if (media){
    document.getElementById("resultado").textContent = `A média é "${media}": ${nome}`;
}else {
    document.getElementById("resultado").textContent = `O nome é "${nome}"`;

}
*/



/*
function salvarListaAlunos(){
    return JSON.parse((localStorage.getItem('aluno'))) || [];

}
function salvarMediaAlunos(media){
    localStorage.setItem('aluno' , JSON.stringify(media));
}
let salvarListaAluno = salvarMediaAlunos();
 

function adicionarAlunos(){
        console.log(nome);
        console.log(media); 
        if(nome && media){
        listaAlunos.push({nome, media});
        salvarListaAlunos(salvarListaAluno);
        salvarMediaAlunos();
        limparCampos();
    }
}
function mostrarLista(){
    const lista = document.getElementById("listaAlunos");
    lista.innerHTML = '';
    listaAlunos.forEach((nome, media) => {
    let li = document.createElement('li');
    li.textContent = `${aluno.aluno} - R$
    ${aluno.nome.toFixed(2)}`;

   })}
*/
    
    

