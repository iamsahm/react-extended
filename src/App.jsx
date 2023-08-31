import "./App.css";
import GigList from "./components/Gig";
import { createContext, useState } from "react";

export const GigsContext = createContext();

function App() {
    const [gigs, setGigs] = useState(null);

    return (
        <>
            <GigsContext.Provider value={{ gigs, setGigs }}>
                <GigList />
            </GigsContext.Provider>
        </>
    );
}

export default App;
