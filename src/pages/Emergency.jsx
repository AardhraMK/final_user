import React, { useState } from "react";
import diab from "./diab.jpg";

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
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      style={{ margin: "5%", marginBottom: "15%" }}
      
      
    >
      {/* Container with image and description */}
      <div
        className="container "
        style={{
          marginBottom: "10px",
          backgroundColor: "white",
          borderRadius: "18px",
        }}
      >
        <div className="row">
          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "6%",
              fontSize: "40px",
              marginLeft: "20%",
              marginTop: "8%",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: "inherit",
            }}
          >
            WANT AN IMMEDIATE DIAGNOSIS?
          </h2>
          <div className="col-md-6">
            <img
              src={diab}
              alt="Lab"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-6">
            {/* <h2 style={{fontWeight:'bold'}}>WANT AN IMMEDIATE DIAGNOSIS?</h2> */}
            <p
              style={{
                color: "black",
                fontSize: "18px",
                marginTop: "15px",
                fontFamily: "inherit",
              }}
            >
              We provide top-notch diagnostic services to ensure the health and
              well-being of our patients.We provide top-notch diagnostic
              services to ensure the health and well-being of our patients. Our
              team of experts is dedicated to delivering accurate results and
              personalized care. From selections of preferred Labs to preferred Tests,we provide a
              unique feature of eliminating the wait for a medical diagnosis. Laboratory diagnostics is conventionally defined as a medical science aiming to generate useful clinical information by quantifying the concentration, composition or structure of many different analytes in different biological fluids (1). The everyday activity of laboratory services encompasses performing many different tests for generating qualitative, semi-quantitative or, most commonly, quantitative data. These numbers (alternatively referred to as “values”) can then be transformed into useful medical information by clinical interpretation, a process developing through experience, practice, knowledge and continuous critical analysis, which is actually based on a multifaceted reasoning where the different pieces (i.e. demographical variables, familial and personal history, signs and symptoms, results of diagnostic investigations, comorbidities, treatments) of the intricate puzzle (i.e. the patient) are combined
            </p>
          </div>
          <div 
    style={{
      color:'black',
      fontSize:'18px',
      marginTop:'15px',
      fontFamily:'inherit',
      opacity: '0',
      animation: 'fadeIn 2s forwards'
    }}
  >
    Laboratory tests can be valuable aids in making a diagnosis, but, as screening tools for detecting hidden disease in asymptomatic individuals, their usefulness is limited. The value of a test as a diagnostic aid depends on its sensitivity and specificity. Sensitivity is the measure of the percentage of individuals with the disease who have a positive test result (i.e., people with the disease who are correctly identified by the procedure), and specificity is the measure of the percentage of people without the disease who have a negative test result (i.e., healthy individuals correctly identified as free of the disease). If a test is 100 percent sensitive and the test result is negative, it can be said with certainty that the person does not have the disease, because there will be no false-negative results. If the test is not specific enough, however, it will yield a large number of false-positive results (positive test results for those who do not have the disease). The ideal test would be 100 percent sensitive and 100 percent specific.
  </div>
        </div>

        <p
          style={{
            marginLeft: "35%",
            marginTop: "15%",
            marginBottom: "3%",
            fontWeight: "bold",
            fontSize: "27px",
            color: "black",
          }}
        >
         
        </p>
        {/* Contact form */}
        <div className="ltn__contact-message-area mb-120 mb--100">
          {/* <h1 style={{marginLeft:'30%',fontSize:'45px'}}>EMERGENCY BOOKING</h1> */}
          <div
            className="container"
            style={{ marginBottom: "120px", marginTop: "20px" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <h1
                    style={{ fontWeight: "bold", fontSize: "40px",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    className="title-2"
                  >
                    EMERGENCY CONTACT
                  </h1>

                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter email"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-date ">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="message"
                        placeholder="Enter the reason of emergency"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <p>
                      <label className="input-info-save mb-0">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Save my name, email, and website in this browser for the
                        next time.
                      </label>
                    </p>
                    <div className="btn-wrapper mt-0">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                        style={{ backgroundColor: "#0a9a73" }}
                      >
                        Request
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20"></p>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="ltn__small-product-list-area section-bg-1 pt-115 pb-90 mt-90"
              style={{ borderRadius: "18px" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                      <h1 className="section-title"style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>AMBULANCE LIST</h1>
                      <div class="search-container">
  <input
    type="text"
    id="searchInput"
    placeholder="Search for ambulances..."
    
  />
  <i class="fas fa-search search-icon"></i>
</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Example of a responsive ambulance item */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>AlphaOne Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Swift Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Mayfair Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Niya Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Mercy Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__small-product-item">
                      <div className="small-product-item-info">
                        <h2 className="product-title">
                        <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Karuna Ambulance</a>
                        </h2>
                        <div className="product-price">
                          <span>Cantonment area, kannur</span>
                          <br />
                          <span>6573849303</span>
                          <div class="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="far fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
