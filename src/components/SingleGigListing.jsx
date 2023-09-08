import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Favourited from "./Favourited";
import { useGigs } from "../App";

const SingleGigListing = () => {
    const { id } = useParams();
    const { gigs, fetchGigs, loading, setLoading } = useGigs();
    const [gig, setGig] = useState(null);

    useEffect(() => {
        fetchGigs();
        if (gigs.length > 0) {
            const gig = gigs.find((gig) => gig.event_id === id);
            setGig(gig);
            setLoading(false);
        }
    }, [fetchGigs, gigs, id, setLoading]);

    return (
        <div id="singlegig" className="single-gig-container">
            {loading ? (
                <p>Loading...</p>
            ) : gig ? (
                <>
                    <h2 className="band_name">{gig.band_name}</h2>
                    <p className="description">{gig.description}</p>
                    <p className="timing">{gig.time}</p>
                    <p className="location">{gig.location}</p>
                    <Favourited
                        className="favourite"
                        favourited={gig.favourited}
                        id={gig.event_id}
                    />
                </>
            ) : (
                <p>Gig not found</p>
            )}
        </div>
    );
};

export default SingleGigListing;
