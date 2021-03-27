
// Ciclo Do While

/**
 * Ejercicio uno
 * 
 * Realizar un programa que le pida numeros al usuario,
 * los sume y pregunte si desea continuar para agregar 
 * mumeros a la suma.
 * 
 * 
 */

// Ejercicio:
/**
 * Ajustar el siguiente código para validar que solamente se ingrese la palabra
 *  si o no (Minúsculas) 
 *  Si o No
 *    ó 
 *  SI o NO (Mayúsculas)
 * 
 * Si se ingresan palabras diferentes, siempre se debe presentar una alerta que le diga al 
 * usuario que el valor ingresado no esta permitido
 */
var resultado = 0;
var numA = 0;
var control = true;
do {
    // Instrucciones
    numA = parseFloat(prompt("Ingrese un número a sumar"));
    resultado = resultado + numA;
    alert("La suma actual es: " + resultado);

    var estado = prompt("Desea continuar? Escriba  si ó no").toLowerCase();


    var error = false;

    if (estado != 'si') {
        error = true;
    } else if (estado != 'no' && estado != 'si') {
        error = true;
    } else {
        error = false;
    }

    while (error) {
        alert("Error, Ingrese solamente si o no");
        estado = prompt("Desea continuar? Escriba  si ó no").toLowerCase();
        if (estado != 'si') {
            error = true;
        } else {
            error = false;
        }
       
    }

    while (error) {
        alert("Error, Ingrese solamente si o no");
        estado = prompt("Desea continuar? Escriba  si ó no").toLowerCase();
              
        if (estado != 'no') {
            error = true;
        } else {
            error = false;
        }
    }

    if (estado == "no") {
        control = false;
    }

} while (control == true)
alert("La sumatoria final es: " + resultado);
console.log("Fin del programa");