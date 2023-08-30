import React from "react";
import { useState } from "react";

const Joke = () => {
    const [joke, setJoke] = useState("");

    const getJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => response.json())
            .then((data) => {
                setJoke(data.setup + " " + data.punchline);
            });
    };

    return (
        <div>
            <button onClick={getJoke}>Get Joke</button>
            <p>{joke}</p>
        </div>
    );
};

export default Joke;
