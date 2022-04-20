import React from "react";
import "./Home.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div className="div1">
      <img className="logo" src="./l2.png" alt="bla bla" />
      <Container>
        <Row>
          <Col>
            <p className="text">
              "Si construimos nuestra realidad con nuestros pensamientos,
              podemos cambiarla cambiando nuestra manera de pensar"
            </p>
            <p className="firma">José García Peñalver</p>
          </Col>

          <Col>
            {" "}
            <img className="logoJose" src="./home1.png" alt="bla bla" />
          </Col>
        </Row>
      </Container>
   
      <Row xs={1} md={2} className="g-4">
 
 
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
