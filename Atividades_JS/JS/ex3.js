/*let nome= document.getElementById("pro");
let preco= document.getElementById("pro2");


    preco= Math.trunc(preco.value);
    let para = document.createElement(b);
    let node = document.createTextNode("o medicamento" + nome.value + "leve 2 e sai por " + preco);
    para.appendChild (node);
    var element = getElementById("pre");
    element.appendChild(para);*/

    document.getElementById("btMostrar").addEventListener("click", function() {
        let inMedicamento = document.getElementById("inMedicamento").value;
        let inPreco = document.getElementById("inPreco").value;
        
        if(isNaN(inPreco)) {
            alert("Digite um número");
            return;
        }
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent = "Promoçao do " + inMedicamento;

    document.getElementById("outPromocao").textContent = "leve 2 por apenas" + promocao.toFixed(2);




    
    })