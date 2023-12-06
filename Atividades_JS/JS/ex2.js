function myFunction(){
var a;
var nome=prompt("Digite seu nome:");
if (nome!=null)
  {
  a="Nome: " + nome;
  }
  var b;
  var email=prompt("Digite seu EMAIL:");
if (email!=null)
  {
  b="Email: " + email;
   
  var para = document.createElement("li");
  var node = document.createTextNode(a + " " + b);
  para.appendChild(node);

  var element = document.getElementById("demo");
  element.appendChild(para);
  }
}

