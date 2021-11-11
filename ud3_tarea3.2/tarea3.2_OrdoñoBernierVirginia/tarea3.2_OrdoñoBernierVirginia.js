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
        element.match(/[A-ZÁ-ÚÜ]/g) ? result = result.concat(element.toLowerCase()) :result = result.concat(element.toUpperCase()) ;
      
      }
      return result;
      }

   /**
    * Convierte todo a camelcase
    * @param {string} param 
    * @returns {string}
    */
   function convertToCamelCase(param) {
      //Convertimos todas las letras en minúsculas
      let lowLetters = param.toLowerCase();
      //Convertimos todas las primeras letras en mayúsculas
      let upperFirstLetters =  lowLetters.replace(/^\w|\s\w/g, function (letter) {
         return letter.toUpperCase();
      })
      //Quitamos espacios en blanco
      let noSpaces = upperFirstLetters.replace(/ /g, "");
      //Convertimos la primera letra en minúscula
      let finalText =  noSpaces.replace(/^\w|\s\w/g, function (letter) {
         return letter.toLowerCase();
      })
   
      return finalText;
   }

   /**
    * Elimina el camelcase
    * @param {string} param 
    * @returns {string}
    */
      function deleteCamelCase(param) {
         let result = "";

         for (let i = 0; i <= param.length; i++) {
          
           let element = param.charAt(i);
            //1. Recorre el string y si encuentra alguna mayúscula le añade un espacio delante
            //2. Pasa el resultado a minúscula
           element.match(/[A-ZÁ-ÚÜ]/g) ?  result = result.concat(element.padStart(2, " ")).toLowerCase() : result = result.concat(element).toLowerCase();
         
         }
        
         return result;
      }

   /**
    * Comprueba si una cadena empieza con la que otra termina
    * @param {string} param1 
    * @param {string} param2 
    * @returns {string}
    */
       function endsWith(param1, param2) {
         let result = "";

      //A través del índice, obtenemos el rango de la última palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let lastWordIndex = param1.lastIndexOf(" ");
      let lastWord = param1.slice(lastWordIndex).trim().toLowerCase(); 

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let firstWordIndex = param2.indexOf(" ");
      let firstWord = param2.slice(0, firstWordIndex).trim().toLowerCase();
      console.log(firstWord);

      //Comparamos. Si da 0 son iguaes, si no no.
      if (lastWord.localeCompare(firstWord) == 0) {
        result = "Es la misma palabra";
      } else {
        result = "No es la misma palabra";
      }

     return result;
      }

   /**
    * Comprueba si una cadena empieza con la que otra termina
    * @param {string} param1 
    * @param {string} param2 
    * @returns {string}
    */
    function startsWith(param1, param2) {
      let result = "";

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let firstWordIndex = param1.indexOf(" ");
      let firstWord1 = param1.slice(0, firstWordIndex).trim().toLowerCase(); 
      console.log(firstWord1);

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let secondWordIndex = param2.indexOf(" ");
      let firstWord2 = param2.slice(0, secondWordIndex).trim().toLowerCase();
      console.log(firstWord2);

      //Comparamos. Si da 0 son iguaes, si no no.
      if (firstWord1.localeCompare(firstWord2) == 0) {
        result = "Es la misma palabra";
      } else {
        result = "No es la misma palabra";
      }

     return result;
   }

   document.addEventListener('DOMContentLoaded', function(){
      let capitalise = document.getElementById("capitalise");
      let reverse = document.getElementById("reverse");
      let camelCase = document.getElementById("camelCase");
      let noCamelCase = document.getElementById("noCamelCase");
      let endsWith1 = document.getElementById("endsWith1");
      let endsWith2 = document.getElementById("endsWith2");
      let startsWith1 = document.getElementById("startsWith1");
      let startsWith2 = document.getElementById("startsWith2");

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

      //Convertir a camelCase
      camelCase.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultCamelCase").innerText = convertToCamelCase(camelCase.value);
         }); 
         
      //Elimina el camelCase
      noCamelCase.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultNoCamelCase").innerText = deleteCamelCase(noCamelCase.value);
         }); 
         
      //Comprueba si una cadena empieza con la que otra termina
      endsWith2.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultEndsWith").innerText = endsWith(endsWith1.value, endsWith2.value);
         });

      //Comprueba si una cadena empieza con la que otra empieza
      startsWith2.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultStartsWith").innerText = startsWith(startsWith1.value, startsWith2.value);
         });

   });
}
