function PegaValor(value) {
  var dip = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = dip + value;
}
function limparAll() {
  document.getElementById("display").innerHTML = "";
}
function calc() {
  var resultado = document.getElementById("display").innerHTML;
  if (resultado) {
    document.getElementById("display").innerHTML = eval(resultado);
  } else {
    document.getElementById("display").innerHTML = "Nada...";
  }
}
function limparOne() {
  var resultado = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function raiz() {
  var resultado = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = Math.sqrt(resultado);
}
function Pot() {
  var resultado = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = Math.pow(resultado, 2);
}
