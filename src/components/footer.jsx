import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ padding: "5px"}}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               CodeOdyssey
              </h6>
              <p>
              This website is a resource for students who are interested in learning about web development, Android development, and cloud computing.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Cloud Computing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Android Development
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Web Development
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Addtional Link</h6>
              <p>
                <a href='https://roadmap.sh/react-native' className='text-reset'>
                React Native Developer
                </a>
              </p>
              <p>
                <a href='https://roadmap.sh/cyber-security' className='text-reset'>
                Cyber Security Expert
                </a>
              </p>
              <p>
                <a href='https://roadmap.sh/ux-design' className='text-reset'>
                UX Design
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pune, 411021, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                codeodyssey@rediffmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 0001867895
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 0001867895
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          CodeOdyssey.com
        </a>
      </div>
    </MDBFooter>
  );
}