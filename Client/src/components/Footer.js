import React from "react";
import "../css/footer.css";

const Footer = (props) => {
  return (
    <div>
      <footer id="footer" className="dark border-0">
        <div className="container center">
          <div className="footer-widgets-wrap">
            <div className="row mx-auto clearfix">
              <div className="col-lg-4">
                <div className="widget clearfix">
                  <h4>Site Links</h4>
                  <ul className="list-unstyled footer-site-links mb-0">
                    <li>
                      <a
                        href="#"
                        data-scrollto="#wrapper"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        Top
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-scrollto="#section-about"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-scrollto="#section-works"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        Works
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-scrollto="#section-services"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-scrollto="#section-blog"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-scrollto="#section-contact"
                        data-easing="easeInOutExpo"
                        data-speed="1250"
                        data-offset="70"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="widget subscribe-widget clearfix"
                  data-loader="button"
                >
                  <h4>Subscribe</h4>
                  <div className="widget-subscribe-form-result"></div>
                  <form
                    id="widget-subscribe-form"
                    action="include/subscribe.php"
                    method="post"
                    className="mb-0"
                    noValidate="novalidate"
                  >
                    <input
                      type="email"
                      id="widget-subscribe-form-email"
                      name="widget-subscribe-form-email"
                      className="form-control form-control-lg not-dark required email"
                      placeholder="Your Email Address"
                      autoComplete="off"
                    />
                    <button
                      className="button button-border button-circle button-light topmargin-sm"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget clearfix">
                  <h4>Contact</h4>
                  <p className="lead">
                    Monishi Parekh : +91 9664284268
                    <br/>
                    <br />
                    Plot No. 65, Godown A, Sector No. 23,
                    <br />
                    Bank Of India Rd, Turbhe,
                    <br />
                    Navi Mumbai, Maharashtra-400703.
                    <br />
                    {/* E-mail : vegalighting@hotmail.com */}
                  </p>
                  <div class="social">
                    <i class="fa-brands fa-facebook-square"></i>
                    <a href="https://www.instagram.com/nico.homedecor/">
                    <i class="fa-brands fa-instagram-square"></i>
                    </a>
                    <i class="fa-brands fa-twitter-square"></i>
                    <i class="fa-brands fa-whatsapp-square"></i>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="copyrights">
          <div className="container center clearfix">
            Copyrights DecorLife 2023 | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
