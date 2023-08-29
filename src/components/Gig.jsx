import {React, useState} from "react";

// make the favourited component, false as default, displaying a black heart and a red heart when clicked, and toggling between the two
const Favourited = () => {
    const [favourited, setFavourited] = useState(false);
    return (
        <div id="favourited">
            {favourited ? <span>❤️</span> : <span>🖤</span>}
            <button onClick={() => setFavourited(!favourited)}>Favourite</button>
        </div>
    );
}


const Gig = (props) => {
    return (
        <div id="gig">
            <h3 className="bandname">{props.bandname}</h3>
            <img className="picture" src="https://nationaltoday.com/wp-content/uploads/2022/10/456840922-min.jpg" alt="Brave Matthew's Band" />
            <p className="description">Brave Matthew's Band is a band that plays music.</p>
            <p className="timing">{props.timing}</p>
            <p className="location">{props.location}</p>
            <Favourited/>

        </div>
    );
}


export default Gig;