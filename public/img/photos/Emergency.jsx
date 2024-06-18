import React, { useState } from "react";
import labb from './labb';

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
    <div style={{ margin: "10%", marginBottom: "15%" }} className="section one" id="section1">
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container" style={{ marginBottom: "120px", marginTop: "20px" }}>
          <div className="row">
            <div className="col-lg-12">
            <img src={labim6} alt="Lab" style={{ maxWidth: "100%", height: "auto" }} />
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Welcome to our emergency booking service. Please fill out the form below to book an appointment with us.
        </p>
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
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
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
  );
};

export default ContactForm;




