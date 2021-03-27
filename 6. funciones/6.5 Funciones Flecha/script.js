// Function arrow

/**
 * Uso de Funciones en JavaScript
 * 
 Realizar una calculadora que solicite al 
 usuario la operación que desea realizar.
 la Calculadora debe contener las operaciones
 Sumar, Restar, Dividir, multiplicar;
 y adicionalmente calcule el promedio de los
 datos ingresados y cual es el número mayor.
 * 
 */

var sumarValores = (numA, numB) => {
    var result = numA + numB;
    return result;
}


console.log( "El resultado es: ", sumarValores(15, 10));