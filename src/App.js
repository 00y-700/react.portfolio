import React from "react";
import MyNavbar from "./components/Navbar";
import Bio from "./components/Bio";
import FooterCard from "./components/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Switch>
        <Route exact path="/" component={Bio}/>
        <Route exact path="/contact" component={Contact}/>
        
      </Switch>
      <FooterCard/>
    </Router>
  );
}

export default App;
