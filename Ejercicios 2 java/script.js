
   function iniciarPrograma() {
    var numeros = [];
    var continuar = true;
  
    while (continuar) {
      var numero = prompt("Ingresa un número (o escribe 'fin' para detener):");
  
      if (numero === "fin") {
        continuar = false;
      } else {
        var parsedNumero = parseFloat(numero);
  
        if (!isNaN(parsedNumero)) {
          numeros.push(parsedNumero);
        } else {
          alert("¡El valor ingresado no es un número válido!");
        }
      }
    }
  
    if (numeros.length > 0) {
      var numeroMasGrande = Math.max.apply(null, numeros);
      var resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = "El número más grande ingresado es: " + numeroMasGrande;
    } else {
      alert("No se ingresaron números.");
    }
  }

  
  //_______________________________________________________________________//



  function validarPalindromo() {
    var palabra = prompt("Ingresa una palabra o frase:").toLowerCase();
    var resultadoDiv = document.getElementById("resultado2");
  
    // Eliminar espacios y caracteres no alfabéticos
    var regex = /[^a-z0-9]/g;
    var palabraLimpia = palabra.replace(regex, "");
  
    // Comparar la palabra original con su versión invertida
    var esPalindromo = palabraLimpia === palabraLimpia.split("").reverse().join("");
  
    if (esPalindromo) {
      resultadoDiv.innerHTML = "'" + palabra + "' es un palíndromo.";
    } else {
      resultadoDiv.innerHTML = "'" + palabra + "' no es un palíndromo.";
    }
  }
  

  //---------------------------------------------------------------//


  function calcularSumaDigitos() {
    var numero = parseInt(prompt("Ingresa un número:"));
  
    // Validar que el valor sea numérico
    if (isNaN(numero)) {
      alert("El valor ingresado no es numérico.");
      return;
    }
  
    // Calcular la suma de los dígitos
    var sumaDigitos = 0;
    var numeroAbsoluto = Math.abs(numero); // Convertir a valor absoluto para números negativos
  
    while (numeroAbsoluto > 0) {
      sumaDigitos += numeroAbsoluto % 10;
      numeroAbsoluto = Math.floor(numeroAbsoluto / 10);
    }
  
    var resultadoDiv = document.getElementById("resultado3");
    resultadoDiv.innerHTML = "La suma de los dígitos es: " + sumaDigitos;
  }
  
   

      //-----------------------------------------------------//
          
      
      function generarNumeroAleatorio() {
        var rangoInicio = parseInt(prompt("Ingresa el inicio del rango:"));
        var rangoFin = parseInt(prompt("Ingresa el fin del rango:"));
      
        // Validar que los valores sean numéricos
        if (isNaN(rangoInicio) || isNaN(rangoFin)) {
          alert("Los valores ingresados no son numéricos.");
          return;
        }
      
        // Generar un número aleatorio dentro del rango
        var numeroAleatorio = Math.floor(Math.random() * (rangoFin - rangoInicio + 1)) + rangoInicio;
      
        var resultadoDiv = document.getElementById("resultado4");
        resultadoDiv.innerHTML = "El número aleatorio generado es: " + numeroAleatorio;
      }
      


      //------------------------------------------------------//

      function generarSecuenciaFibonacci() {
        var numero = parseInt(prompt("Ingresa un número:"));
      
        // Validar que el valor sea numérico
        if (isNaN(numero)) {
          alert("El valor ingresado no es numérico.");
          return;
        }
      
        var secuencia = [];
        var a = 0;
        var b = 1;
      
        while (a <= numero) {
          secuencia.push(a);
      
          var temp = a + b;
          a = b;
          b = temp;
        }
      
        var resultadoDiv = document.getElementById("resultado5");
        resultadoDiv.innerHTML = "La secuencia Fibonacci es: " + secuencia.join(", ");
      }
      