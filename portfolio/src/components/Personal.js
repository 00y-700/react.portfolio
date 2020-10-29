import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

class FooterCard extends Component {
  render() {
    return (
    <Jumbotron fluid>
    <Container>
      <h1>About Me</h1>
      <Row>
        <Col xs={2} md={4}>
          <Card>
              <h3>Employee Management CLI</h3>
          </Card>
        </Col>
        <Col xs={2} md={4}>
          <Card>
              <h3>Budget App</h3>
          </Card>
        </Col>
        <Col xs={2} md={4}>
          <Card>
              <h3>Notes App</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
 
    );
  }
}

export default FooterCard;
