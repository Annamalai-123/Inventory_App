/* React Libraries */
import React from "react";
import { Link } from "react-router-dom";

/* MUI Icons */
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github-mark.png";

/* Components */
import NavBar from "../components/NavBar";

/* Styles */
import "../assets/styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <NavBar />
        <main>
          <p className="main-title">Welcome to our application!</p>
          <br />
          <p className="main-desc">This app was built by Annamalai ♥️</p>
        </main>
        <footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>All rights reserved &copy; 2024 </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
