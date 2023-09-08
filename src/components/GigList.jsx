import { useEffect } from "react";
import "./gig.css";
import { useGigs } from "../App";
import Gig from "./Gig";
import { Link } from "react-router-dom";
import Favourited from "./Favourited";

const GigList = () => {
    const { gigs, fetchGigs } = useGigs();

    useEffect(() => {
        fetchGigs();
    }, []);

    const renderGigs = (gigs, isFavorited) => {
        return (
            <div className="column">
                <h2
                    className={
                        isFavorited ? "favourite-title" : "nonfavourite-title"
                    }
                >
                    {isFavorited ? "Favorited Gigs" : "Non-Favorited Gigs"}
                </h2>
                {gigs.map((gig) => (
                    <div key={gig.event_id} className="gig-container">
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
                        <Favourited
                            className="favourite"
                            favourited={gig.favourited}
                            id={gig.event_id}
                        />
                    </div>
                ))}
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
