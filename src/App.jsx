import Hello from "./components/Hello";
// import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
// import Profile from "./components/Profile";
import GigList from "./components/Gig";
// import Product from "./components/Product";
// import Counter from "./components/Counter";
// import ClickListener from "./components/ClickListener";
// import Die from "./components/Die";
// import RPS from "./components/RPS";
// import Form from "./components/Form";
// import Joke from "./components/Joke";
import { createContext, useState } from "react";

export const NameContext = createContext();

function App() {
    const [name, setName] = useState(null);
    return (
        <>
            <NameContext.Provider value={{ name, setName }}>
                <Hello />
                <GigList />
                {/* <Form /> */}
                {/* <img className="logo" src={makersLogo}></img>
      <Profile name= 'Brave Matthews' birthdate='1960' job='braveman'/>
      <Gig bandname='Brave Matthews' timing='8pm' location='The Moon'/>
      <Gig bandname='Giant Swan' timing='9pm' location='The Moon'/>
      
      <Product name='Brave Matthews' description='braveman' price='£100'/>
      <Product name='Giant Swan' description='Weird Techno' price='£80'/>
      <Counter/>
      <ClickListener/>
      <Die/>
      <RPS name='Alice'/> */}
            </NameContext.Provider>
        </>
    );
}

export default App;
