import { React, useState, useEffect, useContext } from "react";
import "./gig.css";
const backend_url = import.meta.env.VITE_BACKEND_URL;
import { GigsContext } from "../App";

const Favourited = (props) => {
    const [favourited, setFavourited] = useState(props.favourited);
    const toggleFavourited = () => {
        fetch(`${backend_url}/favourite/${props.id}`, {
            method: "POST",
            body: JSON.stringify({ favourited: !favourited }),
            credentials: "include",
            headers: { "Content-Type": "application/json" },
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
    const { gigs, setGigs } = useContext(GigsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${backend_url}/events`, {
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                setGigs(data);
                console.log(data[0].favourited);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Loading...</p>;

    const favouritedGigs = gigs.filter((gig) => gig.favourited);
    const nonFavouritedGigs = gigs.filter((gig) => !gig.favourited);

    return (
        <div id="gig-list" className="gig-container">
            <h2>Favorited Gigs</h2>
            {favouritedGigs.map((gig) => (
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

            <h2>Non-Favorited Gigs</h2>
            {nonFavouritedGigs.map((gig) => (
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
