var c, n, n1, n2, tam;
n = Number.getElementById(("Escolha a sua Tabulada: ")).value;
n1 = Number.getElementById("Digitar valor inicial multiplicador: ").value;
n2 = Number.getElementById("Digitar valor final multiplicador: ").value;
c = 0;
tam = n2 - n1;

for (var x = 0, _pj_a = tam + 1; x < _pj_a; x += 1) {
  console.log(`${n} x ${n1 + c} = ${n * (n1 + c)}`);
  c += 1;
}