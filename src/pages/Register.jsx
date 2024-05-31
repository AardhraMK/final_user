import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import labmain5 from './labmain5.webp';

function Register() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including image data
  };

  return (
    <>
      <div className="section5" id='section5' style={{ position: 'relative', width: '100%', height: '100vh' }}>
        {/* Image */}
        <img src={labmain5} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        {/* Form Container */}
        <div style={{ position: 'absolute', top: '50%', width: '50%', marginRight: '25%', right: '4%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '30px', borderRadius: "20px", height: "85%" }}>
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center" style={{ fontFamily: "Helvetica", marginTop: "12px" }}>REGISTER HERE!</h1>
            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>Name</Form.Label>
                <Form.Control placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>Email</Form.Label>
                <Form.Control placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              {/* Phone Field */}
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" style={{ width: '70%' }} />
              </Form.Group>

              {/* Image Upload Field */}
              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>Upload Image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>State</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>PinCode</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" style={{ marginLeft: "45%", borderRadius: "3px", padding: "5px 10px", marginTop: "30px" }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
