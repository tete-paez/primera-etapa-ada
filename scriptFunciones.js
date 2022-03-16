//------------------------------------------------------------------//
// Funciones
//------------------------------------------------------------------//

// Ejercicios

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// sumar(a, b)
// Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// sumar(2, 3) // 5
// sumar(1.2, 3.4) // 4.6
// sumar(3, -5) // -2
// restar(a, b)

// function sumar(num1,num2){
//     let suma = num1+num2
//     return suma
// }
// sumar(3,6);
// document.write('el valor de la suma es ' + sumar(3,6) +' PLINPLIN');


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

// restar(3, 2) // 1
// restar(10, 5.5) // 4.5
// restar(3, 5) // -2
// multiplicar(a, b)
// Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

// multiplicar(2, 3) // 6
// multiplicar(4, 0.5) // 2
// dividir(a, b)

// function restar (num1,num2){
//     let resto = num1-num2
//     return resto
// }
// restar(3,6);
// document.write('el valor de la resta es ' + restar(3,6) +' PLINPLIN');


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función dividir que tome como argumentos dos números y devuelva la division de ellos

// dividir(12, 3) // 4
// dividir(8, 4) // 2
// sumar(30, 6) // 5
// esPar(numero)

// function dividir (num1,num2){
//     let div = num1/num2
//     return div
// }
// dividir(60,6);
// document.write('el valor de la division es ' + dividir(60,6) +' PLINPLIN');

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// esPar(2) // true
// esPar(3) // false
// esImpar(numero)

// function esPar (num){
//     if (num%2==0){
// document.write('es par') ; 
// }   else {
//     document.write('es impar')
// }
// }
// esPar(55);

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// esImpar(2) // false
// esImpar(3) // true

// esPar(2) // true
// esPar(3) // false
// esImpar(numero)

// function esImPar (num){
    //     if (num%2==1){
        // document.write('es Impar') ; 
        // }   else {
            //     document.write('no es impar')
            // }
            // }
            // esImPar(55);
            
            
            //------------------------------------------------------------------//
            //------------------------------------------------------------------//
            
// calcularAreaTriangulo(base, altura)
// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 6) // 40
// gritar(str)

// function calcularAreaTriangulo (base,altura){
//     let area = (base*altura)/2;
//     return area
// }
// calcularAreaTriangulo(10,12);
// document.write('el area del triangulo es de ' + calcularAreaTriangulo(10,12))

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!
// obtenerNombreCompleto(nombre, apellido)

// //  CON AYUDA
// //ingreso el string
// let string = prompt('Ingrese lo que desea gritar');

// //creo funcion gritar
// function gritar(string){
//     //defino una variable que contenga el parametro y la concateno a los signos
//     let gritoElString = '¡' + string + '!';
//     return gritoElString //va a devolver el string concatenado 
// }
// //llamo a la funcion y le paso el parametro que ingresó el usuario
// document.write(gritar(string));


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
// saludar(nombre)

// let nombre = prompt('ingrese su nombre');
// let apellido = prompt('ingrese su apellido')

// function obtenerNombreCompleto(nombre,apellido){
//     let nombreCompleto = nombre + ' ' + apellido ;
//     return nombreCompleto
// }
// document.write(obtenerNombreCompleto(nombre,apellido));

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

// saludar('Ada') // 'Hola Ada, un gusto conocerte'
// saludarGritando(nombre, apellido)

// let nombre = prompt('ingrese su nombre');
// let saludo = prompt('ingrese un saludo');
// function saludar (nombre,saludo){
//     let saludando = nombre + ' ' + saludo ;
//     return saludando;
// }
// document.write(saludar(nombre,saludo));


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

// saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
// TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

// const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)
// console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!
// obtenerDatosDeCiudad(nombre, poblacion, pais)

// let saludo = prompt('ingrese un saludo');
// let nombreCompleto = prompt('ingrese su nombre completo');

// function saludarGritando(nombreCompleto,apellido){
//     let saludacion = '¡' + nombreCompleto + saludo + '!' ;
//     return saludacion;
// }
// document.write(saludarGritando(nombreCompleto,saludo));


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

// obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'


// // NO ME SALIO

