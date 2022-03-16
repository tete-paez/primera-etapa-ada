// De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel superior: Porcentaje>=90%.
// Nivel medio: Porcentaje>=75% y <90%.
// Nivel regular: Porcentaje>=50% y <75%.
// Fuera de nivel: Porcentaje<50%.


//let cantidadTotal;
//let cantidadCorrectas;

// let cantidadTotal = parseInt(prompt('ingrese la cantidad Total de preguntas respondidas'));
// let cantidadCorrectas = parseInt(prompt('ingrese la cantidad Total de preguntas respondidas correctas'));
// let porcentaje = (cantidadCorrectas*100)/cantidadTotal;

// if (porcentaje < 50){
//     document.write('Fuera de nivel')
// } else if (porcentaje = 50 && < 75 ){
//     document.write('Nivel regular')
// }else if (porcentaje = 75 && < 90){
//     document.write('Nivel medio')
// }else {
//     document.write('Nivel superior')
// }



//-----------------------------------------------//
//       CLASE 29 - MIERCOLES 28-10
//-----------------------------------------------//
//   EJERCICIO CON PROFE Y PILAR 

// De un operario se conoce su sueldo y los años de antigüedad.
// Se pide confeccionar un programa que lea los datos de entrada e informe
// a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
// c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.


// // DECLARO HIS VARIABLES
// let sueldoActual = parseInt(prompt('Ingrese el sueldo sin puntos'));
// let aniosDeAntiguedad = parseInt(prompt('Ingrese la antigüedad'));

// // CREO UNA FUNCION QUE ME RESUELVA EL CALCULO SEGUN LOS PARAMETROS QUE LE PASO Y RETORNE EL RESULTADO
// const calcularAumento = (salario, porcentaje) => {
//     return ((porcentaje * salario) / 100) + sueldoActual;
// };

// // ESTABLEZCO MIS CONDICIONES Y EL OUTPUT UTILIZANDO MI FUNCION
// if (sueldoActual < 500 && aniosDeAntiguedad >= 10) {
//     document.write(`Se otorga aumento del 20%, su nuevo sueldo es: ` + calcularAumento(sueldoActual, 20));
// } else if (sueldoActual < 500 && aniosDeAntiguedad < 10) {
//     document.write(`Se otorga aumento del 5%, su nuevo sueldo es: ` + calcularAumento(sueldoActual, 5));
// } else {
//     document.write(`No te aumentamos, tu salario sigue siendo ${sueldoActual}`);
// }

