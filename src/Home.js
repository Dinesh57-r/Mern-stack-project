import React from "react";
import './App.css';
import Dinesh from './Dinesh.jpg';  // Correct path for image

const Home = () => {
  return (
    <div className="home-container">
       <img src={Dinesh} alt="Dinesh R" className="home-image" />
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br><br></br><br></br><br></br><br></br>
      <h1 className="home-heading">Dinesh R</h1>
      <p className="home-subheading">Aspiring AI & ML Engineer | Passionate Programmer</p>
      <img src={Dinesh} alt="Dinesh R" className="home-image" />
    </div>
  );
};

export default Home;
