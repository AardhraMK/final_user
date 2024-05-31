import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import labmain5 from './labmain5.jpg'; // Import your background image
import './styles.css'; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    labName: '',
    date: new Date(),
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={labmain5} alt="background" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ zIndex: 1, border: '1px solid #ccc', borderRadius: '30px', padding: '20px', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Container>
          <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 'bolder' }}> FEEDBACK </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', width: '300px' }} >NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLabName">
              <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }} >LAB NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter visited Lab"
                name="labName"
                value={formData.labName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', width: '400px' }} >DATE</Form.Label>
              <div>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  placeholderText="Select feedback date"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }} >YOUR FEEDBACK</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your feedback"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="butt1" style={{ marginLeft: '35%', marginBottom: '5%', backgroundColor: '#0a9a73', borderRadius: '10px' }} type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
