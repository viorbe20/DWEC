{
    
  let param1 = "Arquímedes dijo Eureka";
  let param2 = "arquímedes lo dijo en una alberca";

    function capitalizeFirstLetters(param1, param2){
   
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


    console.log(capitalizeFirstLetters(param1, param2));
}

    




    

