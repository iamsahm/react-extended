import React from "react";

const Die = () => {
    const [value, setValue] = React.useState(1);

    const roll = () => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setValue(newValue);
    };

    return (
        <>
            <h1>{value}</h1>
            <button onClick={roll}>Roll</button>
        </>
    );
}

export default Die;