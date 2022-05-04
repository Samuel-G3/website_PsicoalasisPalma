import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carou from "../components/Carou";
import LogoMain from "../components/LogoMain";
import "./Sobremi.css";
import Carousel from "react-bootstrap/Carousel";


const Features = () => {
  return (
    <div className="backgroundAzul">
      <LogoMain />
      <div className="container">
        <div className="col">
          <div className=" ">
            <img
              className="joseImg   col-lg-10"
              src="./home11.png"
              alt="bla bla"
            />
          </div>
          <div className="containerTexto">
            <h1>Jose García Peñalver</h1>
            <h3>Director y fundador del Gabinete Psicoanalítico Palma</h3>
            <p>
            <strong>Psicólogo Clínico y Psicoanalista. </strong> Director del
              Gabinete Psicoanalítico Palma. Fundado en 1996. Coordinador,
              supervisor y profesor de cursos, seminarios y talleres de
              Psicoanálisis. ​ Autor del libro <strong> “Hay otra manera de vivir”.</strong>
              Publicado en edición impresa en 2009 y ahora, en la año 2020, en
              versión digital (PDF) renovada. ​ Conferenciante habitual. Con más
              de 200 en su haber impartidas en la sede del Gabinete, en
              organismos e instituciones universitarias y colegiadas y en
              diferentes centros culturales. ​ Contertulio habitual en programas
              de TV y radio de ámbito local, hablando sobre temas diversos de
              índole sanitarias e interés social. Autor y articulista de
              diferentes publicaciones en diarios, revistas de divulgación y
              especializadas en temas de temas salud y también de varios
              capítulos en libros sobre Psicoanálisis. ​ Director y Editor de la
              revista científico-cultural <strong>ENKI</strong> (D.L. PM 1625-2011) Revista
              impresa con 9 años ininterrumpidos de publicaciones.
            </p>
          </div>
        </div>
      </div>

      <Carousel className="backgroundCarousel">
        <Carousel.Item>
          <img
            className="  img-fluid"
            src="./resize1.jpeg"
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
            src="./s2.jpg"
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
            src="./resize1.jpeg"
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
            src="s5.jpg"
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
            src="c5.jpg"
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

export default Features;
