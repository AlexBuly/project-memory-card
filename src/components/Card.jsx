import { useEffect, useState} from "react";

export function Card({pokemonName, addVisited}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) return <p>Loading...</p>

    return (
        <>
            <div 
                onClick={() => addVisited(pokemon.name)}  
                className="my-cards"
                >
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="pokemon-name">
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </>
    )
}