import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import labmain5 from "./labmain5.webp";
import labmain6edit from "./labmain6.webp";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Register() {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    profile_pic: null,
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleImageChange = (e) => {
    //setImage();

    setFormData({...formData, profile_pic : e.target.files[0]})
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedToJson = new FormData()

    updatedToJson.append('profile_pic',formData.profile_pic)
    updatedToJson.append('address',formData.address)
    updatedToJson.append('city',formData.city)
    updatedToJson.append('email',formData.email)
    updatedToJson.append('pincode',formData.pincode)
    updatedToJson.append('contact',formData.contact)
    updatedToJson.append('state',formData.state)

    axios.post('http://127.0.0.1:8000/customer/register/',updatedToJson).then((response)=>{console.log(response.data);})
    // Handle form submission, including image data
  };

  return (
    <>
      <div
        className="section5"
        id="section5"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        {/* Image */}
        <img
          src={labmain6edit}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.4",
          }}
        />

        {/* Form Container */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            width: "50%",
            marginRight: "25%",
            right: "1%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "30px",
            borderRadius: "20px",
            height: "85%",
          }}
        >
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            <h1
              className="text-center"
              style={{ fontFamily: "Helvetica", marginTop: "12px" }}
            >
              EDIT YOUR PROFILE HERE!
            </h1>
            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  Name
                </Form.Label>
                <Form.Control
                onChange={handleInputChange}
                  name="name"
                  style={{ borderRadius: "8px" }}
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  Email
                </Form.Label>
                <Form.Control
                onChange={handleInputChange}
                  name="email"
                  style={{ borderRadius: "8px" }}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              {/* Phone Field */}
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    marginLeft: "6px",
                    color: "black",
                  }}
                >
                  Phone
                </Form.Label>
                <Form.Control
                  name="contact"
                  onChange={handleInputChange}
                  type="tel"
                  placeholder="Enter phone number"
                  style={{ width: "70%", borderRadius: "8px" }}
                />
              </Form.Group>

              {/* Image Upload Field */}
              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  Upload Image
                </Form.Label>
                <Form.Control
                  name="profile_pic"
                  style={{ borderRadius: "8px" }}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  Address
                </Form.Label>
                <Form.Control
                  name="address"
                  style={{ borderRadius: "8px" }}
                  type="text"
                  placeholder="Enter address"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  City
                </Form.Label>
                <Form.Control
                  name="city"
                  style={{ borderRadius: "8px" }}
                  placeholder="Enter city"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  State
                </Form.Label>
                <Form.Control
                  name="state"
                  style={{ borderRadius: "8px" }}
                  placeholder="Enter state"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ fontWeight: "bold", marginLeft: "6px" }}>
                  PinCode
                </Form.Label>
                <Form.Control
                  name="pincode"
                  style={{ borderRadius: "8px" }}
                  placeholder="Enter pincode"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Button
              variant="success"
              type="submit"
              style={{
                marginLeft: "45%",
                borderRadius: "3px",
                padding: "5px 10px",
                marginTop: "30px",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
