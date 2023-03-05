// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import logo from './images/logo-no-background.png'
import Listings from './components/Listings'
import Home from './components/Home';
import Navigation from './components/Navigation';
import NewListing from './components/NewListing';

function App() {
  const [cats, setCats] = useState([]);
  const [listings, setListings] = useState([]);

  const styles = {
    main: {
      paddingTop: "100px",
      paddingBottom: "100px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "center"
    }
  }
  
  useEffect(() => {
    fetch("http://localhost:9292/cats")
    .then((r) => r.json())
    .then((data) => {
      setCats(data);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then((r) => r.json())
    .then((listings) => {
      setListings(listings);   
    });
  }, []);

  const addNewCategory = (cat) => {
    setCats([...cats, cat])
  }

  return (
    <div className="App">
      
      <Navigation className="Navigation" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/listings" 
          element=
            {<Listings 
              cats={cats} 
              setCats={setCats}
              listings={listings} 
              setListings={setListings}
              addNewCategory={addNewCategory}
            />} 
        />
        <Route 
          path="/listings/new" 
          element=
            {<NewListing 
              cats={cats} 
              listings={listings} 
              setListings={setListings}
            />} 
        />
        {/* <Route
          path="/cats/new"
          element=
          {<NewCategory
            cats={cats}
          />}
        /> */}
      </Routes>
    </div>
  )
}

export default App;

  // <Router>
    //   <Navigation />
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/listings" element={<Listings cats={cats}/>} />
    //     </Routes>
    //   </div>
    //   </Router>