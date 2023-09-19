import React from 'react';

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Information</h6>
              <ul className="list-unstyled footer-link mt-4">
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Resources</h6>
              <ul className="list-unstyled footer-link mt-4">
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
              <p className="contact-info mt-4">Contact us if you need help with anything</p>
              <p className="contact-info">+01 123-456-7890</p>
              <div className="mt-5">
                <ul className="list-inline">
                  <li className="list-inline-item"><i className="fab facebook footer-social-icon fa-facebook-f"></i></li>
                  <li className="list-inline-item"><i className="fab twitter footer-social-icon fa-twitter"></i></li>
                  <li className="list-inline-item"><i className="fab google footer-social-icon fa-google"></i></li>
                  <li className="list-inline-item"><i className="fab apple footer-social-icon fa-apple"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">2019 © Ankit, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
