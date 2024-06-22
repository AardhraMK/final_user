import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import labmain6edit from './labmain6.webp';
import './Contact.css';

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

  const CustomInput = ({ value, onClick }) => (
    <input
      type="text"
      value={value}
      onClick={onClick}
      style={{
        border: "2px solid green",
        borderRadius: "5px",
        padding: "8px 12px",
        fontSize: "16px",
        width: '260px',
        height:'50px'
      }}
      placeholder="Select feedback date"
    />
  );

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* About Us Section */}
      <div class="container" style={{ flex: '1', marginLeft: '5%', marginRight: '5%', textAlign: 'center', marginTop: '7%',color:'white' }}>
    <h2 class="fade-in" style={{ fontFamily: 'inherit', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',color:'white' }}>TELL US MORE..</h2>
    <h5 class="fade-in" style={{ fontFamily: 'inherit', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',color:'white' }}>Provide your valuable Feedback HERE</h5>
    <p class="fade-in" style={{ color: 'black', marginTop: '5%', fontSize: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        DLabs provides users with an overall view of available labs near them, thus making it easier for various labs to be accessible to them. Users can choose from a variety of labs and packages suitable for them. DLabs aims to bring together the best of Laboratory Healthcare. DLabs provides users with an overall view of available labs near them, thus making it easier for various labs to be accessible to them. Users can choose from a variety of labs and packages suitable for them. DLabs aims to bring together the best of Laboratory Healthcare. DLabs provides users with an overall view of available labs near them, thus making it easier for various labs to be accessible to them. Users can choose from a variety of labs and packages suitable for them. DLabs aims to bring together the best of Laboratory Healthcare. DLabs provides users with an overall view of available labs near them, thus making it easier for various labs to be accessible to them. Users can choose from a variety of labs and packages suitable for them. DLabs aims to bring together the best of Laboratory Healthcare.
    </p>
</div>


      {/* Feedback Form Section */}
      <div style={{ flex: 1,marginTop:'5%',marginBottom:'5%' }}>
        <div style={{ position: 'relative', minHeight: '100vh', border: '1px solid #ccc', borderRadius: '30px', padding: '20px', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Container style={{ justifyContent: 'center', width: '70%', height: '50%' }}>
            <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 'bolder' }}> FEEDBACK </h1>
            <Form style={{ justifyContent: 'center' }} onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '15px', width: '300px', marginLeft: "3px" }} >NAME</Form.Label>
                <Form.Control style={{ border: "2px solid green", borderRadius: "5px", padding: "8px 12px", fontSize: "16px", width: '260px', height: '50px' }}
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group style={{}} controlId="formLabName">
                <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', fontSize: '15px' }} >LAB NAME</Form.Label>
                <Form.Control style={{ border: "2px solid green", borderRadius: "5px", padding: "8px 12px", fontSize: "16px", width: '260px', height: '50px' }}
                  type="text"
                  placeholder="Enter visited Lab"
                  name="labName"
                  value={formData.labName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', width: '400px', fontSize: '15px' }}>DATE</Form.Label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  customInput={<CustomInput />}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', fontSize: '15px' }} >YOUR FEEDBACK</Form.Label>
                <Form.Control style={{ border: "2px solid green", borderRadius: "5px", padding: "8px 12px", fontSize: "16px", width: '260px', height: '80px' }}
                  as="textarea"
                  rows={3}
                  placeholder="Enter your feedback"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button className="butt1" style={{ marginLeft: '32%', marginBottom: '2%', backgroundColor: '#0a9a73', borderRadius: '3px', padding: '8px 16px,', marginTop: '5%' }} type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;

