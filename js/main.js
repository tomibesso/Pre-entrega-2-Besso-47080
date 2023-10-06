// crear una funcion para calcular valor del riego

let valorMetroCuadrado = 500;
let manoDeObra = 1.25;
let riegos = []; // almacena varios valores de riegos

// objeto que almacene los datos de los riegos
function Riego(largo, ancho) {
    this.largo = largo;
    this.ancho = ancho;
    this.area = largo * ancho;
}

function calcularValorRiego () {

    let continuar = true;
    
    while (continuar) {
        let largoTerreno = parseInt(prompt("Ingrese el largo del terreno en metros:"));
        let anchoTerreno = parseInt(prompt("Ingrese el ancho del terreno en metros:"));

        let riego = new Riego(largoTerreno, anchoTerreno);

        let valorRiego = (riego.area + valorMetroCuadrado) * manoDeObra;

        riegos.push(valorRiego); // agrega el valor de cada riego al arreglo "riegos"

        alert("El valor del riego es de " + valorRiego + " Ars. Este es un valor aproximado del total del trabajo incluyendo insumos y mano de obra.");

        let respuesta = prompt("Desea cotizar el valor de otro riego? Indique 'S' o 'N'.");

        if (respuesta !== "S") {
            continuar = false;
            let respuestaCuotas = prompt("Desea averiguar el costo en cuotas? Indique 'S' o 'N'.");
            if (respuestaCuotas == "S") {
                let cantCuotas = parseInt(prompt("Indique la cantidad de cuotas disponibles (3, 6, 9, 12)"));
                switch (cantCuotas) {
                    case 3: 
                        alert("El valor de cada cuota es de " + (valorRiego/3) + " Ars.");
                        break;                
                    case 6: 
                        alert("El valor de cada cuota es de " + (valorRiego/6) + " Ars.");
                        break;                
                    case 9: 
                        alert("El valor de cada cuota es de " + (valorRiego/9) + " Ars.");
                        break;                
                    case 12: 
                        alert("El valor de cada cuota es de " + (valorRiego/12) + " Ars.");
                        break;
                    default:
                        alert("Indique un numero de cuotas disponibles (3, 6, 9, 12).");
                }
            } 
        }
    }

    console.log(riegos);
}

calcularValorRiego();


// crear funcion para cuotas