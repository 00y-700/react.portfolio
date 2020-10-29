import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

class Projects extends Component {
    render() {
        return (
        <Jumbotron fluid>
        <Container>
          <h1>About Me</h1>
          <Row>
            <Col xs={2} md={4}>
              <Card>
                  <h3>Space Exploration</h3>
              </Card>
            </Col>
            <Col xs={2} md={4}>
              <Card>
                  <h3>Flix Nut</h3>
              </Card>
            </Col>
            <Col xs={2} md={4}>
              <Card>
                  <h3>Hang</h3>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
     
        );
      }
}

export default Projects;
