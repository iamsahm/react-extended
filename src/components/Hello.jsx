import { NameContext } from "../App";
import { useContext } from "react";

const Hello = () => {
    const { name, setName } = useContext(NameContext);

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    function mySubmitFunction(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            {name ? (
                <h1>Hello {name}</h1>
            ) : (
                <>
                    <h1>Hello, what's your name?</h1>
                </>
            )}
            <form onSubmit={mySubmitFunction}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default Hello;
