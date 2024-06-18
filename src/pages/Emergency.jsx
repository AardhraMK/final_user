import React, { useState } from "react";
import diab from './diab.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedLab: "",
    selectedTest: "",
    date: "",
    timeslot: "",
    message: "",
    agree: false,
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      selectedLab: "",
      selectedTest: "",
      date: "",
      timeslot: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div style={{ margin: "5%", marginBottom: "15%" }} className="section one" id="section1">
      {/* Container with image and description */}
      <div className="container " style={{ marginBottom: "10px",backgroundColor:'white',borderRadius:'18px' }}>
     
        <div className="row">
        <h2 style={{fontWeight:'bold',marginBottom:'6%',fontSize:'40px',marginLeft:'20%',marginTop:'8%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',fontFamily:'inherit'}}>WANT AN IMMEDIATE DIAGNOSIS?</h2>
          <div className="col-md-6">
            <img src={diab} alt="Lab" style={{ maxWidth: "100%", height: "100%", }} />
          </div>
          <div className="col-md-6">
            {/* <h2 style={{fontWeight:'bold'}}>WANT AN IMMEDIATE DIAGNOSIS?</h2> */}
            <p style={{color:'black',fontSize:'18px',marginTop:'15px',fontFamily:'inherit'}}>
            We provide top-notch diagnostic services to ensure the health and well-being of our patients.We provide top-notch diagnostic services to ensure the health and well-being of our patients. Our team of experts is dedicated to delivering accurate results and personalized care. Book an appointment with us today! From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. We provide top-notch diagnostic services to ensure the health and well-being of our patients. Our team of experts is dedicated to delivering accurate results and personalized care. Book an appointment with us today! From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis.
            </p>
          </div>
          <div style={{color:'black',fontSize:'18px',marginTop:'15px',fontFamily:'inherit'}}>
          We provide top-notch diagnostic services to ensure the health andOur team of experts is dedicated to delivering accurate results and personalized care. Book an appointment with us today! From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. We provide top-notch diagnostic services to ensure the health and well-being of our patients. Our team of experts is dedicated to delivering accurate results and personalized care. Book an appointment with us today! From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis.Our team of experts is dedicated to delivering accurate results and personalized care. Book an appointment with us today! From selections of preferred Labs to preferred Tests,we provide a unique feature of eliminating the wait for a medical diagnosis. We provide top-notch diagnostic services to ensure the health and well-being of our patients.
          </div>
        </div>
       
      
      <p style={{marginLeft:'35%',marginTop:'15%',marginBottom:'%',fontWeight:'bold',fontSize:'27px',color:'black'}}>APPLY FOR QUICK TEST NOW!!</p>
      {/* Contact form */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        {/* <h1 style={{marginLeft:'30%',fontSize:'45px'}}>EMERGENCY BOOKING</h1> */}
        <div className="container" style={{ marginBottom: "120px", marginTop: "20px" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }} className="title-2">
                  EMERGENCY BOOKING
                </h1>
                
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-reason ltn__custom-icon">
                        <select name="selectedLab" value={formData.selectedLab} onChange={handleInputChange}>
                          <option value="" hidden style={{ display: "none", fontWeight: "normal" }}>
                            Select Labs
                          </option>
                          <option value="OptiGen Labs">OptiGen Labs</option>
                          <option value="Hyatt Labs">Hyatt Labs</option>
                          <option value="Genotics Labs">Genotics Labs</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-reason ltn__custom-icon">
                        <select name="selectedTest" value={formData.selectedTest} onChange={handleInputChange}>
                          <option value="" hidden style={{ display: "none", fontWeight: "normal" }}>
                            Select Test
                          </option>
                          <option value="Blood Routine Test">Blood Routine Test</option>
                          <option value="Kidney Function Test">Kidney Function Test</option>
                          <option value="Urine Test">Urine Test</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-date ">
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-timeslot ltn__custom-icon">
                        <select name="timeslot" value={formData.timeslot} onChange={handleInputChange}>
                          <option value="" hidden style={{ display: "none", fontWeight: "normal" }}>
                            Select Timeslot
                          </option>
                          <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                          <option value="11:00 AM - 12:00 AM">11:00 AM - 12:00 AM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea name="message" placeholder="Enter the reason of emergency" value={formData.message} onChange={handleInputChange}></textarea>
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" checked={formData.agree} onChange={handleCheckboxChange} /> Save my name, email, and website in this browser for the next time.
                    </label>
                  </p>
                  <div className="btn-wrapper mt-0">
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"style={{backgroundColor:'#0a9a73'}}>
                      Book Now
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
