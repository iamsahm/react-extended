import { React, useState, useEffect } from "react";

// make the favourited component, false as default, displaying a black heart and a red heart when clicked, and toggling between the two
const Favourited = () => {
    const [favourited, setFavourited] = useState(false);
    return (
        <div id="favourited">
            {favourited ? <span>❤️</span> : <span>🖤</span>}
            <button onClick={() => setFavourited(!favourited)}>
                Favourite
            </button>
        </div>
    );
};

const Gig = (props) => {
    return (
        <div id="gig">
            <h3 className="bandname">{props.bandname}</h3>
            <img
                className="picture"
                src="https://nationaltoday.com/wp-content/uploads/2022/10/456840922-min.jpg"
                alt="Brave Matthew's Band"
            />
            <p className="description">
                {props.description.slice(0, 100) + "..."}
            </p>
            <p className="timing">{props.timing}</p>
            <p className="location">{props.location}</p>
            <Favourited />
        </div>
    );
};

const GigList = () => {
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        // fetch from https://makers-gig-backend.onrender.com/events
        fetch("https://makers-gig-backend.onrender.com/events")
            .then((response) => response.json())
            .then((data) => {
                setGigs(data);
            });
    }, []);

    // return mapped based on {"event_id":"1","band_name":"The Crooked Spires","image_url":"","description":"The Crooked Spires are a British rock band formed in London in 2022. The band consists of lead vocalist and guitarist Steve Spire, bassist and backing vocalist Dave Spire, drummer and backing vocalist Pete Spire, and keyboard player and backing vocalist Andy Spire.","time":"2023-09-15T20:00:00Z","location":"The O2 Arena, London","favourited":false}
    return (
        <div id="gig-list">
            {gigs.map((gig) => (
                <Gig
                    bandname={gig.band_name}
                    timing={gig.time}
                    location={gig.location}
                    description={gig.description}
                    key={gig.event_id}
                />
            ))}
        </div>
    );
};

export default GigList;
