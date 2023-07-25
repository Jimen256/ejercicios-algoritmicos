function crearCuentaRegresiva(numeroInicial){
    const cuentaRegresiva = []
    for(let i = numeroInicial; i>=0; i--){
        cuentaRegresiva.push(i)
    }
        
    return cuentaRegresiva

}
console.log(crearCuentaRegresiva(3))
