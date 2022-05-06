import React from "react";
import LogoMain from "../components/LogoMain";
import "./Libro.css";
import Carousel from "react-bootstrap/Carousel";

const libro = () => {
  return (
    <div className="backgroundAzul">
      <LogoMain />

      <div class="embed-responsive embed-responsive-16by9 m-5">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/QLp1IPVX88c?autoplay=1&mute=1&controls=0&end=24&loop=1&playlist=QLp1IPVX88c"
        ></iframe>
      </div>

      <div className="container">
        <div className="row">
          <div className="col m-auto    5">
            <a href="https://lamiradadelotroediciones.com/" target="_blank">
              <img
                className="libroImg m-auto  col-lg-10"
                src="./libro.jpg"
                alt="bla bla"
              />
            </a>
          </div>
          <div className=" col m-auto containerTexto mt-3 mb-5">
            <h1>Hay otra manera de Vivir</h1>

            <h6>“¿Por qué repito los mismos fracasos una y otra vez?</h6>
            <ul>
              <li>
                ¿Por qué no consigo alejarme de las relaciones tóxicas o que no
                me convienen? ¿Por qué llego a humillarme mendigando cariño o
                aprobación? ¿Por qué me avergüenza tener ambiciones, éxito en
                mis proyectos? ¿Quizás, en el fondo, siento que no merezco una
                vida mejor? Tal vez, inconscientemente, sea así. Puede que tema
                lo que desee. O peor aún, que disfrute con ese dolor: con las
                mismahistorias de rechazo, de desprecio, de desencuentros, de
                frustraciones, de soledad y tristeza, …”
              </li>
              <li>
                Es posible que estos lamentos y aflicciones les sean familiares.
                Algunas personas están ancladas en la queja pero no hacen nada
                por cambiar. Es más, se enfadarían si les facilitas una solución
                para salir de esa posición de víctimas, o si intentas hacerles
                comprender que buscar culpables no es más que proyectar en los
                demás aquello que no soportamos de nosotros mismos. Otras, sin
                embargo, intentan dejar la vida que llevan y no les satisface
                pero tampoco les resulta sencillo cambiar ¿Por qué? ¿Por qué
                esas profundas resistencias al cambio?
              </li>
            </ul>
          </div>
          <div className="  m-auto containerTexto  mb-5">
            <ul>
              <li>
                José García Peñalver, psicólogo clínico y psicoanalista, aporta
                en este polémico libro un peculiar punto de vista para analizar
                y explicar con profundidad la infelicidad generalizada de la
                vida¡ moderna. Sin seguir los cánones convencionales de la
                psicología ni la psiquiatría, desarrolla la tesis de que el
                malestar se debe a algo íntimo y privado que cada cual debe
                resolver. Por tanto, expondrá el autor, es un error y una falta
                de ética buscar la solución fuera de nosotros. Todo síntoma
                posee un sentido y se halla estrechamente enlazado a la vida
                psíquica del sujeto, nos dirá. Es en la propia persona que se
                hayan exclusivamente las claves de su curación. Y también de su
                disfrute en la vida, puesto que el sufrimiento, la inhibición,
                la angustia, en definitiva, el malestar que padece se debe aun
                conflicto psíquico interno aún no resuelto, que lo confunde y
                desorienta, explicará García Peñalver. Salir de esa vida
                inauténtica en la que se halla atrapado implica tomar una
                decisión. Una decisión comprometida con su interior, verdadera.
                Una decisión que le situará frente a otra manera de vivir, en la
                que sus deseos no sean los deseos del Otro: familiar o
                ideológico. Una manera libre y autónoma de vivir, su propia
                vida.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Carousel className="backgroundCarousel  pb-5">
        <Carousel.Item>
          <img className="  img-fluid" src="./l1.jpeg" alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src="./l2.jpeg" alt="Second slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src="./l4.jpeg" alt="Second slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default libro;
