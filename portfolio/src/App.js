import React from "react";
import MyNavbar from "./components/Navbar";
import Bio from "./components/Bio";
import FooterCard from "./components/Card";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <MyNavbar />
      <Bio />
      <FooterCard />
    </div>
  );
}

export default App;
