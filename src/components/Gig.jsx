import { React, useState, useEffect } from "react";

const Favourited = (props) => {
    const [favourited, setFavourited] = useState(props.favourited);

    const toggleFavourited = () => {
        setFavourited(!favourited);
        fetch(`https://makers-gig-backend.onrender.com/favourite/${props.id}`, {
            method: "POST",
            body: JSON.stringify({ favourited: favourited }),
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        });
    };

    return (
        <div id="favourited">
            {favourited ? <span>❤️</span> : <span>🖤</span>}
            <button onClick={toggleFavourited}>Favourite</button>
        </div>
    );
};

const Gig = (props) => {
    return (
        <div
            id="gig"
            className={props.favourited ? "favourited-gig" : "unfavourited-gig"}
        >
            <h3 className="bandname">{props.bandname}</h3>
            <p className="description">
                {props.description.slice(0, 100) + "..."}
            </p>
            <p className="timing">{props.timing}</p>
            <p className="location">{props.location}</p>
            <Favourited favourited={props.favourited} id={props.id} />
        </div>
    );
};

const GigList = () => {
    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://makers-gig-backend.onrender.com/events")
            .then((response) => response.json())
            .then((data) => {
                setGigs(data);
                setLoading(false);
            });
    }, []);

    return loading ? (
        <p>Loading...</p>
    ) : (
        <div id="gig-list" className="gig-container">
            {gigs.map((gig) => (
                <Gig
                    key={gig.event_id}
                    bandname={gig.bandname}
                    description={gig.description}
                    timing={gig.timing}
                    location={gig.location}
                    favourited={gig.favourited}
                    id={gig.event_id}
                />
            ))}
        </div>
    );
};

export default GigList;
