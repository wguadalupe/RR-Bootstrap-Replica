import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function StoreBrowser() {
  return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Browse stores in Houston</h2>
      <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs="6" sm="4">
                <Image src="path/to/aldi_logo.jpg" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs="6" sm="4">
                <Image src="path/to/sprouts_logo.jpg" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs="6" sm="4">
                <Image src="path/to/kroger_logo.jpg" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
            </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default StoreBrowser;
