import React from "react";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Carou from "../components/Carou";

//className="fluid col-6"

const Home = () => {
  return (
    <div className="backgroundBlanco">
      {/* section __________________________________________________ */}
      <div className="backgroundAzul">
        <img className=" col-10 col-lg-3" src="./logo3.png" alt="bla bla" />

        <Container>
          <Col>
            <img
              className="jose1  col-10 col-lg-7"
              src="./img2.png"
              alt="bla bla"
            />
          </Col>
        </Container>
      </div>
      <div className="row">
        <div className="background2">
          <p className="text col-8 col-lg-20 text-dark  m-auto ">
            "Si construimos nuestra realidad con nuestros pensamientos, podemos
            cambiarla cambiando nuestra manera de pensar"
          </p>
          <p className="firma text-dark">-José García Peñalver-</p>
        </div>

        {/* <img
          className="joseImg col-10 col-lg-7"
          src="./home11.png"
          alt="bla bla"
        /> */}
      </div>

      {/* section __________________________________________________ */}

      <div className="backgroundAzul2   ">
        <div className="  container   ">
          <div className="row   ">
            
            <div className="txtjose2 col m-5  ">
              <div className="divText    ">
              <h1 className="txtjose3 ">Gabinete Psicoanalítico Palma </h1>
              <p className="txtjose4 text-dark">
                Muchas han sido las personas que a lo largo de estos 25 años han
                pasado por El Gabinete Psicoanalítico Palma, una institución
                psicoanalítica dirigida y fundada en 1996 por José García
                Peñalver. <br></br>formador autor colaborado...Autor del libro{" "}
                <br></br>
                <a
                  className="text-primary"
                  href="https://lamiradadelotroediciones.com"
                  target="_blank"
                >
                  Hay otra manera de vivir
                </a>{" "}
              </p>
            </div></div>
            <div className="imgjose2 col m-5 my-auto">
              <img
                className="joseImg   col-lg-10"
                src="./home11.png"
                alt="bla bla"
              />
            </div>

          </div>
        </div>
      </div>
      {/* section __________________________________________________ */}
      {/* <div className="backgroundAzul">
       
       <img className=" col-10 col-lg-5" src="./logo3.png" alt="bla bla" />
       
       <Container>
       <Col>
         <img
           className="jose1  col-10 col-lg-7"
           src="./img2.png"
           alt="bla bla"
         />
       </Col>
     </Container>
   </div>
   <div className="row">
     <div className="background2">
       <p className="text col-8 col-lg-20 text-dark  m-auto ">
         "Si construimos nuestra realidad con nuestros pensamientos, podemos
         cambiarla cambiando nuestra manera de pensar"
       </p>
       <p className="firma text-dark">-José García Peñalver-</p>
     </div> 
     </div>
       */}

      {/* <section className="hero text-white flex-grow-1 m-5">
        <div className="container ">
          <div className="row ">
            <div className=" ">
              <img
                className="joseImg col-5 col-lg-3"
                src="./home11.png"
                alt="bla bla"
              />
              <h1 className="display-4">Bootstrap footer bottom</h1>
              <p className="fst-italic">
                Muchas han sido las personas que a lo largo de estos 25 años han
                pasado por El Gabinete Psicoanalítico Palma, una institución
                psicoanalítica dirigida y fundada en 1996 por José García
                Peñalver, psicólogo clínico y psicoanalista.{" "}
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
      </section> */}

      {/* <Carou /> */}
    </div>
  );
};

export default Home;
