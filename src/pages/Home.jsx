import React,{useState} from 'react';
import micro from './micro.gif';
import bokk2 from './bokk2.gif';
import chem from './chem.jpg';
import dna from './dna.gif';
import dna2 from './dna2.avif'
import carousel1 from './carousel1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import postnatal2 from './postnatal2.gif';
import './Myacc.css';
function Home() { 
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (

    <div>
        
        {/* <!-- SLIDER AREA START (slider-3) --> */}
    <div  className="ltn__slider-area ltn__slider-3  section-bg-1" id='section3'>
    <header  className="ltn__header-area ltn__header-3 section-bg-6---">   
            
            <div className="ltn__header-middle-area">
            <div className="container">
    <div className="row navbar-transparent">
        <div className="col-2">
            <a href="index.html">
                <img src="img/photos/logofinal.png" style={{ width:'75%', marginBottom:'5px', marginTop:'0px', lineHeight:'10px', marginLeft:'-50%' }} alt="Logo"/>
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
                    <li><a href="/register" ><button style={{ marginLeft:'140%',fontSize:'14px',fontFamily:'inherit',fontWeight:'600', padding: '5px 7px', backgroundColor: '#40bf80', color: 'black', border: 'none', borderRadius: '1px' }}  >GET STARTED</button></a></li>
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
        <div style={{backgroundColor:'white'}} className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
            {/* <!-- ltn__slide-item --> */}
            <div  className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---" data-bs-bg="img/photos/labmain7.webp">
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <div className="slide-video mb-50 d-none">
                                            <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                                        <h1 style={{color:'seagreen'}} className="slide-title animated "> Leading the way in Laboratory Technology</h1>
                                        <div className="slide-brief animated">
                                            <p style={{color:'forestgreen'}} >Every diagnosis, every treatment,crafted with expertise and empathy</p>
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
            <div  className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---" data-bs-bg="img/photos/labmain9.jpg">
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <div className="slide-video mb-50 d-none">
                                            <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                                        <h1 style={{color:'teal'}} className="slide-title animated "> Certified Laboratories <br/>and Facilities </h1>
                                        <div className="slide-brief animated">
                                            <p style={{color:'darkslategrey'}} >Every diagnosis, every treatment,crafted with expertise and empathy</p>
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
            <div  className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60---" data-bs-bg="img/photos/bokk2.gif">
                <div className="ltn__slide-item-inner text-right text-end">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <div className="slide-video mb-50 d-none">
                                            <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-syringe"></i></span> Certified Laboratories and Facilities</h6> */}
                                        <h1 style={{color:'teal'}} className="slide-title animated "> Experience <br/>the best of Healthcare </h1>
                                        <div className="slide-brief animated">
                                            <p style={{color:'darkslategrey'}} >Rewriting medical practices,one patient at a time</p>
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


  {/* <!-- SEARCH AREA BEGIN --> */}

    {/* <div className="header-search-2" style={{maxwidth: '55%',marginLeft:'35%',marginTop:'10%',marginRight:'80%'}}>
                                <form id="#123" method="get"  action="#">
                                    <input type="text" name="search" value="" placeholder="Search here..."/>
                                    <button type="submit">
                                        <span><i className="icon-search"></i></span>
                                    </button>
                                </form>
                            </div> */}

  {/* <!-- SEARCH AREA END --> */}


    {/* <!-- PRODUCT AREA START (product-item-3) --> */}
    <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h1 style={{fontSize:'40px'}} className="section-title">LABS NEAR YOU</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            {/* <a href="product-details.html"><img src="img/photos/l1.webp" alt="#"/></a> */}
                            <a href="/Lab_details"><img src="img/photos/l1.webp" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">Optigen Labs</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    Kannur, koodali
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l2.webp" alt="#"/></a>
                            <div className="product-hover-action">
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">Med Labs</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    thalap,kannur</span>
                                {/* <del>$35.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l3.jpg" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">Leo Labs </a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    valapattanam kannur</span>
                                {/* <del>$92.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l4.jpg" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">Riott Innovations</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    Manna kannur</span>
                                {/* <del>$85.00</del> */}
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
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l5.webp" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">OptiGen Labs</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    Kannur</span>
                                {/* <del>$46.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l6.jpg" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">Hyatt Labs</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    Kannur</span>
                                {/* <del>$35.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l7.jpg" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">NEETHI DIAGNOSTICS</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    kannur</span>
                                {/* <del>$92.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="img/photos/l8.webp" alt="#"/></a>
                            <div className="product-hover-action">
                                {/* <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h2 className="product-title"><a href="product-details.html">STELLAR LABS</a></h2>
                            <div className="product-price">
                                <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                    kannur</span>
                                {/* <del>$85.00</del> */}
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
    <div class="ltn__blog-area pt-115 pb-70" id='section2'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h1 class="section-title">POPULAR PACKAGES</h1>
                    </div>
                </div>
            </div>
            <div class="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
                {/* <!-- package 1 --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/photos/women.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>OptiGen Labs</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>15 tests included</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">Women's Advanced Healthcare Package with Stress Impact Checkup</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
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
                            <a href="blog-details.html"><img src="img/photos/men.png" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>Hyatt Labs</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>23 tests included</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">Men's Master Checkup with Arthritis and Cancer Screening</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>2099</li>
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
                            <a href="blog-details.html"><img src={postnatal2} alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>Stellar Labs</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>22 Tests included</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">PostNatal Health Checkup for New Moms,with PostPartum Stress and folic acid check </a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1299</li>
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
                            <a href="blog-details.html"><img src="img/photos/senior.png" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>Leo Labs</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>67 tests included</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">Seniors citizen Healthcare and Checkup with sessions of pysiotherapy </a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
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
                            <a href="blog-details.html"><img src="img/photos/fitness.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>Riott Innovations</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>102 tests included</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">360 Full Body Fitness Assessment with Follow-Up Sessions</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>2499</li>
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
    <div class="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h1 class="section-title">OUR EXPERIENCED DOCTORS</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__tab-product-slider-one-active slick-arrow-1">
                {/* <!-- DOCTOR 1 --> */}
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-center">
                        <div class="product-img">
                            <div class="h-100 shadow">
                            <a href="product-details.html"><img src="img/photos/doctor1.jpg" alt="#"/></a>
                            <div class="product-hover-action">
                            </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h3 style={{fontWeight:'bold'}} class="ltn__blog-title"><a href="blog-details.html">Dr.Arnold Smith</a></h3>
                            <p style={{lineHeight:'0.2',fontWeight:'bold'}}> MD,MBBS,Microbiology</p>
                            <p><i class="fa fa-plus-circle" aria-hidden="true" style={{color:'green',paddingRight:'5px'}}></i>OptiGen Labs</p>
                            <div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DOCTOR 2 --> */}
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-center">
                        <div class="product-img">
                            <a href="product-details.html"><img src="img/photos/doctor2.jpg" alt="#"/></a>
                            <div class="product-hover-action">
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h3 style={{fontWeight:'bold'}} class="ltn__blog-title"><a href="blog-details.html">Dr.Laura Mitchell</a></h3>
                            <p style={{lineHeight:'0.2',fontWeight:'bold'}}> MD,MBBS,Biochemist</p>
                            <p ><i class="fa fa-plus-circle" aria-hidden="true" style={{color:'green',paddingRight:'5px'}}></i>Riott Innovations</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DOCTOR 3 --> */}
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-center">
                        <div class="product-img">
                            <a href="product-details.html"><img src="img/photos/doctor3.jpg" alt="#"/></a>
                            <div class="product-hover-action">
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h3 style={{fontWeight:'bold'}} class="ltn__blog-title"><a href="blog-details.html">Dr.Anna Davis</a></h3>
                            <p style={{lineHeight:'0.2',fontWeight:'bold'}}> MD,MBBS,Biochemist</p>
                            <p ><i class="fa fa-plus-circle" aria-hidden="true" style={{color:'green',paddingRight:'5px'}}></i>Riott Innovations</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DOCTOR 4 --> */}
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-center">
                        <div class="product-img">
                            <a href="product-details.html"><img src="img/photos/doct4.jpg" alt="#"/></a>
                            <div class="product-hover-action">

                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h3 style={{fontWeight:'bold'}} class="ltn__blog-title"><a href="blog-details.html">Dr.Leah Hans</a></h3>
                            <p style={{lineHeight:'0.2',fontWeight:'bold'}}> MD,MBBS,Biochemist</p>
                            <p ><i class="fa fa-plus-circle" aria-hidden="true" style={{color:'green',paddingRight:'5px'}}></i>Hyatt Labs</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DOCTOR 5 --> */}
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item ltn__product-item-3 text-center">
                        <div class="product-img">
                            <a href="product-details.html"><img src="img/photos/doct2.png" alt="#"/></a>
                            <div class="product-hover-action">
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
                                </ul>
                            </div>
                            <h3 style={{fontWeight:'bold'}} class="ltn__blog-title"><a href="blog-details.html">Dr.Blair claude</a></h3>
                            <p style={{lineHeight:'0.2',fontWeight:'bold'}}> MD,MBBS,Biochemist</p>
                            <p ><i class="fa fa-plus-circle" aria-hidden="true" style={{color:'green',paddingRight:'5px'}}></i>Riott Innovations</p>
                            <div>
                            </div>
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
                        <h1 class="section-title">AMBULANCE LIST</h1>
                        <div>
                        <input type="text" id="searchInput" placeholder="Search for ambulances..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            
                            <h2 class="product-title"><a href="product-details.html">AlphaOne Ambulance</a></h2>
                            <div class="product-price">
                                <span>Cantonment area,kannur</span><br></br>
                                <span>6573849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Swift Services</a></h2>
                            <div class="product-price">
                                <span>kannur Town</span><br></br>
                                <span>6573849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Vigilante Paramedic Service</a></h2>
                            <div class="product-price">
                                <span>Cantonment area,kannur</span><br></br>
                                <span>8493938484</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Xavier Paramedic Service</a></h2>
                            <div class="product-price">
                                <span>Pallikkunnu,kannur</span><br></br>
                                <span>7573849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html"></a>Maya Emergency Transports</h2>
                            <div class="product-price">
                                <span>Thalap, kannur</span><br></br>
                                <span>8573849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Neon Emergency Services</a></h2>
                            <div class="product-price">
                                <span>Thavakkara,kannur</span><br></br>
                                <span>9573849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Adele Ambulances</a></h2>
                            <div class="product-price">
                                <span>Thavakkara,kannur</span><br></br>
                                <span>6879849503</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">MayFair Ambulances</a></h2>
                            <div class="product-price">
                                <span>Cantonment area,kannur</span><br></br>
                                <span>9873849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
                            
                            <h2 class="product-title"><a href="product-details.html">Zoya Ambulance</a></h2>
                            <div class="product-price">
                                <span>Thalap,kannur</span><br></br>
                                <span>7773849303</span>
                                <div class="product-ratting">
                                <ul>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                    <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i class="far fa-star"></i></a></li>
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
<div class="section one" id='section1' >
<div class="ltn__contact-message-area mb-120 mb--100" >
        <div class="container" style={{marginBottom:'120px'}}>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ltn__form-box contact-form-box box-shadow white-bg">
                        <h1 style={{fontWeight:'bold',fontSize:'40px'}} class="title-2">EMERGENCY CONTACT</h1>
                        <form id="contact-form" action="mail.php" method="post">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-item input-item-name ltn__custom-icon">
                                        <input type="text" name="name" placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-item input-item-email ltn__custom-icon">
                                        <input type="email" name="email" placeholder="Enter email address"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-item input-item-reason ltn__custom-icon">
                                        {/* <input type="text" name="labs" placeholder="Enter labs"/> */}
                                        <select value={selectedOption} onChange={handleSelectChange}>
                                        <option value="" hidden style={{display:'none'}}>select Labs</option>
                                            <option value="option1">OptiGen Labs</option>
                                            <option value="option2">Hyatt Labs</option>
                                            <option value="option3">Genotics Labs</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-item input-item-phone ltn__custom-icon">
                                        <input type="text" name="phone" placeholder="Enter phone number"/>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item input-item-textarea ltn__custom-icon">
                                <textarea name="message" placeholder="Enter the reason of emergency"></textarea>
                            </div>
                            <p><label class="input-info-save mb-0"><input type="checkbox" name="agree"/> Save my name, email, and website in this browser for the next time.</label></p>
                            <div class="btn-wrapper mt-0">
                                <button class="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Book Now</button>
                            </div>
                            <p class="form-messege mb-0 mt-20"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
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
    

  )
}

export default Home