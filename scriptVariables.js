//EJEECICIO EN CLASE CON PROFE 18-10 (MI PRIMER CLASE EN VIVO)
// lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.

// let num1;
// let num2;

// let suma;
// let diferencia;
// let producto;
// let division;

// num1 = parseInt(prompt('ingrese un numero'))
// num2 = parseInt(prompt('ingrese un numero'))

// suma = num1+num2;
// diferencia = num1-num2;
// producto = num1*num2;
// division = num1/num2;



// if (num1>num2){
//     document.write(suma);
//     document.write('<br>')
//     document.write(diferencia);
// } else {
//     document.write(producto);
//     document.write('<br>')
//     document.write(division);
// }


//EJEECICIO EN CLASE CON PROFE 20-10 (MI segundaCLASE EN VIVO)
//Elaborar una funcion que reciba tres enteros y retorne el promedio.

//hecho x mi
// function promedio (medida1,medida2,medida3){
//     resultado = (medida1 + medida2 + medida3)/3
//     return resultado
// }
// promedio(1,2,3)
// document.write(promedio(1,2,3));

//hecho x una compa
// function promedio(x, y, z)  {

//     let resultado = (x + z + y)/3
//     return resultado

// }

// console.log(promedio(2,3,2))

//----------------------------------------------//
//----------------------------------------------//

// Variables, datos y operadores
// Ejercicios
// Cuando la consigna pida ingresar algo hacerlo mediante un prompt, y cuando pida mostrar un mensaje hacerlo mediante alert. Usar const, let y template strings.


//----------------------------------------------//
//----------------------------------------------//


// Saludo
// Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// let nombre;
// let apellido;

// nombre = prompt('ingrese su nombre');
// apellido = prompt('ingrese su apellido');

// document.write(`hola ${nombre} ${apellido} bienvenida a Ada`);


//----------------------------------------------//
//----------------------------------------------//


// Heladería
// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// let gusto1;
// let gusto2;
// let gusto3;

// gusto1 = prompt('ingrese un gusto de helado');
// gusto2 = prompt('ingrese el segundo gusto de helado');
// gusto3 = prompt('ingrese el tercer gusto de helado');

// document.write(`Aquí tiene su helado de ${gusto1} , ${gusto2} y ${gusto3} que lo disfrute!`);


//----------------------------------------------//
//----------------------------------------------//


// Datos personales
// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

// let nombre;
// let apellido;
// let edad;
// let nacionalidad;
// let documento;

// nombre = prompt('ingrese su nombre');
// apellido = prompt('ingrese su apellido');
// edad = prompt('ingrese su edad');
// nacionalidad = prompt('ingrese su nacionalidad');
// documento = prompt('ingrese su numero de documento');

// document.write(`Nuevo usuario agregado al sistema: ${nombre} ${apellido} su es edad es ${edad} es ${nacionalidad} y su numero de documento es ${documento}`);


//----------------------------------------------//
//----------------------------------------------//


// Lista de reproducción
// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

// let nombrePL;
// let cancion1;
// let cancion2;
// let cancion3;

// nombrePL = prompt('ingrese el titulo de la playlist que desea escuchar');
// cancion1 = prompt('ingrese el titulo de la primer cancion que desea escuchar');
// cancion2 = prompt('ingrese el titulo de la segunda cancion que desea escuchar');
// cancion3 = prompt('ingrese el titulo de la tercer cancion que desea escuchar');

// document.write(`Se ha creado la playlist ${nombrePL} con las canciones ${cancion1}, ${cancion2} y ${cancion3}.
// `);


//----------------------------------------------//
//----------------------------------------------//


// Dirección completa
// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

// let calle;
// let numero;
// let departamento;
// let cp;
// let ciudad;
// let pais;

// calle = prompt('ingrese la calle');
// numero = prompt('ingrese su numero');
// departamento = prompt('ingrese el depto');
// cp = prompt('ingrese su CP');
// ciudad = prompt('ingrese su ciudad');
// pais = prompt('ingrese su pais');

// document.write(`La dirección que ha ingresado es: ${calle}, ${numero} depto ${departamento} codigo postal ${cp} de la ciudad de ${ciudad}, ${pais}`);


//----------------------------------------------//
//----------------------------------------------//

// Años perro
// Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// let edad;
// let edadperro;

// edad = prompt('ingrese una edad');
// edadPerro = parseInt(edad*7);

// document.write(`tu edad en edad perro es ${edadPerro}`);


//----------------------------------------------//
//----------------------------------------------//


// Minutos a segundos
// Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

// let min;
// let segXmin;

// min = prompt('ingrese la cantidad de min que desea conocer la cantidad de segundos');
// segXmin = parseInt(min*60);

// document.write(`${min} minutos equivale a ${segXmin} segundos`)


//----------------------------------------------//
//----------------------------------------------//


// Días a segundos
// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

// let dias;
// let diasAsegundos;