// let ciudad = prompt('igrese una ciudad');
// let poblacion = prompt('ingrese su poblacion');
// let pais = prompt('ingrese su pais');

// function obtenerDatosDeCiudad(nombre,poblacion,pais) {
//     n = 'La ciudad de ' + nombre;
//     po = 'tiene una población de ' + poblacion + ' habitantes';
//     pa = 'y está ubicada en ' + pais;
//     return(n,po,pa);
// }
// document.write(obtenerDatosDeCiudad(ciudad,poblacion,pais));
//document.write('el valor de la division es ' + dividir(60,6) +' PLINPLIN');


//------------------------------------------------------------------//
//------------------------------------------------------------------//


// convertirHorasEnSegundos(horas)
// Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// convertirHorasEnSegundos(1) // 3600
// convertirHorasEnSegundos(3) // 10800
// convertirHorasEnSegundos(4.5) // 16200

// let horas;

// function convertirHorasEnSegundos(horas){
//     let hs = parseInt(prompt('ingrese una cantidad de horas'));
//     let segundos = (3600*hs);
//     return segundos;
// }
// document.write(convertirHorasEnSegundos(horas))


//------------------------------------------------------------------//
//------------------------------------------------------------------//


// calcularPerimetroRectangulo(ancho, alto)
// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

// calcularPerimetroRectangulo(3.2, 5) // 16.4
// calcularPerimetroRectangulo(10, 20) // 60

// 2 bases + 2 alturas = perimetro rectanculo
// perimetro rectagulo / 2 = perimetro triangulo

// let ancho;
// let alto;


// function calcularAreaTriangulo(ancho,alto){
    //     let width = parseInt(prompt('ingrese el ancho de un rectangulo'));
    //     let height = parseInt(prompt('ingrese el alto de un rectangulo'));
    //     let perimetroRectangulo = ((width*2)+(height*2));
    //     let perimetroTriangulo = perimetroRectangulo/2;
    //     return perimetroTriangulo;
    // }
    // document.write(calcularAreaTriangulo(ancho,alto));
    
    
    
    //------------------------------------------------------------------//
    //------------------------------------------------------------------//
    
    
    // calcularPorcentaje(numero, porcentaje)
    // Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número
    
    // calcularPorcentaje(100, 15) // 15
// calcularPorcentaje(10, 50) // 5
// calcularPorcentaje(200, 10) // 20

// calcuLO el porcentaje; (numero*porcentaje)/100

// let numero;
// let porcentaje;

// function calcularPorcentaje(numero,porcentaje){
//     let numer = parseInt(prompt('ingrese un numero'));
//     let porcentaj = parseInt(prompt('ingrese un porcentaje'));
//     let porCent = (numer*porcentaj)/100;
//     return porCent;
// }
// document.write(calcularPorcentaje(numero,porcentaje));




//------------------------------------------------------------------//
//------------------------------------------------------------------//


// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

// sumarPorcentaje(100, 15) // 115
// sumarPorcentaje(10, 50) // 15
// sumarPorcentaje(200, 10) // 220

// let numero;
// let porcentaje;

// function sumarPorcentaje(numero, porcentaje){
//     let numer = parseInt(prompt('ingrese un numero'));
//     let porcentaj = parseInt(prompt('ingrese un porcentaje'));
//     let porCent = (numer*porcentaj)/100;
//     let sumaPorcentaje = numer+porCent;
//     return sumaPorcentaje
// }
// document.write(sumarPorcentaje(numero, porcentaje));




//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

// restarPorcentaje(100, 15) // 85
// restarPorcentaje(10, 40) // 6
// restarPorcentaje(200, 10) // 180

// let numero;
// let porcentaje;

// function restarPorcentaje(numero, porcentaje){
//     let numer = parseInt(prompt('ingrese un numero'));
//     let porcentaj = parseInt(prompt('ingrese un porcentaje'));
//     let porCent = (numer*porcentaj)/100;
//     let restaPorcentaje = numer-porCent;
//     return restaPorcentaje
// }
// document.write(restarPorcentaje(numero, porcentaje));

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// calcularFPS(fps, minutos)
// FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

