import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Contact = (props) => {
  return (
    <Container>
      <Row>
        <Col> This will be a short bio about my self and what I have done work wise and what I have exp in the work field and how I want to bring that to ER and be able to better leave a carbon foot print for a company! </Col>
      </Row>
      <hr/>
      <Row>
        <Col>Other Portfolio HTML page Link </Col>
        <Col>HBYL and WWD info</Col>
        <Col>Phone and Email Here</Col>
        <Col>PDF of Resume Here</Col>
      </Row>
      <Row>
        <Col xs="3">Photo Here</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>Social Media App's will go here</Col>
      </Row>
    </Container>
  );
}

export default Contact;