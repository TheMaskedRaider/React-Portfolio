import React from "react";
import Col from "../components/Col"
import Container from "../components/Container"
import Row from "../components/Row"


const Contact = () => {
  return (
    <Container fluid>
      <Row className="m-1 d-flex justify-content-center">
        <Col size="md-6">
          <h2>Contact Information</h2>
          <br></br>
          <p>Phone Number:214-478-1229</p>
          <p>Current Work Number:214-651-0772</p>
          <p>Email:<a href="mailto: themaskedraider@gmail.com">themaskedraider@gmail.com</a></p>
          <br></br>
          <p>The most effective way to contact me is via email.</p>
          <p>If you wish to contact me via phone I am available most times of the day.</p>
          <p>If I am unable to answer the phone, leave a message and I will promptly return your call.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
