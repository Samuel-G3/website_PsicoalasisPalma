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

        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
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
                <h5 className="text-white mb-3">Quick links</h5>

                <div class="contact_info">
                  <div class="single_info">
                    <div class="icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="info">
                      
                      <p>
                        <a href="tel:+919246147999">+91 924-614-7999</a>
                      </p>
                    </div>
                  </div>
                  <div class="single_info">
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info">
                      <p>
                        <a href="mailto:info@deneb.com">info@deneb.com</a>
                      </p>
                      <p>
                        <a href="mailto:services@deneb.com">
                          services@deneb.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="single_info">
                    <div class="icon">
                      <i class="fa fa-envelopes-bulk"></i>
                    </div>
                    <div class="info">
                      <p>
                        125, Park street aven, Brocklyn,<span>Newyork.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="col-lg-4 col-md-6">
                {/* <h5 className="h1 text-white">FB.</h5> */}
                <img
            className="d-block w-100"
            src="https://i.imgur.com/WKRDocJ.png"  
            alt="Second slide"
          />
                {/* <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p> */}
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
