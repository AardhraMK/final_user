import React, { useState } from "react";
// import micro from "./micro.gif";
import bokk2 from "./bokk2.gif";
import chem from "./chem.jpg";
import dna from "./dna.gif";
import dna2 from "./dna2.avif";
import carousel1 from "./carousel1.jpeg";
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import postnatal2 from "./postnatal2.gif";
import "./Myacc.css";
function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      {/* <!-- SLIDER AREA START (slider-3) --> */}
      <div
        className="ltn__slider-area ltn__slider-3  section-bg-1"
        id="section3"
      >
       
        <div
          style={{ backgroundColor: "white" }}
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
        >
          {/* <!-- ltn__slide-item --> */}
          <div 
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bs-bg="img/photos/labmain7.webp"
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                        <h1
                          style={{ color: "#0A9A73",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                          className="slide-title animated "
                        >
                          {" "}
                          Leading the way in Laboratory Technology
                        </h1>
                        <div className="slide-brief animated">
                          <p style={{ color: "#0A9A73",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Every diagnosis, every treatment,crafted with
                            expertise and empathy
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          {/* <a href="shop.html" className="theme-btn-1 btn btn-effect-1">View Details</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ltn__slide-item --> */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bs-bg="img/photos/labmain9.jpg"
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                        <h1
                          style={{ color: "#0A9A73",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                          className="slide-title animated "
                        >
                          {" "}
                          Certified Laboratories <br />
                          and Facilities{" "}
                        </h1>
                        <div className="slide-brief animated">
                          <p style={{ color: "#0A9A73",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Every diagnosis, every treatment,crafted with
                            expertise and empathy
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          {/* <a href="shop.html" className="theme-btn-1 btn btn-effect-1">View Details</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ltn__slide-item --> */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---"
            data-bs-bg="img/photos/bokk2.gif"
          >
            <div className="ltn__slide-item-inner text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                        <h1
                          style={{ color: "white",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                          className="slide-title animated "
                        >
                          {" "}
                          Experience <br />
                          the best of Healthcare{" "}
                        </h1>
                        <div className="slide-brief animated">
                          <p style={{ color: "white",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Rewriting medical practices,one patient at a time
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          {/* <a href="shop.html" className="theme-btn-1 btn btn-effect-1">View Details</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
        </div>
      </div>
      {/* <!-- SLIDER AREA END --> */}

      {/* <!-- PRODUCT AREA START (product-item-3) --> */}
      <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1
                  style={{ fontSize: "40px", color: "black",fontFamily:'inherit', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  className="section-title"
                >
                  LABS NEAR YOU
                  
                </h1>
                {/* <!-- SEARCH AREA BEGIN --> */}

                <div
      className="header-search-2"
      style={{
        maxWidth: '55%',
        marginLeft: '22.5%',
        marginTop: '5%',
        marginRight: '22.5%',
      }}
    >
      <form id="#123" method="get" action="#">
        <input type="text" name="search" placeholder="Search here..." />
        <button type="submit">
          <span><i className="icon-search"></i></span>
        </button>
      </form>
    </div>

      {/* <!-- SEARCH AREA END --> */}
                
              </div>
              
            </div>
          </div>
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l1.webp" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">GENOTICS LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Caltex,Kannur</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Labdetails2" className="zoomable">
                <img src="img/photos/l2.webp" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">ORION LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Thana,Kannur</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l3.jpg" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">LEO LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l4.jpg" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">RIOTT INNOVATIONS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!--  --> */}
          </div>
        </div>

        <div className="container">
          {/*  */}
          <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l5.webp" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">LION LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l6.jpg" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">HYATT LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l7.jpg" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">NEETHI DIAGNOSTICS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div>
    </div>
</div>

            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
    <div style={{ backgroundColor: 'white' }} className="ltn__product-item ltn__product-item-3 text-center">
        <div className="product-img">
            <a href="/Lab_details" className="zoomable">
                <img src="img/photos/l8.webp" alt="#" />
            </a>
            <div className="product-hover-action">
                {/* Add your hover action buttons here */}
            </div>
        </div>
        <div className="product-info">
            <div className="product-ratting">
               
            </div>
            <h2 className="product-title">
                <a href="product-details.html">STELLAR LABS</a>
            </h2>
            <div className="product-price">
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "8px" }} />
                    <a> Kannur, koodali</a>
                </span>
            </div>
        </div> 
    </div>
</div>

            {/* <!--  --> */}
          </div>
        </div>
      </div>
      {/* <!-- LABS AREA END --> */}

      {/* <!-- PACKAGE START  --> */}
      <div class="ltn__blog-area pt-115 pb-70" id="section2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2--- text-center">
                <h1 style={{ color: "black", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',marginBottom:'5%' }} class="section-title">
                  POPULAR PACKAGES
                </h1>
              </div>
            </div>
          </div>
          <div class="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* <!-- package 1 --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/photos/womens1.jpg" alt="#" />
                  </a>
                </div>
                <div class="ltn__blog-brief" style={{ height: "240px" }}>
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>OptiGen Labs
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>15 tests included
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">
                      Women's Advanced Healthcare Package with Stress Impact
                      Checkup
                    </a>
                  </h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i
                            class="fas fa-rupee-sign"
                            style={{ color: "green" }}
                          ></i>
                          1499
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PACKAGE 2--> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/photos/men2.jpg" alt="#" />
                  </a>
                </div>
                <div class="ltn__blog-brief" style={{ height: "245px" }}>
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>Hyatt Labs
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>23 tests included
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">
                      Men's Master Checkup with Arthritis and Cancer Screening with Follow Ups
                    </a>
                  </h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i
                            class="fas fa-rupee-sign"
                            style={{ color: "green" }}
                          ></i>
                          2099
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PACKAGE 3 --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="/img/photos/womens.jpg" alt="#" />
                  </a>
                </div>
                <div class="ltn__blog-brief" style={{ height: "240px" }}>
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>Stellar Labs
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>22 Tests included
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">
                      PostNatal Health Checkup for New Moms,with PostPartum
                      Stress and folic acid check{" "}
                    </a>
                  </h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i
                            class="fas fa-rupee-sign"
                            style={{ color: "green" }}
                          ></i>
                          1299
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PACKAGE 4 --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/photos/seniors.jpg" alt="#" />
                  </a>
                </div>
                <div class="ltn__blog-brief" style={{ height: "240px" }}>
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>Leo Labs
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>67 tests included
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">
                      Seniors citizen Healthcare and Checkup with sessions of
                      pysiotherapy{" "}
                    </a>
                  </h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i
                            class="fas fa-rupee-sign"
                            style={{ color: "green" }}
                          ></i>
                          1499
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PACKAGE 5 --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="img/photos/running.webp" alt="#" />
                  </a>
                </div>
                <div class="ltn__blog-brief" style={{ height: "240px" }}>
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>Riott Innovations
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>67 tests included
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">
                      360 Full Body Fitness and Wellbeing check(Men and Women){" "}
                    </a>
                  </h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i
                            class="fas fa-rupee-sign"
                            style={{ color: "green" }}
                          ></i>
                          1499
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
      </div>
      {/* <!-- PACKAGE AREA END -->  #############################################   PACKAGES  ###################### */}

      {/* <!-- DOCTOR AREA START (product-item-3) --> */}
      <div class="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---"style={{padding:'25px'}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div  class="section-title-area ltn__section-title-2--- text-center">
                <h1 class="section-title " style={{ color: "black", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  OUR EXPERIENCED DOCTORS
                </h1>
              </div>
            </div>
          </div>
          <div class="row ltn__tab-product-slider-one-active slick-arrow-1">
            {/* <!-- DOCTOR 1 --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div style={{backgroundColor:'white'}} class="ltn__product-item ltn__product-item-3 text-center">
                <div class="product-img">
                  <a href="product-details.html">
                    <img style={{height:'90%'}} src="img/photos/doctor5.webp" alt="#" />
                    <hr style={{color:'black'}} />
                  </a>
                  <div class="product-hover-action"></div>
                </div>
                <div class="product-info">
                  <h3 style={{ fontWeight: "bold" }} class="ltn__blog-title">
                    <a  href="blog-details.html">
                      Dr.Nived C.K
                    </a>
                  </h3>
                  <p
                    style={{
                      lineHeight: "0.2",
                      fontWeight: "bold",
                      color: "",
                    }}
                  >
                    {" "}
                    MD,MBBS,Biochemist
                  </p>
                  <p style={{ color: "" }}>
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      style={{ color: "green", paddingRight: "5px" }}
                    ></i>
                    Riott Innovations
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- DOCTOR 2 --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div style={{backgroundColor:'white'}} class="ltn__product-item ltn__product-item-3 text-center">
                <div class="product-img">
                  <a href="product-details.html">
                    <img src="img/photos/doctor6.webp" alt="#" />
                    <hr style={{color:'black'}} />
                  </a>
                  <div class="product-hover-action"></div>
                </div>
                <div class="product-info">
                 
                  <h3
                    style={{ fontWeight: "bold" }}
                    class="ltn__blog-title"
                  >
                    <a  href="blog-details.html">
                      Dr.Roopitha K
                    </a>
                  </h3>
                  <p
                    style={{
                      lineHeight: "0.2",
                      fontWeight: "bold",
                      color: "",
                    }}
                  >
                    {" "}
                    MD,MBBS,Biochemist
                  </p>
                  <p style={{ color: "" }}>
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      style={{ color: "green", paddingRight: "5px" }}
                    ></i>
                    Riott Innovations
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- DOCTOR 3 --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div style={{backgroundColor:'white'}} class="ltn__product-item ltn__product-item-3 text-center">
                <div class="product-img">
                  <a href="product-details.html">
                    <img src="img/photos/doctor2.jpg" alt="#" />
                    <hr style={{color:'black'}} />
                  </a>
                  <div class="product-hover-action"></div>
                </div>
                <div class="product-info">
                 
                  <h3 style={{ fontWeight: "bold" }} class="ltn__blog-title">
                    <a  href="blog-details.html">
                      Dr.Anna Davis
                    </a>
                  </h3>
                  <p
                    style={{
                      lineHeight: "0.2",
                      fontWeight: "bold",
                      color: "",
                    }}
                  >
                    {" "}
                    MD,MBBS,Biochemist
                  </p>
                  <p style={{ color: "" }}>
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      style={{ color: "green", paddingRight: "5px" }}
                    ></i>
                    Riott Innovations
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- DOCTOR 4 --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div style={{backgroundColor:'white'}} class="ltn__product-item ltn__product-item-3 text-center">
                <div class="product-img">
                  <a href="product-details.html">
                    <img src="img/photos/doctor4.webp" alt="#" />
                    <hr style={{color:'black'}} />
                  </a>
                  <div class="product-hover-action"></div>
                </div>
                <div class="product-info">
                 
                  <h3 style={{ fontWeight: "bold" }} class="ltn__blog-title">
                    <a  href="blog-details.html">
                      Dr.Rajesh M
                    </a>
                  </h3>
                  <p
                    style={{
                      lineHeight: "0.2",
                      fontWeight: "bold",
                      color: "",
                      
                    }}
                  >
                    {" "}
                    MD,MBBS,Biochemist
                  </p>
                  <p style={{ color: "" }}>
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      style={{ color: "green", paddingRight: "5px" }}
                    ></i>
                    Hyatt Labs
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- DOCTOR 5 --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div style={{backgroundColor:'white'}} class="ltn__product-item ltn__product-item-3 text-center">
                <div class="product-img">
                  <a href="product-details.html">
                    <img style={{height:'90%'}} src="img/photos/doctors1.jpg" alt="#" />
                    <hr style={{color:'black'}} />
                  </a>
                  <div class="product-hover-action"></div>
                </div>
                <div class="product-info">
                 
                  <h3 style={{ fontWeight: "bold" }} class="ltn__blog-title">
                    <a  href="blog-details.html">
                      Dr.Jeeva Raj
                    </a>
                  </h3>
                  <p
                    style={{
                      lineHeight: "0.2",
                      fontWeight: "bold",
                      color: "",
                    }}
                  >
                    {" "}
                    MD,MBBS,Biochemist
                  </p>
                  <p style={{ color: "" }}>
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      style={{ color: "green", paddingRight: "5px" }}
                    ></i>
                    Riott Innovations
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
      </div>
      {/* <!-- DOCTOR AREA END --> */}

      {/* <!-- AMBULANCE AREA START --> */}
      <div class="ltn__small-product-list-area section-bg-1 pt-115 pb-90 mt-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                <h1 class="section-title"style={{fontFamily:'inherit'}}>AMBULANCE LIST</h1>
                
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
          <div class="row">
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>AlphaOne Ambulance</a>
                  </h2>
                  <div class="product-price">
                    <span>Cantonment area,kannur</span>
                    <br></br>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Swift Services</a>
                  </h2>
                  <div class="product-price">
                    <span>kannur Town</span>
                    <br></br>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>
                      Vigilante Paramedic Service
                    </a>
                  </h2>
                  <div class="product-price">
                    <span>Cantonment area,kannur</span>
                    <br></br>
                    <span>8493938484</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Xavier Paramedic Service</a>
                  </h2>
                  <div class="product-price">
                    <span>Pallikkunnu,kannur</span>
                    <br></br>
                    <span>7573849303</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Maya Emergency Transports</a>
                  </h2>
                  <div class="product-price">
                    <span>Thalap, kannur</span>
                    <br></br>
                    <span>8573849303</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Neon Emergency Services</a>
                  </h2>
                  <div class="product-price">
                    <span>Thavakkara,kannur</span>
                    <br></br>
                    <span>9573849303</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Adele Ambulances</a>
                  </h2>
                  <div class="product-price">
                    <span>Thavakkara,kannur</span>
                    <br></br>
                    <span>6879849503</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>MayFair Ambulances</a>
                  </h2>
                  <div class="product-price">
                    <span>Cantonment area,kannur</span>
                    <br></br>
                    <span>9873849303</span>
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
            {/* <!-- small-product-item --> */}
            <div class="col-lg-4 col-md-6 col-12">
              <div class="ltn__small-product-item">
                <div class="small-product-item-info">
                  <h2 class="product-title">
                    <a href="product-details.html"style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'20px'}}>Zoya Ambulance</a>
                  </h2>
                  <div class="product-price">
                    <span>Thalap,kannur</span>
                    <br></br>
                    <span>7773849303</span>
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
            {/* <!--  --> */}
          </div>
        </div>
      </div>
      {/* <!-- SMALL PRODUCT LIST AREA END --> */}

      {/* <!-- EMERGENCY CONTACT AREA START --> */}
      {/* <div class="section one" id="section1">
        <div class="ltn__contact-message-area mb-120 mb--100">
          <div
            class="container"
            style={{ marginBottom: "120px", marginTop: "20px" }}
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__form-box contact-form-box box-shadow white-bg">
                  <h1
                    style={{ fontWeight: "bold", fontSize: "40px" }}
                    class="title-2"
                  >
                    EMERGENCY CONTACT
                  </h1>
                  <p style={{fontWeight:'bold'}}>apply for urgent clinical examinations</p>
                  <form id="contact-form" action="mail.php" method="post">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-item input-item-reason ltn__custom-icon">
                        
                          <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                          >
                            <option value="" hidden style={{ display: "none" }}>
                              select Labs
                            </option>
                            <option value="option1">OptiGen Labs</option>
                            <option value="option2">Hyatt Labs</option>
                            <option value="option3">Genotics Labs</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-item input-item-phone ltn__custom-icon">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="message"
                        placeholder="Enter the reason of emergency"
                      ></textarea>
                    </div>
                    <p>
                      <label class="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Save my name,
                        email, and website in this browser for the next time.
                      </label>
                    </p>
                    <div class="btn-wrapper mt-0">
                      <button
                        class="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                    <p class="form-messege mb-0 mt-20"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- EMERGENCY CONTACT  AREA END --> */}

      {/* <!-- FOOTER AREA START --> */}
      {/* <footer class="ltn__footer-area  ">
        <div class="footer-top-area  section-bg-2 plr--5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 col-md-6 col-sm-6 col-12">
                        <div class="footer-widget footer-about-widget">
                            <div class="footer-logo">
                                <div class="site-logo">
                                    <img src="img/logo-2.png" alt="Logo"/>
                                </div>
                            </div>
                            <p>
                                Our mission is to provide innovative and quality medical laboratory services on time.
                                We strive to provide the highest quality laboratory services at reasonable fees
                                 </p>
                            <div class="footer-address">
                                <ul>
                                    <li>
                                        <div class="footer-address-icon">
                                            <i class="icon-placeholder"></i>
                                        </div>
                                        <div class="footer-address-info">
                                            <p>Kannur</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer-address-icon">
                                            <i class="icon-call"></i>
                                        </div>
                                        <div class="footer-address-info">
                                            <p><a href="tel:+0123-456789">+9157026789</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer-address-icon">
                                            <i class="icon-mail"></i>
                                        </div>
                                        <div class="footer-address-info">
                                            <p><a href="mailto:example@example.com">Dlabs@gmail.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                        <div class="footer-widget footer-menu-widget clearfix">
                            <h4 class="footer-title">Company</h4>
                            <div class="footer-menu">
                                <ul>
                                   
                                    <li><a href="blog.html">Labs</a></li>
                                    <li><a href="shop.html">Packages</a></li>
                                    <li><a href="locations.html">Tests</a></li>
                                    <li><a href="faq.html">Doctors</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                        <div class="footer-widget footer-menu-widget clearfix">
                            <h4 class="footer-title">Customer Care</h4>
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="account.html">My account</a></li>
                                    <li><a href="wishlist.html">Wish List</a></li>
                                    <li><a href="order-tracking.html">Appointment Status</a></li>
                                   
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-12 col-12">
                        <div class="footer-widget footer-newsletter-widget">
                           
                            <h5 class="mt-1">We Accept</h5>
                            <img src="img/icons/payment-4.png" alt="Payment Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
            <div class="container-fluid ltn__border-top-2">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="ltn__copyright-design clearfix">
                            <p>All Rights Reserved @ Dlabs <span class="current-year"></span></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 align-self-center">
                        <div class="ltn__copyright-menu text-end">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Claim</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
      {/* <!-- FOOTER AREA END --> */}
    </div>
  );
}

export default Home;
