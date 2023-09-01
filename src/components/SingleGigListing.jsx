import { React, useEffect } from "react";

import { useParams } from "react-router-dom";
import Favourited from "./Favourited";
import { useGigs } from "../App";

const SingleGigListing = () => {
    const { id } = useParams();
    const { gigs, fetchGigs } = useGigs();

    useEffect(() => {
        fetchGigs();
    }, []);
    const gig = gigs.find((gig) => gig.event_id === id);

    return (
        <div id="singlegig" className="single-gig-container">
            <h2 className="band_name">{gig.band_name}</h2>
            <p className="description">{gig.description}</p>
            <p className="timing">{gig.time}</p>
            <p className="location">{gig.location}</p>
            <Favourited
                className="favourite"
                favourited={gig.favourited}
                id={gig.event_id}
            />
        </div>
    );
};

export default SingleGigListing;
