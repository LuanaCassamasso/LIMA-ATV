var clubes = [];   //vetor parar armazenar os nomes 
document.getElementById("Adicionar").addEventListener("click", function(){ //pegar o id adicionar clube, quando clicar adicionar o nome entra na lista 
var nomeClube = document.getElementById("clube").value; //criei uma variavel nome do clube e peguei o id clube

if(nomeClube!=""){  //serve para o input nao ficar vazio
    clubes.push(nomeClube); // serve parar pegar os nomes armazenado no vetor (push)
    document.getElementById("clube").value = ""; //ele limpa o campo
}
})
document.getElementById("litClube").addEventListener("click", function(){
    var lista = document.getElementById("ll");    //pega o id da lista   
    lista.innerHTML = "";    ///limpa o conteudo da lista  //serve para  nao repetir os nomes de novo
    clubes.forEach((limpaVet) => { //limpa o vetor 
        var Item = document.createElement("li"); //cria um elemento //li serve para bolinha
        Item.textContent = limpaVet; //text content permite inserir texto simples, conteúdo de texto de um nó
        lista.appendChild(Item); //adiciona cada clube como um elemento na lista HTML
    }) 
})
    document.getElementById("montTab").addEventListener("click", function(){
               var j1 = clubes[0]; //variavel jogo 1, recebe variavel clube com o vetor 0
               var j2 = clubes[clubes.length -1]; //length -1 traz o ultimo elemento do array 
               var j3 = clubes[1];
               var j4 = clubes[clubes.length -2];//length -2 traz o ultimo elemento do array 
               var j5 = clubes [2];
               var j6 = clubes[clubes.length -3];//length -3 traz o ultimo elemento do array 
               document.getElementById("jogos").innerHTML = j1 + "  " + "X" + " " + j2 + " " + j3 + " " + "X" + " " + j4 + " " + j5 + " " + "X" + " " + j6;

    

})
