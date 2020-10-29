import React, { Component } from "react";
import { Card } from "react-bootstrap";

class FooterCard extends Component {
  render() {
    return (
      <footer style={{height: "5vh", position: "fixed", bottom: "0", left: "0", width: "100vw"}}>
        <a href="https://www.linkedin.com/in/jeffrey-harding-0809261a8/">LinkedIn</a>
      </footer>
    )
  
};
}

export default FooterCard;
