import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Nav.css';

const Footer = () => {
  return (
    <div className="text-center" style={{ backgroundColor: '#0d2860' }}>
      <footer className="py-5">
        <Row>
          {/* <Col sm={6} md={2} className="mb-3">
            <h5>Shop Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/mobiles" className="nav-link p-0 text-muted">
                  Mobiles
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/laptops" className="nav-link p-0 text-muted">
                  Laptops
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/earbuds" className="nav-link p-0 text-muted">
                  Earbuds
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/accessories" className="nav-link p-0 text-muted">
                  Accessories
                </a>
              </li>
            </ul>
          </Col> */}

          <Col sm={6} md={2} className="mb-3">
            <h5 className="nav-link">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/contact" className="nav-link p-0 ">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/faq" className="nav-link p-0 ">
                  FAQs
                </a>
              </li>
            </ul>
          </Col>

          <Col sm={6} md={2} className="mb-3">
            <h5 className='nav-link'>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 ">
                  Our Story
                </a>
              </li>
              {/* <li className="nav-item mb-2">
                <a href="/team" className="nav-link p-0 text-muted">
                  Our Team
                </a>
              </li> */}
            </ul>
          </Col>

          <Col md={{ span: 5, offset: 1 }} className="mb-3">

            <Form>
              <h5 className="nav-link">Subscribe to Our Newsletter</h5>
              <p className="nav-link">Stay updated with the latest tech deals and offers from Deffritoreist</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 justify-content-center">
                <Form.Group controlId="newsletter1">
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <div className="container text-center">
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="ms-3">
              <a className="link-light" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
          <br />
          <p className='nav-link'>&copy; {new Date().getFullYear()} Deffritoreist All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
