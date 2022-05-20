document.getElementById("cifrar").addEventListener("click", code);
document.getElementById("decifrar").addEventListener("click", decode);
document.getElementById("limpar").addEventListener("click", limpar);

function cifrar(string) {
     
    for (let i = 0; i < string.length; i++) {
      newText = string.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    }
    return newText;
}

function code() {
  const string = document.getElementById("texto").value;
  const result = cifrar(string);

  document.getElementById("result").innerHTML =
  ("<textarea cols=40 rows=30>" + result + "</textarea>");
}

function decifrar(string) {
   for (let i = 0; i < string.length; i++) {
    newText = string.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
 }
  return newText;
}

function decode() {
  const string = document.getElementById("texto").value;
  const result = decifrar(string);

  document.getElementById("result").innerHTML =
    ("<textarea cols=40 rows=30>" + result + "</textarea><br>");
}

function limpar() {
  location.reload();
}
