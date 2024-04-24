function contarCiclos(cuadrantes) {
    let ciclos = ['N', 'E', 'S', 'O'];
    let ciclosInversos = ['O', 'S', 'E', 'N'];
    let contador = 0;
    let indice = 0;

    for (let i = 0; i < cuadrantes.length; i++) {
        if (cuadrantes[i] === ciclos[indice] || cuadrantes[i] === ciclosInversos[indice]) {
            indice++;
            if (indice === 4) {
                contador++;
                indice = 0;
            }
        } else {
            indice = 0;
        }
    }
    return contador;
}

let cuadrantes = convertirSenalesAString(senales).split(' ');
let numCiclos = contarCiclos(cuadrantes);
console.log(numCiclos); 
