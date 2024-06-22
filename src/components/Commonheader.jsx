import React from "react";
import "./Header.css";
function Header() {
  return (
    // ######################### BOTTOM HEADER ###########################
    <header className="ltn__header-area ltn__header-3 section-bg-6--- test">
      <div className="ltn__header-middle-area">
        <div className="container-fluid ">
          <div className="row navbar-transparent">
            <div className="col-2 mt-2  "style={{marginLeft:'3%'}}>
              <a href="index.html">
                <img
                  src="img/photos/logofinal.png"
                  style={{
                    width: "65%",
                    marginBottom: "5px",
                    marginTop: "8px",
                    lineHeight: "10px",
                  }}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="col" style={{ paddingLeft:'5%' }}>
              <div className="ltn__main-menu">
                <ul style={{ width: "70%", marginTop: "15px" }}>
                  <li className="head1">
                    <a
                      style={{
                        fontSize: "17px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                      }}
                      href="/"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="head1">
                    <a
                      style={{
                        fontSize: "17px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                      }}
                      href="/lab"
                    >
                      LABS
                    </a>
                  </li>
                  <li className="head1">
                    <a
                      style={{
                        fontSize: "17px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                      }}
                      href="/doctors"
                    >
                      DOCTORS
                    </a>
                  </li>
                  <li className="head1">
                    <a
                      style={{
                        fontSize: "17px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                      }}
                      href="/emergency"
                    >
                      EMERGENCY CONTACT
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        fontSize: "17px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                      }}
                      href="/contact"
                    >
                      CONTACT US
                    </a>
                  </li>
                  <li>
    <button className="mt-3 " style={{ fontSize: "14px", fontFamily: "inherit", fontWeight: "bold",backgroundColor:'#0a9a73',borderRadius:'8px',width:'140%',padding:'7px 17px',marginLeft:'95%' }}>
        <a href="/register" style={{ textDecoration: "none", color:'black' }}>GET STARTED</a>
    </button>
</li>
{/* 
                  <li>
                    <a className="" href="/booknow" style={{fontSize: "17px",fontFamily: "inherit",fontWeight: "bold"}}>BOOK NOW</a>
                  </li> */}

                  {/* <li><a style={{ fontSize:'20px' }} href="/userlogin">Login</a></li>  */}

                  <div
                    style={{ marginLeft: "15%", marginTop: "7px" }}
                    className="ltn__drop-menu user-menu"
                  >
                    <ul>
                      <li>
                        <a href="#" style={{ width: "10%", color: "black" }}>
                        <i className="fas fa-user mt-3 me-4" style={{ fontSize: '1.2rem'}}></i>
                        </a>
                        <ul>
                          {/* <li><a href="/register">Register</a></li> */}
                          <li>
                            <a
                              style={{ color: "black", margin: "2%" }}
                              href="/userlogin"
                            >
                              Login
                            </a>
                          </li>
                          <li>
                            <a style={{ color: "black" }} href="/myaccount">
                              My Account
                            </a>
                          </li>
                          <li>
                            <a style={{ color: "black" }} href="/viewappointment">
                              Appointments
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="mini-cart-icon mini-cart-icon-2">
                    <a
                      href="#ltn__utilize-cart-menu"
                      className="ltn__utilize-toggle"
                    >
                      <span className="mini-cart-icon">
                      <i class="fa fa-bell" aria-hidden="true"></i>
                      <span  className="notification-badge text-center "style={{backgroundColor:'#0a9a73'}}>5</span>
                      </span>
                      <h6>
                        {/* <span className="ltn__secondary-color">$89.25</span> */}
                      </h6>
                      {/* <li>
    <button className="mt-1 " style={{ fontSize: "14px", fontFamily: "inherit", fontWeight: "bold",backgroundColor:'#0a9a73',borderRadius:'8px',width:'140%',padding:'5px 4px',marginLeft:'25%' }}>
        <a href="/register" style={{ textDecoration: "none", color:'black' }}>GET STARTED</a>
    </button>
</li> */}
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ltn__header-middle-area end --> */}

      {/* <!-- MOBILE MENU START --> */}
      <div className="mobile-header-menu-fullwidth mb-20 d-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Mobile Menu Button --> */}
              <div className="mobile-menu-toggle d-lg-none">
                <span>MENU</span>
                <a
                  href="#ltn__utilize-mobile-menu"
                  className="ltn__utilize-toggle"
                >
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    ></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MOBILE MENU END --> */}

      {/* <!-- header-bottom-area start --> */}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 align-self-center"></div>
          </div>
        </div>
      </div>
      {/* <!-- header-bottom-area end --> */}

      {/* <!-- Utilize Cart Menu Start --> */}
      <div
        id="ltn__utilize-cart-menu"
        class="ltn__utilize ltn__utilize-cart-menu"
      >
        <div class="ltn__utilize-menu-inner ltn__scrollbar">
          <div class="ltn__utilize-menu-head">
            <span style={{color:'seagreen'}} class="ltn__utilize-menu-title">NOTIFICATIONS</span>
            <button class="ltn__utilize-close">×</button>
          </div>
          <div class="mini-cart-product-area ltn__scrollbar">
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/1.png" alt="Image" />
                </a>
                
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a style={{color:'seagreen'}} href="#"> OPTIGEN LABS</a>
                </h6>
                <span class="mini-cart-quantity">24 May 2024, 2:30pm</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/2.png" alt="Image" />
                </a>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a style={{color:'seagreen'}} href="#">LEO LABS</a>
                </h6>
                <span class="mini-cart-quantity">26 May 2024, 3:15pm</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/3.png" alt="Image" />
                </a>
               
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a style={{color:'seagreen'}} href="#">RIOTT LABS</a>
                </h6>
                <span class="mini-cart-quantity">26 May 2024, 3:15pm</span>
              </div>
            </div>
            <div class="mini-cart-item clearfix">
              <div class="mini-cart-img">
                <a href="#">
                  <img src="img/product/4.png" alt="Image" />
                </a>
              </div>
              <div class="mini-cart-info">
                <h6>
                  <a style={{color:'seagreen'}} href="#">GENOTICS LABS</a>
                </h6>
                <span class="mini-cart-quantity">26 May 2024, 3:15pm</span>
              </div>
            </div>
          </div>
          <div class="mini-cart-footer">
            <div class="btn-wrapper">
              <a
                style={{ width: "100%" }}
                href="cart.html"
                class="theme-btn-1 btn btn-effect-1"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__utilize-overlay"></div>
    </header>
  );
}

export default Header;
