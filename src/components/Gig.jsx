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
                <h3 className="band_name">{props.band_name}</h3>
                <p className="description">
                    {props?.description.slice(0, 50) + "..."}
                </p>
                <p className="timing">{props.time}</p>
                <p className="location">{props.location}</p>
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
