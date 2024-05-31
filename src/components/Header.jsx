    import React from 'react';
    
    function Header() {
    return (
        
        <header  className="ltn__header-area ltn__header-3 section-bg-6---">   
            
            <div className="ltn__header-middle-area">
            <div className="container">
    <div className="row navbar-transparent">
        <div className="col-2">
            <a href="index.html">
                <img src="img/photos/lab final.png" style={{ width:'75%', marginBottom:'5px', marginTop:'0px', lineHeight:'10px', marginLeft:'-50%' }} alt="Logo"/>
            </a>
        </div>
        <div className="col" style={{ paddingTop:'0px' }}>
            <div className="ltn__main-menu">
                <ul style={{ width:'30%', marginTop:'15px' }}>
                    <li className=""><a style={{ fontSize:'17px',fontFamily:'inherit',fontWeight:'bold' }} href="/">HOME</a></li>
                    <li className=""><a style={{ fontSize:'17px',fontFamily:'inherit',fontWeight:'bold' }} href="/lab">LABS</a></li>
                    <li className=""><a style={{ fontSize:'17px',fontFamily:'inherit',fontWeight:'bold' }} href="/doctors">DOCTORS</a></li>
                    <li className=""><a style={{ fontSize:'17px',fontFamily:'inherit',fontWeight:'bold' }} href="#section1">EMERGENCY CONTACT</a></li>
                    <li><a style={{ fontSize:'17px',fontFamily:'inherit',fontWeight:'bold' }} href="/contact">CONTACT US</a></li>  
                    <li><a href="/register" ><button style={{ marginLeft:'140%',fontSize:'15px',fontWeight:'600', padding: '5px 7px', backgroundColor: '#40bf80', color: 'black', border: 'none', borderRadius: '1px' }}  >Get Started</button></a></li>
                    {/* <li><a style={{ fontSize:'20px' }} href="/userlogin">Login</a></li>  */}
                   
                        <div style={{ marginLeft:'50%',marginTop:'13px' }} className="ltn__drop-menu user-menu">
                            <ul>
                                <li>
                                    <a href="#" style={{ width:'100%' }}><i className="icon-user"></i></a>
                                    <ul>
                                        {/* <li><a href="/register">Register</a></li> */}
                                        <li><a href="/userlogin">Login</a></li>
                                        <li><a href="/myaccount">My Account</a></li>
                                    </ul>
                                </li>
                            </ul>
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
                                <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- MOBILE MENU END --> */}
            
            {/* <!-- header-bottom-area start --> */}
            <div  >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 align-self-center">
                        
                        </div>
                        {/* <div className="col-lg-7" style={{marginRight:'0%'}}>
                            <div >
                                <div className="header-menu header-menu-2 text-start">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li className=""><a href="/">Home</a>
                                                    
                                                </li>
                                                <li className=""><a href="/lab">Labs</a>
                                                    
                                                </li>
                                                <li className=""><a href="/doctors">Doctors</a>
                                                    
                                                </li>
                                                <li className=""><a href="#section1">Emergency Contact</a>
                                                </li>
                                                
                                                <li><a href="/contact">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div> */}

                        {/* </div> */}
                        {/* <div className="col-lg-2 align-self-center d-none d-xl-block">
                            <div className="header-contact-info text-end">
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    
                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" title="Whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                                </ul>
                            </div> 
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- header-bottom-area end --> */}

            {/* <!-- Utilize Cart Menu Start --> */}
        <div id="ltn__utilize-cart-menu" class="ltn__utilize ltn__utilize-cart-menu">
            <div class="ltn__utilize-menu-inner ltn__scrollbar">
                <div class="ltn__utilize-menu-head">
                    <span class="ltn__utilize-menu-title">Cart</span>
                    <button class="ltn__utilize-close">×</button>
                </div>
                <div class="mini-cart-product-area ltn__scrollbar">
                    <div class="mini-cart-item clearfix">
                        <div class="mini-cart-img">
                            <a href="#"><img src="img/product/1.png" alt="Image"/></a>
                            <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                        </div>
                        <div class="mini-cart-info">
                            <h6><a href="#"> OptiGen Labs</a></h6>
                            <span class="mini-cart-quantity">1 x $65.00</span>
                        </div>
                    </div>
                    <div class="mini-cart-item clearfix">
                        <div class="mini-cart-img">
                            <a href="#"><img src="img/product/2.png" alt="Image"/></a>
                            <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                        </div>
                        <div class="mini-cart-info">
                            <h6><a href="#">Hyatt Labs</a></h6>
                            <span class="mini-cart-quantity">1 x $85.00</span>
                        </div>
                    </div>
                    <div class="mini-cart-item clearfix">
                        <div class="mini-cart-img">
                            <a href="#"><img src="img/product/3.png" alt="Image"/></a>
                            <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                        </div>
                        <div class="mini-cart-info">
                            <h6><a href="#">Cosmetic Containers</a></h6>
                            <span class="mini-cart-quantity">1 x $92.00</span>
                        </div>
                    </div>
                    <div class="mini-cart-item clearfix">
                        <div class="mini-cart-img">
                            <a href="#"><img src="img/product/4.png" alt="Image"/></a>
                            <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                        </div>
                        <div class="mini-cart-info">
                            <h6><a href="#">Thermometer Gun</a></h6>
                            <span class="mini-cart-quantity">1 x $68.00</span>
                        </div>
                    </div>
                </div>
                <div class="mini-cart-footer">
                    <div class="btn-wrapper">
                        <a style={{width:'100%'}} href="cart.html" class="theme-btn-1 btn btn-effect-1">View More</a>
                    </div>
                </div>

            </div>
        </div>
    
        <div className="ltn__utilize-overlay"></div>    
        </header>
        
    )
    }

    export default Header;