function convertirSenalesAString(senales) {
    let cuadrantes = convertirSenales(senales);
    return cuadrantes.join(' ');
}

let senales = [100, 200, 50, 330, 250, 180, 190, 200, 150, 90, 165, 240, 20, 340];
let cuadrantes = convertirSenalesAString(senales);
console.log(cuadrantes);