function palindromo() {
    // criar vetor de digitos
    let numero = Number(document.getElementById("n2").value);
    let digitos = [];
    while (numero > 0) {
        digitos.push(numero % 10);
        numero = Math.trunc(numero / 10);
    }
    // criar um novo vetor invertido
    let digitosInvertidos = [...digitos];
    digitosInvertidos.reverse();
    // comparar os dois vetores
    return digitos.every((n, index) => n === digitosInvertidos[index]);
    if() {

    }
} 

