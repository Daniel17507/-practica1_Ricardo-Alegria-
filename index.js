function getIMC(){
  var peso = parseFloat(documento. getElementById('peso').valor);
  var altura = parseFloat(documento. getElementById('altura').valor);
  var imc= peso / (altura *altura);
  documento.getElementById("imc"). innerHTML=imc;
}