// dias = prompt('ingrese la cantidad de dias que quiere saber la cantidad de segundos que contiene');
// diasAsegundos = parseInt(dias*86400);

// document.write(`la cantidad de segundos que tienen ${dias} dias es ${diasAsegundos} segundos`)


//----------------------------------------------//
//----------------------------------------------//


// Kilómetros a millas
// Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

// let km;
// let kmAmillas;

// km = prompt('ingrese la cantidad de km que desea conocer la cantidad de millas');
// kmAmillas = parseFloat(km*0.621371);

// document.write(`${km} kilometros equivale a ${kmAmillas} millas`)


//----------------------------------------------//
//----------------------------------------------//

// Área de un triangulo
// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

// let base;
// let altura;
// let area;

// base = prompt('ingrese la base de un triangulo');
// altura = prompt('ingrese la altura de un triangulo');
// area = ((base*altura)/2);

// document.write(`el area de su triangulo es de ${area}`);


//----------------------------------------------//
//----------------------------------------------//

// Perímetro de un rectángulo
// Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

// let altura;
// let ancho;
// let perimetro;

// altura = prompt('ingresar el valor de la altura del rectangulo en centimetros');
// ancho = prompt('ingresar el valor del ancho del rectangulo en centimetros');
// perimetro = ((altura*2)+(ancho*2));

// document.write(`el perimetro del rectangulo que diseñaste es de ${perimetro} centrimetros`)



//----------------------------------------------//
//----------------------------------------------//

// Porcentaje
// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.


// let numero;
// let porcentajeQueDeseaObtener;
// let porcentaje;

// numero = prompt('ingrese un numero');
// porcentajeQueDeseaObtener = prompt('ingrese el porcentaje que desea obtener');
// porcentaje = ((numero*porcentajeQueDeseaObtener)/100);

// document.write(`el ${porcentajeQueDeseaObtener} % de ${numero} es ${porcentaje}`);



//----------------------------------------------//
//----------------------------------------------//

// Tiempo de viaje
// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

//distancia/velocidad en km x hs = horas que tardo

// let distancia;
// let tiempoPie;
// let tiempoBici;

// distancia = prompt('ingrese la distancia de su recorrido en kilometros');
// tiempoPie = parseInt(distancia/5);
// tiempoBici = parseInt(distancia/10);

// document.write(`para recorrer la distancia ${distancia} kilometros, nos tomara ${tiempoBici} horas en bici o bien nos tomara ${tiempoPie} horas si vamos a pie`);


//----------------------------------------------//
//----------------------------------------------//

// Duración vuelo
// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

// let destino1;
// let destino2;
// let destino3;

// let totalDuracionDeVuelo;

// destino1 = prompt('ingrese el primer destino de la escala de un vuelo');
// destino2 = prompt('ingrese el segundo destino de la escala de un vuelo');
// destino3 = prompt('ingrese el tercer destinode la escala de un vuelo');

// duracionDestino1 = parseInt(prompt('ingrese la duracion del primer destino de la escala de un vuelo'));
// duracionDestino2 = parseInt(prompt('ingrese la duracion del segundo destino de la escala de un vuelo'));
// duracionDestino3 = parseInt(prompt('ingrese la duracion del tercer destino de la escala de un vuelo'));

// totalDuracionDeVuelo = (duracionDestino1 + duracionDestino2 + duracionDestino3) ;

// document.write(`
// su primer escala sera en ${destino1} y la duracion se su vuelo sera de ${duracionDestino1}
// su segunda escala sera en ${destino2} y la duracion se su vuelo sera de ${duracionDestino2}
// su tercer escala sera en ${destino3} y la duracion se su vuelo sera de ${duracionDestino3}
// el total de tiempo en vuelo sera de ${totalDuracionDeVuelo} horas`);


//----------------------------------------------//
//----------------------------------------------//


// Incremento
// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).


// let numeroPartida;
// let cantidadIncremento;
// let i1;
// let i2;
// let i3;
// let i4;
// let i5;

// numeroPartida = parseInt(prompt('ingrese un numero de partida desde el cual desdea realizar el incremento'));
// cantidadIncremento = parseInt(prompt('ingrese el numero que desea incrementar'));
// i1 = (numeroPartida + cantidadIncremento);
// i2 = (i1 + cantidadIncremento);
// i3 = (i2 + cantidadIncremento);
// i4 = (i3 + cantidadIncremento);
// i5 = (i4 + cantidadIncremento);

// document.write(`
// primer incremento ${i1}
// segundo incremento ${i2}
// tercer incremento ${i3}
// cuarto incremento ${i4}
// quinta incremento ${i5}`);


//----------------------------------------------//
//----------------------------------------------//



// Celsius a Fahrenheit
// Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

// let gradosCelsius;
// let gradosFahrenheit;

// gradosCelsius = parseInt(prompt('ingrese una cantidad de grados Celsius'));
// gradosFahrenheit = (gradosCelsius *1.8 )+32;

// document.write(`el equivalente a ${gradosCelsius} Grados Celsius es igual a ${gradosFahrenheit} grados Fahrenheit`);


