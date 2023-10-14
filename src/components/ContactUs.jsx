import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './home.css'
import chatbot from '../images/chatbot.png'
import form from '../images/form.png'

const ContactUs = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#2F3C7E"}}>
        <Container className="py-5">
          <Row className="h-100 align-items-center py-5" >
            <Col lg={6}>
              <h1 className="display-4" style={{ color: "#ffffff", marginRight: "30px" }}>About CodeOdyssey</h1>
              <p className="font-italic text-muted mb-4 white-text">
                CodeOdyssey is a place where students can gain guidance about their interests in the vast internet landscape. Our content is curated and developed from an entry-level student perspective by a passionate group of young engineers.
                </p>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#FBEAEB"}}>
        <Container className="py-5">
          <Row className="align-items-center mb-5">
            <Col lg={6} order={2} orderLg={1}>
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Discover Your Domain</h2>
              <p className="font-italic text-muted mb-4">We have developed a feature where you can take a beta test and find the most suitable domain based on your answers. Note: You are free to choose any other domain, as we believe in your freedom to learn whatever you desire. Happy Learning!</p>
              <Button href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</Button>
            </Col>
            <Col lg={5} className="px-5 mx-auto" order={1} orderLg={2}>
              <img src={form} alt="" className="img-fluid mb-4 mb-lg-0" />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={5} className="px-5 mx-auto">
              <img src={chatbot} alt="ChatBot" className="img-fluid mb-4 mb-lg-0" />
            </Col>
            <Col lg={6}>
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Meet SID, Your Virtual Guide</h2>
              <p className="font-italic text-muted mb-4">We have integrated a ChatGPT chatbot (SID) so you don't need to visit the ChatGPT website repeatedly for doubts. Just ask SID, your AI-powered assistant!</p>
              <Button href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#00008B" }}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col lg={5}>
            <h2 className="display-4 font-weight-light white-text">Meet Our Team</h2>
            <p className="font-italic text-muted white-text">Our dedicated team is here to support your learning journey.</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xl={3} sm={6} mb={5}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Manuella Nevoresky</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </Col>
          <Col xl={3} sm={6} mb={5}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Samuel Hardy</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </Col>
          <Col xl={3} sm={6} mb={5}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Tom Sunderland</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </Col>
          <Col xl={3} sm={6} mb={5}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">John Tarly</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      </div>

      <div style={{ backgroundColor: "#FBEAEB", padding: "50px 0" }}>
        <Container>
        <h2 className="display-4 font-weight-light mb-4 text-center">Get in Touch</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label className="mb-1">Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" className="mb-3" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="mb-1">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" className="mb-3" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label className="mb-1">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" className="mb-3" />
                </Form.Group>

                <Button variant="primary" type="submit" className="rounded-pill">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};

export default ContactUs;
