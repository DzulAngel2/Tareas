document.getElementById("btnBuscar").addEventListener("click", function() {
    var urlMercadoLibre = "https://api.mercadolibre.com/sites/MLA/search?q=laptops";
    var urlPokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=100";
  
    Promise.all([fetch(urlMercadoLibre), fetch(urlPokeAPI)])
      .then(function(responses) {
        return Promise.all(responses.map(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la petición: " + response.status);
          }
        }));
      })
      .then(function(data) {
        mostrarLaptops(data[0].results);
        mostrarPokemon(data[1].results);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
  function mostrarLaptops(laptops) {
    var listaLaptops = document.getElementById("listaLaptops");
    listaLaptops.innerHTML = "";
  
    laptops.forEach(function(laptop) {
      var li = document.createElement("li");
      li.textContent = laptop.title;
      listaLaptops.appendChild(li);
    });
  }
  
  function mostrarPokemon(pokemonList) {
    var listaPokemon = document.getElementById("listaPokemon");
    listaPokemon.innerHTML = "";
  
    pokemonList.forEach(function(pokemon) {
      var li = document.createElement("li");
      li.textContent = pokemon.name;
      listaPokemon.appendChild(li);
    });
  }
  