// calcularFPS(1, 1) // 60
// calcularFPS(10, 2) // 1200
// calcularFPS(2, 3) // 360

// let fps;
// let minutos;

// function calcularFPS(fps, minutos){
//     let cuadros = parseInt(prompt('ingrese una cantidad de cuadros por segundo'));
//     let cantMin = parseInt(prompt('ingrese una cantidad de minutos'));
//     let cantSeg = cantMin*60;
//     let cXs = cuadros*cantSeg;
//     return cXs;
// }
// document.write(calcularFPS(fps, minutos));

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// obtenerCompetencia(a, b)
// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

// let a;
// let b;

// function obtenerCompetencia(a,b){
//     let compA = prompt('ingrese el primer contrincante');
//     let compB = prompt('ingrese el segundo contrincante');
//     let vs = compA + ' vs. ' + compB;
//     return vs;
// }
// document.write(obtenerCompetencia(a,b));

// obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
// obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
// obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// generarEmail(usuario, dominio)
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

// generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

// let usuario;
// let dominio;

// function generarEmail(usuario, dominio){
//     let u = prompt('ingrese su usuario');
//     let d = prompt('ingrese su dominio');
//     let mail = u + '@' + d + '.com';
//     return mail;
// }
// document.write(generarEmail(usuario, dominio));


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// esMayorDeEdad(edad)
// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

// esMayorDeEdad(15) // false
// esMayorDeEdad(18) // true
// esMayorDeEdad(27) // true

// let edad = prompt('ingrese su edad');;

// function esMayorDeEdad(edad){
//     //let  = prompt('ingrese su edad');
//     if (edad>=18) {
//         document.write('es mayor de edad')
//     } else {
//         document.write('es menor de edad')
//     }
// }
// esMayorDeEdad(edad);


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// haceCalor(temperatura)
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario

// haceCalor(12) // false
// haceCalor(22) // true
// haceCalor(32) // true

// let temperatura;

// function haceCalor(temperatura){
//     let grados = prompt('ingrese la temperatura');
//     if (grados>=22) {
//         document.write('true')
//     }else{
//         document.write('false')
//     }
// }
// haceCalor(temperatura);

//------------------------------------------------------------------//
//------------------------------------------------------------------//
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario

// let temperatura;

// function haceFrio(temperatura){
//     let grados = prompt('ingrese la temperatura');
//     if (grados<=12) {
//         document.write('true')
//     }else{
//         document.write('false')
//     }
// }
// haceFrio(temperatura)

// haceFrio(12) // true
// haceFrio(22) // false
// haceFrio(3) // true
// haceFrio(-2) // true



//------------------------------------------------------------------//
//------------------------------------------------------------------//

// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel
// Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

// let facil;
// let normal;
// let dificil;

// function calcularPuntaje(facil, normal, dificil){
//     let faciles = parseInt(prompt('cuantos ejercicios faciles resolviste'));
//     let normales = parseInt(prompt('cuantos ejercicios normales resolviste'));
//     let dificiles = parseInt(prompt('cuantos ejercicios dificiles resolviste'));
//     let cp = (faciles*3) + (normales*5) + (dificiles*10);
//     return cp;
// }
// document.write(calcularPuntaje(facil, normal, dificil));


//------------------------------------------------------------------//
//------------------------------------------------------------------//

// aceptaDeposito(monto)
// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

// let monto;
// let deposito;

// function aceptaDeposito(monto){
//     let deposito = parseInt(prompt('ingrese un monto'));
//     if (deposito%10==0){
//         document.write('true');
//         } else {
//         document.write('false')
//     }
//     //return deposito;
// }
// aceptaDeposito(monto);

// aceptaDeposito(440) // true
// aceptaDeposito(123) // false
// aceptaDeposito(500.50) // false
// aceptaDeposito(1000) // true


// Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero.


//ejercicio en la tercer clase 25/10
// let numero;

// function numeroConDosDigitos(numero){
//     let num = parseInt(prompt('ingrese un numero'));
//     if (num>= 10) {
//         document.write('el numero ingresado tiene dos digitos')
//     }else {
//         document.write('el numero ingresado tiene un solo digito')
//     }
// }
// numeroConDosDigitos(numero);
