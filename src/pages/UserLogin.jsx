import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import lab from './labmain5.webp';
import Lottie from 'lottie-react';
// import animation from './Animate.json';
import Image from 'react-bootstrap/Image';
import animation1 from './Animate1.json';
// import review1 from'./review1.png';
import person from './person.svg';
import loginback from './loginback.avif';
import user2 from './user2.gif';
import loginim from './loginim.jpg';
import user3 from './user3.gif';
import labmain1 from './labmain1.jpg';
import labmain6 from './labmain6.webp';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
  return (
    <div>
    <Container style={{ marginBottom:'10px' }}>
      <Row noGutters>
        <Col className='colorbox' style={{ paddingRight: '0' }}>
          {/* Content for the first column */}
          <div
            className='userbox'
            style={{
              backgroundColor: 'lightblue',
              height: '700px',
              textAlign: 'center',
              lineHeight: '200px',
              borderRadius: '5px',
              
              margintop: '80%',
              position: 'relative',
              // backgroundImage: `url(${loginim})`, // Add your background image here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
              }}
            >
              <div style={{ height: '170%' }}>
                <div>
                  <h2 style={{ marginTop: '70%' }}>Welcome Back!</h2>
                  <h4 style={{ fontSize: '21px' }}>Your Health journey starts here...</h4>
                </div>
                <div>
                  <Image src={user2} style={{ width: '25%', height: '20%', marginTop: '7%', marginBottom: '10px', borderRadius: '60%' }} />
                </div>
                <Form>
                  {/* <Form.Group controlId="formGridPhone"> */}
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    style={{
                      borderRadius: '2px',
                      width: '80%',
                      boxSizing: 'border-box',
                      paddingLeft: '40px',
                      alignItems: 'center',
                      marginLeft: '40px',
                      marginRight: '50px',
                    }}
                  />

                  <Button
                    variant='success'
                    type="submit"
                    style={{
                      borderRadius: "3px",
                      padding: "6px 20px",
                      backgroundColor: 'mediumseagreen',
                      marginBottom: '35%',
                      marginTop: '1px',
                    }}
                  >
                    Request OTP
                  </Button>

                  <a href="/register">
                    <h6>New to DLabs? REGISTER Here</h6>
                  </a>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col className='colorbox' style={{ paddingLeft: '0' }}>
          {/* Content for the second column */}
          <div style={{ backgroundColor: 'white', height: '600px', textAlign: 'center', lineHeight: '200px' }}>
            {/* <Lottie animationData={animation1} /> */}
            <img src={labmain6} alt="Background" style={{ maxwidth:'1920px', height: '700px', objectFit: 'cover' }} />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}









// export default function Login() {
//   return (
//     <Container className="over no-gutters" style={{ minWidth: "400px", margin: '80px', position: 'relative' }}>
//       <Row>
//         <Col md={6} style={{ height: '510px', position: 'relative' }}>
//           <Lottie animationData={animation1} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
//           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
//             <div style={{ textAlign: 'center' }}>
//               <h2>Welcome Back!</h2>
//               <h4>Your Health journey starts here...</h4>
//               <div style={{ marginLeft: '130px' }}>
//                 <Lottie animationData={animation} style={{ maxWidth: "30%"}} />
//               </div>
//               <Form>
//                 <Form.Group controlId="formGridPhone">
//                   <Form.Label style={{ fontWeight: "bold" }}><h4>Phone</h4></Form.Label>
//                   <Form.Control type="tel" placeholder="Enter phone number" style={{ borderRadius: '10px' }} />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" style={{ borderRadius: "3px", padding: "5px 10px", marginTop: "10px", backgroundColor: 'teal' }}>
//                   Request OTP
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </Col>
//         <Col md={6} className='over1'>
//           <img src={lab} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }
