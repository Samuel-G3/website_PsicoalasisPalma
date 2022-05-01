import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="d-flex flex-column h-100">
        {/* <section className="hero text-white py-5 flex-grow-1">
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
        </section> */}

        <footer className=" background w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="text-dark mb-3">Hay otra menera de vivir</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <p className="small text-muted">
                      La Mirada del Otro Ediciones
                    </p>
                    <a className="text-primary" href="https://lamiradadelotroediciones.com">
                      https://lamiradadelotroediciones.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-dark mb-3">Links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6">
                <h5 className="text-dark mb-3">Contacto</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#"> 871 94 89 01</a>
                  </li>
                  <li>
                    <a className="text-primary" href="mailto:gabinete@psicoanalisispalma.com">
                      gabinete@psicoanalisispalma.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Carrer de Tomàs Forteza, 17, 07006 Palma
                      <span>Illes Balears</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  className="fluid w-50"
                  src="./logocirBLue.png"
                  alt="Second slide"
                />

                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a className="text-primary" href="#">
                    www.gabinetepsicoanaliticopalma.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form> */
}
