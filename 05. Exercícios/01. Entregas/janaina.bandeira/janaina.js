asyns function getPokemon(id){
    //Obter pokemon pelo id 

    pokemon = await fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
        .then((resposta) => resposta.json())
        .catch(error => { 
            console.error(error);
        });
    return pokemon
}


