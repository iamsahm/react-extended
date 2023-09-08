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
                <p id="timing">{props.time}</p>
                <p id="location">{props.location}</p>
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
