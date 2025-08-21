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

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i =  newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
        }
        return newArray;
    }

    const [shuffledCards, setShuffledCards] = useState(shuffleArray(pokemonNames));

    const addVisited = (name) => {
        if (visited.includes(name)) {
            setBestScore(prevBest => Math.max(prevBest, currentScore));
            setCurrentScore(0);
            setVisited([]);
        } else {
            setCurrentScore(prevScore => prevScore + 1);
            setVisited(prev => [...prev, name]);
        }

        setShuffledCards(prev => shuffleArray(prev));
    };
    return (
        <>
            <div className="scores">
                <p>Best Score: {bestScore} </p>
                <p>Current Score: {currentScore}</p>
            </div>
            <div className="cards">
                {shuffledCards.map(name => (
                <Card
                    key={name}
                    pokemonName={name}
                    addVisited={addVisited}
                />
                ))}
      </div>
        </>
    )
}