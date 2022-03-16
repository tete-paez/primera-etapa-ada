// Funciones nativas
// Ejercicios

//************************************************************ *//
//************************************************************ *//

// tienenMismaLongitud(a, b)
// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

// tienenMismaLongitud('javascript', 'java') // false
// tienenMismaLongitud('manzana', 'cerveza') // true

// let a = prompt('ingrese una palabra');
// let b = prompt('ingrese otra palabra');

// function tienenMismaLongitud(a,b) {
//     a.length === b.length;
//     //return true
//     document.write(`true`)
// }
// tienenMismaLongitud(a,b);

//************************************************************ *//
//OTRA OPCION CON IF?
//************************************************************ *//

// let a = prompt('ingrese una palabra');
// let b = prompt('ingrese otra palabra');

// function tienenMismaLongitud(a,b) {
//     if (a.length === b.length) {
//         //return true
//         document.write(`true`)
//     }else{
//         document.write(`false`)
//     };
// }
// tienenMismaLongitud(a,b);

//************************************************************ *//
//************************************************************ *//

// esUltimoCaracter(palabra, caracter)
// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

// esUltimoCaracter('lovelace', 'e') // true
// esUltimoCaracter('lovelace', 'f') // false

// let palabra = prompt('ingrese una palabra');
// let caracter = prompt('ingrese un caracter');

// function esUltimoCaracter(palabra, caracter){
//     palabra.slice(-1)===caracter;
//     return true
//     //document.write(`true`)
// }

//************************************************************ *//
//OTRA OPCION CON IF?
//************************************************************ *//

// let palabra = prompt('ingrese una palabra');
// let caracter = prompt('ingrese un caracter');

// function esUltimoCaracter(palabra, caracter){
//     if (palabra.slice(-1)===caracter){
//         document.write(`true`)
//     } else {
//         document.write(`false`)
//     }
// }
// esUltimoCaracter(palabra, caracter);

//************************************************************ *//
//************************************************************ *//

// esContraseniaValida(contrasenia)
// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

// esValida('contraseniaMuySegura') // true
// esValida('abc123') // false

// let contraseña = prompt('ingrese una contraseña');

// function esValida(string){
//     if (contraseña.length >= 8) {
//         document.write('true')
//     } else {
//         document.write('false')
//     }
// }
// esValida();

//************************************************************ *//
//************************************************************ *//

// sonIguales(a, b)
// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

// sonIguales('javascript', 'JavaScript') // true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false

// EN EL MUMUKI LO HACEN CON EL METODO toLoweCase PORQUE LES SUGIERE LAS RESPUESTAS
// let a = prompt('ingrese una palabra');
// let b = prompt('ingrese otra palabra');

// function sonIguales(a,b){
//     if (a===b) {
//         document.write('true')
//     } else {
//         document.write('false')
//     }
// }
// sonIguales(a,b);

//************************************************************ *//
//************************************************************ *//


// contarPalabras(str)
// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

// contarPalabras('javascript') // 1
// contarPalabras('ada lovelace') // 2
// contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14

// let string = prompt('ingrese un string');

// function contarPalabras(str){
//     ((string.split(' ')).length)
// };
// contarPalabras();

//************************************************************ *//
// 26-10
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS
// HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS HASTA ACA LLEGAMOS

//************************************************************ *//

// burlarse(str)
// Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// burlarse('programar es dificil') // 'prigimir is dificil'
// esFraccionMayorAUno(fraccion)
// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

// esFraccionMayorAUno('1/2') // false
// esFraccionMayorAUno('2/2') // false
// esFraccionMayorAUno('4/2') // true
// capitalizar(str)
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

// capitalizar('lovelace') // 'Lovelace'
// capitalizar('había una vez...') // 'Había una vez...'
// aHackerSpeak(str)
// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0
// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'
// obtenerPrimeraOracion(str)
// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string

// obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
// obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'
// ocultarContrasenia(contrasenia)
// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

// ocultarContrasenia(123456) // '******'
// ocultarContrasenia(111222333) // '*********'
// espaciarCaracteres(str)
// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

// espaciarCaracteres('javascript') // 'j a v a s c r i p t'
// espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'
// removerVocales(str)
// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todas sus vocales removidas

// removerVocales('javascript') // 'jvscrpt'
// removerVocales('ada lovelace') // 'd lvlc'
// obtenerExtension(archivo)
// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

// obtenerExtension('imagen.png') // 'png'
// obtenerExtension('index.html') // 'html'
// obtenerExtension('notas.txt') // 'txt'
// esPuenteSeguro(puente)
// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

// esPuenteSeguro('### ##') // false
// esPuenteSeguro('##### ####') // false
// esPuenteSeguro('########') // true
// obtenerSubreddit(url)
// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

// obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
// obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 
// convertirEnAcronimo(str)
// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto

// convertirEnAcronimo('afip') // 'A.F.I.P.'
// convertirEnAcronimo('nasa') // 'N.A.S.A.'
// esAnioNuevo(fecha)
// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es

// esAnioNuevo('03/05/2015') // false
// esAnioNuevo('22/01/1987') // false
// esAnioNuevo('01/01/2020') // true
// aprueba(nota)
// Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo

// aprueba(1) // false
// aprueba(5.4) // false
// aprueba(5.5) // true
// aprueba(5.6) // true
// aprueba(8) // true
// obtenerDuracionEnSegundos(duracion)
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642