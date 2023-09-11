import { useEffect, useState } from "react";
import "./GigList.css";
import { useGigs } from "../App";
import Gig from "./Gig";
import { Link } from "react-router-dom";
import Favourited from "./Favourited";

const GigList = () => {
    const { gigs, fetchGigs, loading } = useGigs();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchGigs()
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching gigs:", error);
                setIsLoading(false);
            });
    }, [fetchGigs]);

    const renderGigs = (gigs, isFavorited) => {
        return (
            <div className="column">
                {isLoading && <p>Loading...</p>}
                {!isLoading && (
                    <>
                        <h2
                            className={
                                isFavorited
                                    ? "favourite-title"
                                    : "nonfavourite-title"
                            }
                        >
                            {isFavorited
                                ? "Favorited Gigs"
                                : "Non-Favorited Gigs"}
                        </h2>
                        {gigs.map((gig) => (
                            <div
                                key={gig.event_id}
                                className="gig-item"
                                id={
                                    gig.favourited
                                        ? "favourited-gig"
                                        : "unfavourited-gig"
                                }
                            >
                                <div className="gig">
                                    <Link to={`/${gig.event_id}`}>
                                        <Gig
                                            band_name={gig.band_name}
                                            description={gig.description}
                                            time={gig.time}
                                            location={gig.location}
                                            favourited={gig.favourited}
                                            id={gig.event_id}
                                        />
                                    </Link>
                                </div>
                                <Favourited
                                    className="favourite"
                                    favourited={gig.favourited}
                                    id={gig.event_id}
                                />
                            </div>
                        ))}
                    </>
                )}
            </div>
        );
    };

    const favouritedGigs = gigs.filter((gig) => gig.favourited);
    const nonFavouritedGigs = gigs.filter((gig) => !gig.favourited);

    return (
        <div id="gig-list" className="gig-container">
            {renderGigs(favouritedGigs, true)}
            {renderGigs(nonFavouritedGigs, false)}
        </div>
    );
};

export default GigList;
