import { useEffect, useState } from "react";

export function Card() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchPokemons() {
             const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
              const data = await response.json();

        const pokemonInfo = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return await res.json();
            })
        );
        setPokemons(pokemonInfo);
        }

        fetchPokemons();
    }, [])

    return (
    <>
        {pokemons.map(pokemon => {
            return (
                <div key={pokemon.id} className="my-cards">
                    <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div className="pokemon-name">
                        <p>{pokemon.name}</p>
                    </div>
                </div>
            )
        })}
    </>
)
}