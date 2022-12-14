var tabuadaResposta = document.getElementById('tabuada')

function tabuada() {
  var algorismoTab = parseInt(document.getElementById('algorismoTab').value);
  var algorismoInicio = parseInt(document.getElementById('algorismoInicial').value);
  var algorismoFinal = parseInt(document.getElementById('algorismoFinal').value);
  var resposta = document.getElementById('resposta');
  
  for (var i=algorismoInicio; i<=algorismoFinal; i++) {
      var tabuada = i*algorismoTab;
      // resposta.innerHTML = tabuada;
      // var nodeChild = document.createElement('div')
      // nodeChild.innerHTML = `${tabuada}`
      document.getElementById('respostaConfia').innerHTML += `${tabuada} <br/>`;
    // tabuadaResposta.appendChild(nodeChild)
  }
}

function exerc2() {
  let num = String(document.getElementById('num').value);
  let numInv = ''

  for (var i = (num.length - 1); i >= 0; i--) { 
     numInv += num[i]; 
  }
  console.log(numInv);

  if (num == numInv) {
      document.write("Seu número é palíndromo");
  } else{
      document.write("Seu número não é palíndromo");
    }
}