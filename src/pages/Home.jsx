import React from "react";
import "./Home.css"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Carou from "../components/Carou";
 

const Home = () => {
  return (
    <div className="div1">
     
      <img className="fluid col-4" src="./l2.png" alt="bla bla" />
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
      <section className="hero text-white py-5 flex-grow-1">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="display-4">Bootstrap footer bottom</h1>
                <p className="fst-italic text-muted">
                  Using Bootstrap 5 flexbox utilities, create a footer that
                  always sticks to the bottom of your viewport. Snippet by{" "}
                  <a
                    className="text-primary"
                    href="https://bootstrapious.com/"
                    target="_blank"
                  >
                    Bootstrapious
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
    <Carou/>

    
    </div>
  );
};

export default Home;
