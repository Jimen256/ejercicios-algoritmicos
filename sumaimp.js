function sumaImpares(numero){
    let suma = 0;

    for(let i=1; i<=numero; i+=2){
        suma +=i
    }
    return suma;
}

console.log(sumaImpares(5))
console.log(sumaImpares(9))
console.log(sumaImpares(15))

