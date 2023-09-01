import React, { useState } from "react";
import PropTypes from "prop-types";
import { useGigs } from "../App";
const backend_url = import.meta.env.VITE_BACKEND_URL;

const Favourited = (props) => {
    const [favourited, setFavourited] = useState(props.favourited);
    const { fetchGigs } = useGigs();
    const toggleFavourited = () => {
        fetch(`${backend_url}/favourite/${props.id}`, {
            method: "POST",
            body: JSON.stringify({ favourited: !favourited }),
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            fetchGigs();
        });
        setFavourited(!favourited);
    };

    return (
        <div id="favourited">
            {favourited ? <span>❤️</span> : <span>🖤</span>}
            <button onClick={toggleFavourited}>Favourite</button>
        </div>
    );
};

Favourited.propTypes = {
    favourited: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};

export default Favourited;
