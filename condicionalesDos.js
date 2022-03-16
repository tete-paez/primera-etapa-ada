//------------------------------------------------------------//
// Condicionales y operadores lógicos
//------------------------------------------------------------//

// Ejercicios con operadores lógicos

//------------------------------------------------------------//

// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true

// let edad = parseInt(prompt('ingrese su edad'));
// let tieneAutorización = prompt('tiene autorizacion de sus padres?');

// const puedeVerPelicula = (edad,booleano) => {
//     if (edad >= 15 || tieneAutorización == 'si' ) {
//         console.log(true);
//     } else (console.log(false))
// }
// puedeVerPelicula()

//------------------------------------------------------------//

// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false

//ME SALE PERO ME TIRA UN UNDEFINED TAMBIEN

// const estaEnRango = (valor,min,max) => {
//     if (valor >= min && valor <= max) {
//     console.log(true)
//     } else (console.log(false))
// }
// estaEnRango();

//------------------------------------------------------------//

// puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

// const puedeAvanzar = (colorSemaforo) => {
//     let color = prompt(`${colorSemaforo}`);

//     if (color == 'verde'){
//     console.log(true);
//     } else if (color == 'rojo' || color == 'amarillo' ) {
//         console.log(false)
//     } else {
//         puedeAvanzar('Ingresaste una respuesta invalida, por favor responda verde, rojo o amarillo');
//     }
// }
// puedeAvanzar('Ingresa un color del semaforo');


//------------------------------------------------------------//
// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// const esVocal = (letra) => {
//     let letter = prompt(`${letra}`);
//     if (letter ==="a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") {
//         console.log(true);
//     }else{
//         console.log(false)
//     }
// }
// esVocal('ingrese una letra')

// esVocal('a') // true
// esVocal('n') // false

//------------------------------------------------------------//

// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// esVocal('a') // false
// esVocal('n') // true

// const esConsonante = (letra) => {
//     let letter = prompt(`${letra}`);
//     if (letter ==="a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") {
//         console.log(false);
//     }else{
//         console.log(true)
//     }
// }
// esConsonante('ingrese una letra')

//------------------------------------------------------------//
// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// NO ME SALE
// NO ME SALE
// NO ME SALE
// NO ME SALE
// NO ME SALE
// NO ME SALE




// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true

// const esHoraValida = (hora) => {
//     let hs = prompt(`${hora}`);

//     if (((hs.substring(0,2))>= 00 && <= 23) && 
//     ((hs.substring(3,-1))>= 00 && <= 59)){
//         document.write('es de dia')
//     }else{
//         document.write('es de noche')
//     }
// }
// esHoraValida('ingrese una hora con el formato HH:mm');


//------------------------------------------------------------//

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true
// puedeRenovarCarnet(true, false, false)  // false
// puedeRenovarCarnet(false, true, true)   // false
// puedeRenovarCarnet(false, true, false)  // false
// puedeRenovarCarnet(false, false, true)  // false
// puedeRenovarCarnet(false, false, false) // false

// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
//     let test = prompt('has aprobado el test?');
//     let multas = prompt('tiene multas impagas?');
//     let impuestos = prompt('ha pagado sus impuestos?';
//     if (test == "si" && multas == "no" && impuestos == "si") {
//         document.write('puede renovar su carnet');
//     } else {
//         document.write('aun no puede renovar su carnet');
//     }
// }
// puedeRenovarCarnet();


//------------------------------------------------------------//

// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
//     //let asistencias = prompt('ingrese la cantidad de asistencias');
//     //let materias = prompt('ingrese la cantidad de materias aprobadas');
//     //let tesis = prompt('su tesis esta aprobada?');
//     if (asistencia>=75 && materiasAprobadas >= 50 && tesisAprobada == true) {
//         console.log('puede graduarse')
//     } else {
//         console.log('no puede graduarse aun');
//     }
// }
// puedeGraduarse();

// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false

//------------------------------------------------------------// 
//------------------------------------------------------------// 
// Ejercicios con condicionales
//------------------------------------------------------------// 
//------------------------------------------------------------// 

// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

// const esParOImpar = (numero) => {
//     if (numero % 2 === 0) {
//         return 'par';
//     } else {
//         return 'impar';
//     }
// }

//------------------------------------------------------------// 
// esPositivoONegativo(numero)
// Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'

// const esPositivoONegativo = (numero) => {
//     if (numero >0){
//         console.log('positivo');
//     } else if (numero <0) {
//         console.log('negativo')
//     }else {
//         console.log('el CERO es neutral')
//     }
// }
// esPositivoONegativo();
//------------------------------------------------------------// 

// avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

