import PropTypes from "prop-types";
import "./Gig.css";

const Gig = (props) => {
    return (
        <div className="gig-container">
            <div
                id="gig"
                className={
                    props.favourited ? "favourited-gig" : "unfavourited-gig"
                }
            >
                <h3 id="band_name">{props.band_name}</h3>
                <p id="description">
                    {props?.description.slice(0, 100) + "..."}
                </p>
                <p id="time">
                    {new Date(props.time).toLocaleString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}
                </p>
                <div className="location-favourite-container">
                    <p id="location">{props.location}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Gig.propTypes = {
    band_name: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
    favourited: PropTypes.bool,
    id: PropTypes.string,
};

export default Gig;
