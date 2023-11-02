import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Favourited from "./Favourited";
import { useGigs } from "../App";
import "./SingleGigListing.css";

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
        <div className="center">
            <div id="singlegig" className="single-gig-container">
                {loading ? (
                    <p>Loading...</p>
                ) : gig ? (
                    <>
                        <h2 id="name">{gig.band_name}</h2>
                        <p id="desc">{gig.description}</p>
                        <p id="time">
                            {new Date(gig.time).toLocaleString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}
                        </p>
                        <p id="where">{gig.location}</p>
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
        </div>
    );
};

export default SingleGigListing;