// const avanzarSemaforo = (colorActual) => {
//     if ( colorActual == 'amarillo') {
//         console.log('rojo');
//     }else if (colorActual == 'rojo') {
//         console.log('verde');
//     }else {
//         console.log('amarillo');
//     }
// }
// avanzarSemaforo();


//------------------------------------------------------------// 
// obtenerDiasMes(mes)
// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29


// Tienen 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre. Tienen 30 días: Abril, junio, septiembre y noviembre. 
// Tienen 28 días: Febrero.
//------------------------------------------------------------//
//------------------------------------------------------------//
//no me salio
//------------------------------------------------------------//
//------------------------------------------------------------//

// const obtenerDiasMes = (mes) => {
//     if (mes == 'enero'  ||  'marzo' ||  'mayo' ||  'julio' ||  'agosto' ||  'octubre'  ||  'diciembre' ){
//         console.log(' tiene 31 dias' )
//     } else if (mes == 'abril'  ||  'junio' ||  'septiembre' ||  'noviembre') {
//         console.log(' tiene 30 dias' )
//     } else {
//         console.log(' tiene 28 dias' )
//     }
//     }
// obtenerDiasMes();







//------------------------------------------------------------// 
// obtenerGeneracion(anioNacimiento)
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010

// const obtenerGeneracion = (anioNacimiento) => {
//     if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
//         console.log('Baby boomer')
//     } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
//         console.log('Generación X')
//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
//         console.log('Millennials')
//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
//         console.log('Generación Z')
//     } else {
//         console.log('aun no tiene nombre')
//     }
// }
// obtenerGeneracion();


//------------------------------------------------------------//
// obtenerSensacion(temperatura)
// Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// Temperatura	Mensaje
// Menor a 0°	¡Está helando!
// Mayor o igual a 0° y menor a 15°	¡Hace frío!
// Mayor o igual a 15° y menor a 25°	Está lindo
// Mayor o igual a entre 25° y menor a 30°	Hace calor
// Mayor o igual de 30°	¡Hace mucho calor!

// const obtenerSensacion = (temperatura) => {
//     if (temperatura < 0){//Menor a 0°	¡Está helando!
//         console.log('¡Está helando!')
//     } else  if (temperatura >= 0 && temperatura < 15) {//Mayor o igual a 0° y menor a 15°	¡Hace frío!
//         console.log('¡Hace frío!')
//     } else  if (temperatura >= 15 && temperatura < 25) { //Mayor o igual a 15° y menor a 25°	Está lindo
//         console.log('Está lindo')
//     } else  if (temperatura >= 25 && temperatura < 30) { //Mayor o igual a entre 25° y menor a 30°	Hace calor
//         console.log('Hace calor')    
//     } else //if (temperatura >= 30); 
//         {
//         console.log('¡Hace mucho calor!') 
//     }
// }
// obtenerSensacion();

//------------------------------------------------------------//
//------------------------------------------------------------//

// obtenerNota(puntaje)
// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Puntaje	Nota
// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido
// obtenerNota(7)    // "Bueno"
// obtenerNota(9.6)  // "Excelente"
// obtenerNota(12)   // "Puntaje inválido"

//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//     ME DA RARO NO ENTIENDO LOS INDEFINES QUE ME TIRA DEBAJO DE LOS RESULTADOS X CONSOLA
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//

// const obtenerNota = (puntaje) => {
//     if (puntaje < 6 ){ // Menor a 6	Desaprobado
//         console.log('despaprobado')
//     } else if (puntaje => 6 && puntaje < 7 ){// Mayor o igual a 6 y menor a 7	Regular
//         console.log('regular')
//     } else if (puntaje => 7 && puntaje < 8 ){//Mayor o igual a 7 y menor a 8	Bueno
//         console.log('bueno')
//     } else if (puntaje => 8 && puntaje < 10 ){// Mayor o igual a entre 8 y menor a 10	Muy bueno
//         console.log('muy bueno')
//     } else if (puntaje == 10 ){
//         console.log('excelente!')
//     } else {
//         console.log('invalido')
//     }
// }
// obtenerNota();




//------------------------------------------------------------//
//------------------------------------------------------------//


// jugarPiedraPapelTijera(a, b)
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!

// const jugarPiedraPapelTijera = (a,b) => {
//     if (a==='tijera'&& b==='piedra'|| a==='piedra'&& b==='tijera') {
//         console.log('¡Ganó piedra!')
//       } else if (a==='papel'&& b==='piedra' || a==='piedra'&& b==='papel') {
//         console.log('¡Ganó papel!')
//       } else if (a==='papel'&& b==='tijera'|| a==='tijera'&& b==='papel') {
//         console.log('¡Ganó tijera!')
//       } else {
//         console.log('¡Empate!')
//       }
//     }
//     jugarPiedraPapelTijera();