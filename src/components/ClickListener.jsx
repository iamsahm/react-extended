// in ClickListener.js
import React from "react";

const ClickListener = () => {
    // Defining handleClick inside the ClickListener component.
    const handleClick = (event) => {
        console.log(event);
      };

    const input = (input) => {
        console.log(input);
    };

    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <input onChange={input} />
        </>
    );
};

export default ClickListener;
