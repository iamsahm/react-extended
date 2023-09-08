import "./App.css";
import GigList from "./components/GigList";
import SingleGigListing from "./components/SingleGigListing";
import { createContext, useState, useContext } from "react";
const backend_url = import.meta.env.VITE_BACKEND_URL;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const GigsContext = createContext();

export const useGigs = () => {
    const { gigs, setGigs } = useContext(GigsContext);
    const [loading, setLoading] = useState(true);

    function fetchGigs() {
        return new Promise((resolve, reject) => {
            fetch(`${backend_url}/events`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    if (JSON.stringify(data) !== JSON.stringify(gigs)) {
                        setGigs(data);
                    }
                    setLoading(false);
                    resolve();
                })
                .catch((error) => {
                    console.error("Error fetching gigs:", error);
                    setLoading(false);
                    reject(error);
                });
        });
    }

    return { gigs, setGigs, loading, fetchGigs, setLoading };
};

function App() {
    const [gigs, setGigs] = useState([]);

    return (
        <>
            <GigsContext.Provider value={{ gigs, setGigs }}>
                <Router>
                    <Routes>
                        <Route path="/">
                            <Route index element={<GigList />} />
                            <Route path="/:id" element={<SingleGigListing />} />
                        </Route>
                    </Routes>
                </Router>
            </GigsContext.Provider>
        </>
    );
}

export default App;
