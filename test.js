{
    
   // function capitalizeFirstLetters(str){
   //    let ejemplo = Array.from([str], x => {
   //       if (x.toUpperCase()) {
   //          x.toLowerCase();
   //       } else {
   //          x.toUpperCase
   //       }
   //    })
   //    return ejemplo;
   //  }

    function capitalizeFirstLetters(str){

      let result = "";

    for (let i = 0; i <= str.length; i++) {
     
      let element = str.charAt(i);
   
      //  if (element.match(/[A-Z]/g)) {
      //    result = result.concat(element.toLowerCase());
      //  } else if (element.match(/[a-z]/g)) {
      //    result = result.concat(element.toUpperCase());
      //  } else {
      //     resutl = result.concat(element);
      //  }

      element.match(/[A-Z]/g) ? result = result.concat(element.toLowerCase()) :result = result.concat(element.toUpperCase()) ;


    }

    return result;
  
}
console.log(capitalizeFirstLetters("hOla eSTO es"));
    
    
}



    

