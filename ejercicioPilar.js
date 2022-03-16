/* EJERCICIO 1
Crear un programa que le pregunte al usuario si es culpable o no. Si es culpable, mostrar por consola
un mensaje que diga "Iras a la carcel" mientras que si no lo es, diga "Iras a casa". En caso de que
se ingrese una respuesta invalida, que vuelva a pedir la documentacion.
*/

// const pedirRespuesta = (mensaje) => {
//     let culpable = prompt(`${mensaje}`); // si o no

//     if (culpable == 'si') {
//         console.log('Iras a la carcel')
//     } else if (culpable == 'no') {
//         console.log('Iras a casa')
//     } else {
//         pedirRespuesta('Ingresaste una respuesta invalida, por favor responda si o no')
//     }
// }

// pedirRespuesta('Eres culpable?') // no se va a ejecutar sino hasta que se la llame porque le prompt esta dentro de la funcion

/* ------------------------------------------------------------*/
// DE PILAR 
// EJERCICIO 5
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:
// console.log(puedeAvanzar('verde'));     // true
// console.log(puedeAvanzar('amarillo'));  // false
// console.log(puedeAvanzar('rojo'));      // false
// console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'

// const puedeAvanzar = (color) => {
//     if (color == "verde") {
//         console.log('puede avanzar')
//     } else if (color == "amarillo") {
//         console.log('precaucion')
//     } else if (color == "rojo") {
//         console.log('no pasar')
//     } else {
//         console.log('Error: color de semáforo inválido')
//     }
// }
// puedeAvanzar();
/* --------------------------------------------------------------*/
// DE PILAR
// EJERCICIO 13
// Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea retirar, y mostrando 
// el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, 
// debe mostrar un mensaje alertándolo e impedir seguir retirando.
/* --------------------------------------------------------------*/
// DE PILAR
// Crear una función que al ejecutarse pida una temperatura C° y si es entre 0 y 15 que imprima en pantalla "La temperatura es: ..." en azul. Si es entre 16 y 24 que lo pinte en amarillo. Si es entre 25 y 40 que lo pinte en rojo.