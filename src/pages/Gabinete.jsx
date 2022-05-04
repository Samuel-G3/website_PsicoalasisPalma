import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carou from "../components/Carou";
import LogoMain from "../components/LogoMain";
import "./Gabinete.css";
import Carousel from "react-bootstrap/Carousel";



const Gabinete = () => {
  return (
    <div className="backgroundAzul">
      <LogoMain />
      <div className="container">
        <div className="col">
          <div className=" ">
            <img
              className="gabineteImg   col-lg-10"
              src="./gabineteImg.jpg"
              alt="bla bla"
            />
          </div>
          <div className="containerTexto">
            <h1>Gabinete Psicoanalítico Palma</h1> 
            <p>
              Muchas han sido las personas que a lo largo de estos 25 años han
              pasado por El Gabinete Psicoanalítico Palma, una institución
              psicoanalítica dirigida y fundada en 1996 por José García
              Peñalver, psicólogo clínico y psicoanalista. Varios han sido
              nuestros objetivos y tareas desde su inicio: Atención clínica:
              psicoterapia individual, de parejas, familiar, grupal,
              acompañamiento terapéutico y atención domiciliaria. Formación en
              psicoanálisis: *cursos, seminarios, talleres, grupos de estudio y
              supervisiones. Actividades divulgativas: conferencias,
              charlas-coloquio, recitales varios y cine fórum. (*)Los cursos y
              seminarios cuentan con reconocimientos y méritos de prestigiosas
              entidades académicas y colegidas como son: la Universidad de las
              Islas Baleares (UIB), la Universidad Nacional a Distancia (UNED) y
              el Colegio Oficial de Psicólogos de Baleares (COPIB).
            </p>
          </div>
        </div>
      </div>

          <Carousel className="backgroundCarousel">
        <Carousel.Item>
          <img
            className="  img-fluid"
            src="./c1.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="./b4.jpg"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="./c5.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="masc.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="g5.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gabinete;