//----------------------------------------------//
//----------------------------------------------//


// Múltiplos
// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

// let numero;
// let numero2;
// let esMultiplo;

// numero = parseInt(prompt('ingrese un numero'));
// numero2 = parseInt(prompt('ingrese otro numero'));

// if ((numero%numero2)==0){
//     document.write(`es multiplo`)
// } else {
//     document.write(`NO es multiplo`)
// }

//----------------------------------------------//
//----------------------------------------------//


// let cantSeg;
// let conversionHs;
// let restoHs;
// let conversionMin;
// let sobranteSeg;

// cantSeg = parseInt(prompt('ingrese una cantidad de segundos'));

// conversionHs = parseInt(cantSeg/3600);
// restoHs = parseInt(cantSeg%3600)
// conversionMin =  parseInt(restoHs/60);
// restoMin = parseInt(restoHs%60);

// document.write(`la cantidad ingresada equivale a ${conversionHs} horas, ${conversionMin} minutos y ${restoMin} segundos`);


//----------------------------------------------//
//----------------------------------------------//


// Cantidad de caracteres
// Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR CÓMO HACERLO


// let textoUsuario;
// let cantCaracteres;

// textoUsuario = prompt('ingrese un texto');
// cantCaracteres = textoUsuario.length;

// document.write(`la cantidad de caracteres que ha ingresado es ${cantCaracteres}`)


//----------------------------------------------//
//----------------------------------------------//


// Cantidad de huéspedes
// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

// let h2;
// let h3;
// let h4;
// let maxTotalGuests;

// h2 = prompt ('por favor ingrese cuántas habitaciones tiene su hotel para alojar a 2 personas');
// h3 = prompt ('por favor ingrese cuántas habitaciones tiene su hotel para alojar a 3 personas');
// h4 = prompt ('por favor ingrese cuántas habitaciones tiene su hotel para alojar a 4 personas');

// maxTotalGuests = parseInt((h2*2) + (h3*3) + (h4*4));

// document.write(`el maximo de huespedes que puede albergar es ${maxTotalGuests}`)


//----------------------------------------------//
//----------------------------------------------//



// Calculador gastos
// Crear un programa que pida al usuario cuanto dinero disponible tiene,
// y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio
// y el monto a pagar, uno a la vez. 
//Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. 
//Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

// let dineroDisponible;
// let servicio1;
// let montoServicio1;
// let saldoDisponible1;
// let servicio2;
// let montoServicio2;
// let saldoDisponible2;
// let servicio3;
// let montoServicio3;
// let saldoDisponible3;
// let saldoFinal;


// dineroDisponible = parseInt(prompt('ingrese por favor cuanto dinero disponible tiene'));

// servicio1 = prompt('ingrese por favor el primer servicio de desea pagar, resta ingresar dos servicios aun');
// montoServicio1 = parseInt(prompt('ingrese por favor monto del servicio de desea pagar'));
// saldoDisponible1 = parseInt(dineroDisponible-montoServicio1);

// servicio2 = prompt('ingrese por favor el segundo servicio de desea pagar, resta ingresar un servicio aun');
// montoServicio2 = parseInt(prompt('ingrese por favor monto del servicio de desea pagar'))
// saldoDisponible2 = parseInt(saldoDisponible1-montoServicio2);

// servicio3 = prompt('ingrese por favor el tercer y ultimo servicio de desea pagar');
// montoServicio3 = parseInt(prompt('ingrese por favor monto del servicio de desea pagar'))
// saldoFinal = parseInt(saldoDisponible2-montoServicio3);

// document.write(`
// usted cuenta con un total de ${dineroDisponible} pesos
// y debe pagar los siguientes sirvicios: 
// ${servicio1} cuyo monto es de ${montoServicio1} pesos,
// ${servicio2} cuyo monto es de ${montoServicio2} pesos,
// ${servicio3} cuyo monto es de ${montoServicio3} pesos,
// quedando un saldo / resto disponible de ${saldoFinal} pesos`);


//----------------------------------------------//
//----------------------------------------------//


// Orden de compras
// Crear un programa que tome la orden de compra de un local.
// Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.


// let tomates;
// let zanahorias;
// let lechugas;
// let precioTotal;
// let cuotas;
// let precioXcuota;

// tomates = parseInt(prompt('ingrese la cantidad de tomates que desea comprar'));
// zanahorias = parseInt(prompt('ingrese la cantidad de tomates que desea zanahorias'));
// lechugas = parseInt(prompt('ingrese la cantidad de tomates que desea lechugas'));
// precioTotal = (tomates*2) + (zanahorias*3) + (lechugas*1);

// cuotas = prompt('en cuantas cuotas quisiera pagar?');

// precioXcuota = precioTotal/cuotas;

// document.write(`el total a pagar es ${precioTotal} pesos y pagandolo en ${cuotas} cuotas, que serian de ${precioXcuota} pesos por mes`);

