
  // var edad = prompt("escribe tu edad");
  
  // if (parseInt(edad) >= 18) {
  //   alert("¡Ya puedes conducir!");
  // } else {
  //   alert("Debes ser mayor de 18 años para conducir.");
  // }



   var nota = prompt("Ingresa una nota (número): ");
  if (isNaN(parseInt(nota))) {
      alert("Solo se permiten valores numéricos");
    } else {
      var ValorNota = parseInt(nota);


  
if (ValorNota >= 0 && ValorNota <= 3) {
  alert ("Muy deficiente");
} else if (ValorNota > 3 && ValorNota <= 5) {
  alert ("Insuficiente");
} else if (ValorNota > 5 && ValorNota <= 6) {
  alert ("Suficiente");
} else if (ValorNota > 6 && ValorNota <= 7) {
  alert ("Bien");
} else if (ValorNota > 7 && ValorNota <= 9) {
  alert ("ValorNotable");
} else if (ValorNota > 9 && ValorNota <= 10) {
  alert ("Sobresaliente");
} else {
  alert ("ValorNota inválida. Introduce un valor entre 0 y 10.");
}
}


   
    //  var cadenas = [];

    //  while (true) {
    //    var cadena = prompt("Ingresa una cadena de texto (o presiona cancelar para salir):");
  
    //    if (cadena === null) {
    //      break;
    //    }
  
    //    cadenas.push(cadena);
    //  }

    //  var resultado = cadenas.join("-");
    //  alert("Cadenas concatenadas: " + resultado);



  // while (true) {
  //   var numeroStr = prompt("Ingresa el número de DNI:");

  //   if (numeroStr === null) {
  //     break;
  //   }

  //   var numero = parseInt(numeroStr);

  //   if (isNaN(numero)) {
  //     alert("El valor ingresado no es un número válido. Por favor, intenta nuevamente.");
  //     continue;
  //   }

  //   if (numero < 0 || numero > 99999999) {
  //     alert("El número de DNI debe estar entre 0 y 99999999. Por favor, intenta nuevamente.");
  //     continue;
  //   }

  //   var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  //   var indice = numero % 23;
  //   var letra = letras.charAt(indice);

  //   alert("La letra correspondiente al número de DNI " + numero + " es: " + letra);
  // }

  

