import React, { useState } from "react";
import PropTypes from "prop-types";
import { useGigs } from "../App";
import "./Favourited.css";

const backend_url = import.meta.env.VITE_BACKEND_URL;

const Favourited = (props) => {
    const [favourited, setFavourited] = useState(props.favourited);
    const { fetchGigs } = useGigs();
    const toggleFavourited = (event) => {
        event.preventDefault();
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
        <div className="favourite-div" id="favourite-button-container">
            <button className="favourite-button" onClick={toggleFavourited}>
                {favourited ? <span>❤️</span> : <span>🖤</span>}
                Favourite
            </button>
        </div>
    );
};

Favourited.propTypes = {
    favourited: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};

export default Favourited;
