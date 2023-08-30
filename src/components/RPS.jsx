import { React, useState } from "react";
import Choice from "./Choice";

const RPS = (props) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);

    const setplayerChoiceAndEmoji = (emoji) => {
        setPlayerChoice(emoji);
        randomChoice();
    };

    const randomChoice = () => {
        const choices = ["🪨", "📄", "✂️"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomChoice = choices[randomIndex];
        setComputerChoice(randomChoice);
    };

    function winner() {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (playerChoice === "🪨" && computerChoice === "✂️") {
            return "You win!";
        } else if (playerChoice === "📄" && computerChoice === "🪨") {
            return "You win!";
        } else if (playerChoice === "✂️" && computerChoice === "📄") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    return (
        <div id="rps">
            <h2 id="name">Hello {props.name}, make your choice</h2>
            {/* render the playerchoice */}
            Your Choice:
            <Choice choice={playerChoice} />
            Computer Choice:
            <Choice choice={computerChoice} />
            {/* render the computerchoice */}
            <h1 id="computerChoice">computer choice: {computerChoice}</h1>
            {/* render the winner with conditional */}
            {playerChoice && <h1 id="winner">{winner()}</h1>}
            <button onClick={() => setplayerChoiceAndEmoji("🪨")}>Rock</button>
            <button onClick={() => setplayerChoiceAndEmoji("📄")}>Paper</button>
            <button onClick={() => setplayerChoiceAndEmoji("✂️")}>
                Scissors
            </button>
        </div>
    );
};

export default RPS;
