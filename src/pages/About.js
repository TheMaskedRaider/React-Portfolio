import React from "react";
import Col from "../components/Col"
import Container from "../components/Container"
import Row from "../components/Row"

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-3 md-offset-1">


                </Col>
                <Col size="md-6 md-offset-1">

                    <h1 className="header center text-warning">Welcome!</h1>
                    <h5 className="header col s12 light">My name is Stephen Kadesky, and I'm a Full-Stack developer.</h5>
                    <p>Born in Texas I've always had a passion for computers and technology.
                        Graduating from the university of dayton with a degree in history I turned to technology pursuits instead of pursuing a career in the historical field.
                        I am an amatuer game developer as well. </p>

                </Col>
            </Row>
        </Container>
    );
};

export default About;
