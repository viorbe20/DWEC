/**
 * Tarea 3.2. Listado String y RegExp
 * @author Virginia Ordoño Bernier
 * En JavaScript implementa estas funciones. 
 * Utiliza el mismo formulario para E/S de los textos. 
 * Cada caja de texto con una función distinta la salida debe ir en un elemento adyacente. 
 * Cuida la accesibilidad/usabilidad.
 */

{

   /**
    * Capitaliza la primera letra de cada palabra
    * @param {string} param 
    * @returns {string}
    */
    function capitaliseFirstLetter(param) {
       //^ => asserts position at start of a line
       //\w => matches any word character (equivalent to [a-zA-Z0-9_])
       //| => es un or
      //\s => matches any whitespace character (equivalent to [\r\n\t\f\v ])

      return param.replace(/^\w|\s\w/g, function (letter) {
         return letter.toUpperCase();
     })
   }

   /**
    * Convierte mayúsculas en minúsculas y viceversa
    * @param {string} param 
    * @returns {string}
    */
       function reverseAllLetters(param) {
         let result = "";

         for (let i = 0; i <= param.length; i++) {
          
           let element = param.charAt(i);
            //Hace la conversión y lo mete en una variable.
           element.match(/[A-Z]/g) ? result = result.concat(element.toLowerCase()) :result = result.concat(element.toUpperCase()) ;
         
         }
         return result;
     }

   document.addEventListener('DOMContentLoaded', function(){
      let capitalise = document.getElementById("capitalise");
      let reverse = document.getElementById("reverse");

      //Capitaliza primera letra
      capitalise.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultCapitalise").innerText = capitaliseFirstLetter(capitalise.value);
         });

      //Capitaliza primera letra
      reverse.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultReverse").innerText = reverseAllLetters(reverse.value);
         });




   });
}
