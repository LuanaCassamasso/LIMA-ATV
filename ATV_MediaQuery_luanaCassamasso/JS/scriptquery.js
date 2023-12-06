var num = document.getElementById("numero").value;
num = 1;
document.getElementById("numero").innerHTML = 1;
function add(){
    num += 1;
    document.getElementById("numero").innerHTML = num;
}
function sub(){
    num -= 1;
    document.getElementById("numero").innerHTML= num;
}
