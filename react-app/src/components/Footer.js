import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="contributor_list">
        <div className="contributor_card">
          <p>Daniel Caicedo Llano</p>
          <div className="social_links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dcaicedo87"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/daniel-caicedo-llano-5191a254/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="contributor_card">
          <p>Junki Sato</p>
          <div className="social_links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/j00nk1"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/junki-sato-7bb773208/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="contributor_card">
          <p>Leo Troper</p>
          <div className="social_links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ltroper"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leon-troper-91473a232/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="contributor_card">
          <p>Shams Shaikh</p>
          <div className="social_links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shams1987"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/shams-u-shaikh-330884229/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
