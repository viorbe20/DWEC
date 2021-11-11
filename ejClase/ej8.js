/**
 * Ejercicio 8. 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */


/**
 * Función que comprueba y devuelve una cadena quete dice si un número es par o impar
 * @param {number} param 
 * @returns {string}
 */
function isAnEvenNumber(param) {
    return (param%2==0) ? "Es un número par." : "Es un número impar." 
}
//Salida por consola de los dos casos
document.addEventListener("DOMContentLoaded", function(){
    let input = document.getElementById("num");
    input.addEventListener("blur", function(){
        //console.log(evenNumber + isAnEvenNumber(input.value));         
        document.getElementById("result").textContent = isAnEvenNumber(input.value);
    });
    
});