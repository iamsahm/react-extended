import { useState, React } from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        } else if (event.target.name === "phone") {
            const phone = event.target.value.replace(/\D/g, "");
            setPhone(phone);
        }
    };

    const handleSubmit = () => {
        event.preventDefault();
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({ username, password, phone }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <input
                    type="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                Enter your password:
                {/* // conditionally render an error message if the password is too short */}
                {password.length < 8 && (
                    <p className="error">
                        Password must be at least 8 characters
                    </p>
                )}
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                Enter your phone number:
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
            </label>
            <label>
                Submit
                <input type="submit" value="Submit" />
            </label>
        </form>
    );
};

export default Form;
