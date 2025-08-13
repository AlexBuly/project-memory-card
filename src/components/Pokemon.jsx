import { useState } from "react";
import { Card } from "./Card";

export function Pokemon() {
    const [visited, setVisited] = useState([]);

    const pokemonNames = [
        "pikachu",
        "sceptile",
        "munchlax",
        "trubbish",
        "cacturne",
        "bulbasaur",
        "meganium",
        "raikou",
        "mawile",
        "morgrem",
        "charizard",
        "ekans",
        "jigglypuff",
        "ditto",
        "caterpie"
    ];

    const addVisited = (name) => {
        setVisited(prev => prev.includes(name) ? prev : [...prev, name])
        console.log(visited);
    };
    /////// COMMIT ///////////////
    return (
        <>
            <p>Best Score: 0 </p>
            <p>Current Score: {visited.length}</p>
            <h2>All Pokemons:</h2>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", flexWrap: "wrap" }}>
                {pokemonNames.map(name => (
                <Card
                    key={name}
                    pokemonName={name}
                    addVisited={addVisited}
                />
                ))};
      </div>
        </>
    )
}