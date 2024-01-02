import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './home.css'
import Axios from 'axios'
import form from '../images/form.png'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


// const DB = 'mongodb+srv://cs:<testcase12>@cluster0.dy22wns.mongodb.net/details?retryWrites=true&w=majority'


const ContactUs = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [showModal, setShowModal] = useState(false);
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [messageError, setMessageError] = useState('');
const [errors, setErrors] = useState({ name: '', email: '', message: '' });
const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

const handleSubmit = async (e) => {
  e.preventDefault();

  const isValidName = /^[A-Za-z\s]+$/.test(name);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const newErrors = {};

    if (!name || !isValidName) {
      newErrors.name = 'Invalid name format. Only letters and spaces are allowed.';
    } else {
      newErrors.name = '';
    }

    if (!email || !isValidEmail) {
      newErrors.email = 'Invalid email format. Please enter a valid email address.';
    } else {
      newErrors.email = '';
    }

    if (!message) {
      newErrors.message = 'Message cannot be empty.';
    } else {
      newErrors.message = '';
    }

    const hasNoErrors = !Object.values(newErrors).some((error) => error);

    if (hasNoErrors) {
      try {
    // Make a POST request to Formspree for email notifications
    const formSpreeEndpoint = 'https://formspree.io/f/mrgwjlqz'; 
    const formSpreeResponse = await Axios.post(formSpreeEndpoint, {
      name,
      email,
      message,
    });

    // Make a POST request to your Express server to insert data into MongoDB
    const serverResponse = await Axios.post('http://localhost:4000/insert', {
      name,
      email,
      message,
    });

    setName('');
    setEmail('');
    setMessage('');

    // Set success message in modal
    setModalContent({
      title: 'Success!',
      body: 'Your query has been noted. You can check that in the profile/contribution section.',
    });

    // Show the confirmation modal after successful form submission
    handleShow();
  } catch (error) {
    console.error('Error submitting data:', error);
    // Handle error if needed

    // Set error message in modal
    setModalContent({
      title: 'Error!',
      body: 'There was an error submitting your query. Please try again later.',
    });

    // Show the error modal
    handleShow();
      }
    } else {
      // Show the error modal if form validation fails
      setModalContent({
        title: 'Error!',
        body: 'Please check the form fields for errors and try again.',
      });

      handleShow();
    }
};




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
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className="mb-1">Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} className="mb-3" />
              <div className="error-message">{nameError}</div>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="mb-1">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="mb-3" />
              <div className="error-message">{emailError}</div>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className="mb-1">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} className="mb-3" />
              <div className="error-message">{messageError}</div>
            </Form.Group>

              <div className="error-message">{errors.name}</div>
              <div className="error-message">{errors.email}</div>
              <div className="error-message">{errors.message}</div>

                <Button variant="primary" type="submit" className="rounded-pill" onClick={handleShow}>
                Submit
                </Button>
              </Form>

              <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>{modalContent.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalContent.body}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};

export default ContactUs;
