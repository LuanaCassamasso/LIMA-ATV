function myFunction(){
    var preco = parseInt(document.getElementById("preco").value);
    var opcoes = document.getElementById("opcoes");
    var pagamento = '';

    for(var count=1; count<=10; count++){
        pagamento += count + "x de R$: " +(preco / count).toFixed(2) + "<br>";
        opcoes.innerHTML = pagamento;

        /*
        "1x de R$:" + preco/ 1;
        "2x de R$:" + preco/2;
        "3x de R$:" + preco/3;
        "4x de R$:" + preco/4;
        "5x de R$:" + preco/5;
        "6x de R$:" + preco/6;
        "7x de R$:" + preco/7;
        "8x de R$:" + preco/8;
        "9x de R$:" + preco/9;
        "10x de R$:" + preco/10;
        */
       
    }
}