import { useState } from "react";
import { Card } from "./Card";

export function Pokemon() {
    const [visited, setVisited] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

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
        if (visited.includes(name)) {
            setBestScore(prevBest => Math.max(prevBest, currentScore));
            setCurrentScore(0);
            setVisited([]);
        } else {
            setCurrentScore(prevScore => prevScore + 1);
            setVisited(prev => [...prev, name]);
        }
    };
    return (
        <>
            <p>Best Score: {bestScore} </p>
            <p>Current Score: {currentScore}</p>
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