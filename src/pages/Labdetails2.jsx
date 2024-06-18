import React, { useState } from 'react'


function Lab_details(){
    return(
        <>
        
        {/* <!-- BREADCRUMB AREA START --> */}
    <div className="ltn__breadcrumb-area text-left bg-overlay-white-20 bg-image"  data-bs-bg="img/photos/laback.jpg">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner">
                        <h1 className="page-title">Product Details</h1>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</a></li>
                                <li>Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!-- BREADCRUMB AREA END --> */}

    {/* <!-- LAB IMAGE AREA START --> */}
    <div className="ltn__shop-details-area pb-85">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="ltn__shop-details-inner mb-60">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ltn__shop-details-img-gallery">
                                    <div className="ltn__shop-details-large-img">
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails4.webp"  data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails4.webp" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails3.webp" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labs9.jpg" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails5.webp" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails5.webp" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails6.jpg" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails6.jpg" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails7.jpg" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails7.jpg" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails8.webp" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails8.webp" alt="Image"/>
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/photos/labdetails9.jpg" data-rel="lightcase:myCollection">
                                                <img src="img/photos/labdetails9.jpg" alt="Image"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ltn__shop-details-small-img slick-arrow-2">
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails4.webp" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails3.webp" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails5.webp" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails6.jpg" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails7.jpg" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails8.webp" alt="Image"/>
                                        </div>
                                        <div className="single-small-img">
                                            <img src="img/photos/labdetails9.jpg" alt="Image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="modal-product-info shop-details-info pl-0">
                                    <div style={{color:'white'}} className="product-ratting">
                                        <ul >
                                            <li><a style={{color:'seagreen'}}  href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}}  href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a style={{color:'seagreen'}}  href="#"><i className="far fa-star"></i></a></li>
                                            <li className="review-total"> <a style={{color:'seagreen',fontSize:'15px',marginLeft:'10px'}}  href="#"> ( 95 Reviews )</a></li>
                                        </ul>
                                    </div>
                                    <h1 style={{fontSize:'45px',color:'black',fontFamily:'inherit',fontWeight:'bold'}}>ORION LABS</h1>
                                    <div className="product-price">
                                        <p style={{color:'#0a9a73',fontSize:'25px'}}>Thana,2nd complex,Caltex</p>
                                        <p style={{fontWeight:'bold',fontFamily:'inherit',color:'black',fontSize:'15px',marginTop:'-5px',letterSpacing:'1px',}}>Email:Orionlabs@gmail.com</p>
                                        <p style={{fontWeight:'bold',fontFamily:'inherit',color:'black',fontSize:'15px',marginTop:'-5px',letterSpacing:'1px',lineHeight:'0.2'}}>Phone:9167348902</p>
                                        <div className="ltn__social-media" style={{fontWeight:'bold',fontFamily:'inherit',color:'black',fontSize:'15px',marginTop:'-5px',letterSpacing:'1px'}}>
                                        <ul>
                                            <li>Share:</li>
                                            <li><a  href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                            
                                        </ul>
                                    </div>
                                    </div>
                                    <div style={{color:'black'}} className="modal-product-meta ltn__product-details-menu-1">
                                        <ul>
                                            <li>
                                                <strong style={{fontWeight:'bold',fontFamily:'inherit',color:'black'}}>Open Hours:</strong> 
                                                <span style={{fontWeight:'bold',fontFamily:'inherit',color:'#0a9a73'}}>
                                                    {/* <a href="#">face-mask</a> */}
                                                    10:00 AM - 6:00 PM
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="ltn__product-details-menu-2">
                                        <ul>
                                            <li>
                                                <div className="cart-plus-minus">
                                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span>ADD TO CART</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                    <div className="ltn__product-details-menu-3">
                                        <ul>
                                            <li>
                                                <a href="#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                    <i style={{color:'black'}} className="far fa-heart"></i>
                                                    <span style={{marginBottom:'2px',color:'#0a9a73'}}>Add to Wishlist</span>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                    <i className="fas fa-exchange-alt"></i>
                                                    <span>Compare</span>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <hr/>
                                    {/* <div className="ltn__social-media">
                                        <ul>
                                            <li>Share:</li>
                                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                            
                                        </ul>
                                    </div> */}
                                    <hr/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shop Tab Start --> */}
                    <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                        <div className="ltn__shop-details-tab-menu">
                            <div className="nav">
                                <a style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'18px'}}className="active show" data-bs-toggle="tab" href="#liton_tab_details_1_1">DESCRIPTION</a>
                                <a style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'18px'}}data-bs-toggle="tab" href="#liton_tab_details_1_2" className="">REVIEWS</a>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="liton_tab_details_1_1">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 style={{color:'black',fontFamily:'inherit'}}className="title-2">Highly equipped with latest laboratory machines to perform routine as well as advanced tests.</h4>
                                    <p style={{color:'black',fontFamily:'inherit'}}>DVA diagnostics pathology laboratory doctor and medical staff has diligently provided quality laboratory services to its patients, customers and to medical community in Mulund and nearby suburbs. </p> 
                                    <p style={{color:'black',fontFamily:'inherit'}}>We remain committed today in providing accurate diagnostic test results and exceptional support services . Our values- Commit to service excellence Trust each other with respect and honesty Demonstrate responsibility and accountability Maintain confidentiality Be enthusiastic and continues improvement Vision - to provide every patient or customer with world class diagnostic pathological services easily accessible and affordable Mission-To become worldclass laboratory with technologies on par with international standards.</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_2">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 style={{color:'black',fontFamily:'inherit'}} className="title-2">Customer Reviews</h4>
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a style={{color:'seagreen'}}  href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a style={{color:'seagreen'}} href="#"><i className="far fa-star"></i></a></li>
                                            <li className="review-total"> <a style={{fontSize:'16px',color:'seagreen'}} href="#"> ( 95 Reviews )</a></li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    {/* <!-- comment-area --> */}
                                    <div className="ltn__comment-area mb-30">
                                        <div className="ltn__comment-inner">
                                            <ul>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="img/photos/review1.png" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}} href="#">Adam Smith</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a style={{color:'seagreen'}}  href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span style={{color:'#0a9a73',borderColor:'black'}} className="ltn__comment-reply-btn">September 3, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="img/photos/review2.jpg" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}} href="#">Ria Picoult</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}}  href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span style={{color:'#0a9a73',borderColor:'black'}} className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="img/photos/review3.jpg" alt="Image"/>
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}} href="#">Reynold Jacobs</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                <li><a style={{color:'seagreen'}}href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a style={{color:'seagreen'}} href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span style={{color:'#0a9a73',borderColor:'black'}} className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- comment-reply --> */}
                                    <div className="ltn__comment-reply-area ltn__form-box mb-30">
                                        <form action="#">
                                            <h4 className="title-2">Add a Review</h4>
                                            <div className="mb-30">
                                                <div className="add-a-review">
                                                    <h6 >Your Ratings:</h6>
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a style={{color:'seagreen'}} href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a style={{color:'seagreen'}} href="#"><i className="far fa-star"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea placeholder="Type your comments...."></textarea>
                                            </div>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" placeholder="Type your name...."/>
                                            </div>
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Type your email...."/>
                                            </div>
                                            <div className="input-item input-item-website ltn__custom-icon">
                                                <input type="text" name="website" placeholder="Type your website...."/>
                                            </div>
                                            <label className="mb-0"><input type="checkbox" name="agree"/> Save my name, email, and website in this browser for the next time I comment.</label>
                                            <div className="btn-wrapper">
                                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shop Tab End --> */}
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                        {/* <!-- Top Rated Product Widget --> */}
                        <div className="widget ltn__top-rated-product-widget">
                            <h4 style={{color:'black',fontFamily:'inherit',fontWeight:'bold'}} className="ltn__widget-title ltn__widget-title-border">SPECIALISED DOCTORS</h4>
                            <ul>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="img/photos/doctor6.webp" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            {/* <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div> */}
                                            <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'18px',marginLeft:'6%'}} href="product-details.html">Dr.Divya ajay</a></h6>
                                            <div className="product-price">
                                                <img src='img/photos/medi.png' style={{maxWidth:'12px',marginRight:'5px',marginBottom:'3px',fontFamily:'inherit'}}/>Consultant Microbiologist    
                                                <p style={{fontSize:'12px',color:'teal',fontFamily:'inherit',marginLeft:'4%'}}>MBBS,MD,PGDHHM,FAACC</p>                                        
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="img/photos/doctor5.webp" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            {/* <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div> */}
                                            <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'18px',marginLeft:'6%'}} href="product-details.html">Dr.Nived C.K</a></h6>
                                            <div className="product-price">
                                                <img src='img/photos/medi.png' style={{maxWidth:'12px',marginRight:'5px',marginBottom:'3px',fontFamily:'inherit'}}/>Consultant Microbiologist    
                                                <p style={{fontSize:'12px',color:'teal',fontFamily:'inherit',marginLeft:'4%'}}>MBBS,MD,PGDHHM,FAACC</p>                                        
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="img/photos/doctors4.webp" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            {/* <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                </ul>
                                            </div> */}
                                           <h6><a style={{color:'black',fontFamily:'inherit',fontWeight:'bold',fontSize:'18px',marginLeft:'6%'}} href="product-details.html">Dr.Vedika</a></h6>
                                            <div className="product-price">
                                                <img src='img/photos/medi.png' style={{maxWidth:'12px',marginRight:'5px',marginBottom:'3px',fontFamily:'inherit'}}/>Consultant Microbiologist    
                                                <p style={{fontSize:'12px',color:'teal',fontFamily:'inherit',marginLeft:'4%'}}>MBBS,MD,PGDHHM,FAACC</p>                                        
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Banner Widget --> */}
                        <div  className="widget ltn__banner-widget"style={{marginTop:'40%'}}>
                            <a href="shop.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- DOCTOR DETAILS AREA END --> */}

    {/* <!-- PAckage AREA START --> */}
    <div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2">
                        <h1 className="title-2" style={{fontSize:'35px',fontFamily:'inherit',fontWeight:'bold',color:'black'}}>HEALTH PACKAGES</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__related-product-slider-one-active slick-arrow-1" style={{position: "relative",top: "-20px"}}>
                {/* <!-- Package 1 --> */}
                <div className="col-lg-12">
                    <div  className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/seniors.jpg" style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a  href="product-details.html">Senior Citizen Checkup with physio sessions.</a></h2>
                            <div style={{color:'green'}} className="product-price">
                                <span>67 Tests included.</span>
                                {/* <span>₹1499</span> */}
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
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
                {/* <!-- PACKAGE 2 --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/diabetic.jpg"style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a  href="product-details.html">Diabetics Package for all age groups</a></h2>
                            <div style={{color:'green'}} className="product-price">
                                <span>3 Tests included</span>
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1200</li>
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
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/womens.jpg" style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a  href="product-details.html">Postnatal Health Checkup for new moms</a></h2>
                            <div style={{color:'green'}}className="product-price">
                                <span>22 Tests included.</span>
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
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
                {/* <!-- PACKAGE 4 --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/womens1.jpg"style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a  href="product-details.html">Women's Advanced Healthcare Package</a></h2>
                            <div style={{color:'green'}} className="product-price">
                                <span>15 Tests included.</span>
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>3000</li>
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
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/men.png" style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a  href="product-details.html">Men's Master Checkup with cancer screening.</a></h2>
                            <div style={{color:'green'}} className="product-price">
                                <span>23 Tests included.</span>
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>3299</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PACKAGE 6 --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                        <a href="product-details.html"><img src="img/photos/fitness.jpg"  style={{width:'600px',height:'310px'}} alt="#"/></a>
                            {/* <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            <div className="product-hover-action">
                                <ul>
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
                                </ul>
                            </div> */}
                        </div>
                        <div style={{backgroundColor:'white'}} className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                             <h2 className="product-title"><a  href="product-details.html">360 Full body fitness Assessment</a></h2>
                            <div style={{color:'green'}} className="product-price">
                                <span>102 Tests included.</span>
                            </div>
                            <div class="ltn__blog-meta-btn">
                                <div  class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>3299</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- PACKAG AREA END --> */}

    {/* ######## TESTS ###################### */}

<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h1 className="title-2" style={{fontSize:'35px',fontFamily:'inherit',fontWeight:'bold',color:'black'}}>SPECIAL TESTS</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Serum Creatinine Test</a></h2>
                            <div>Detects Kidney diseases.</div>
                            <div>Blood</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>140</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Cardiomap Test</a></h2>
                            <div>Detects Cardiovascular diseases.</div>
                            <div>Blood</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>6569</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Platelet Count Test</a></h2>
                            <div>Detects Thrombocytosis.</div>
                            <div>Platelet Count</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Vitamin D Test</a></h2>
                            <div>Detects Vitamin D deficiency.</div>
                            <div>25 Hydroxy, Vitamin D</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Sodium Test</a></h2>
                            <div>Checks Electrolytes and acidity level.</div>
                            <div>Sodium</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Alanine Amino Serum Test(SGPT)</a></h2>
                            <div>Detects Liver damage.</div>
                            <div>SGPT-Alanine Transaminase(ALT)</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Liver Function Test(LFT)</a></h2>
                            <div>Detects inflammation,Liver disease.</div>
                            <div>Alkaline phosphatase,Bilirubin(Total)</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">Urine Routine and Microscopy Test</a></h2>
                            <div>Detects diabetes,kidney disease.</div>
                            <div>PH,Specific Gravity</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- small-product-item --> */}
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="ltn__small-product-item">
                        <div class="small-product-item-info">
                            <h2 class="product-title"><a href="product-details.html">CBC (Complete Blood Count)Test</a></h2>
                            <div>Helps in detecting Anemia.</div>
                            <div>Haemoglobin Packed cell,Volume.</div>
                            <div>

                        </div>
                            <div class="ltn__blog-meta-btn" style={{marginTop:'15px'}}>
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="fas fa-rupee-sign" style={{color:'green'}}></i>1499</li>
                                    </ul>
                                </div>
                                <div style={{marginLeft:'160px'}}>
                                <a href="/booking">
                                    <button type="button" class="btn-3 btn-success">BOOK NOW</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>


    {/* <!-- MODAL AREA START (Quick View Modal) --> */}
    {/* <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <!-- <i className="fas fa-times"></i> -->
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-img">
                                            <img src="img/product/4.png" alt="#"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                </ul>
                                            </div>
                                            <h3>Digital Stethoscope</h3>
                                            <div className="product-price">
                                                <span>$149.00</span>
                                                <del>$165.00</del>
                                            </div>
                                            <div className="modal-product-meta ltn__product-details-menu-1">
                                                <ul>
                                                    <li>
                                                        <strong>Categories:</strong> 
                                                        <span>
                                                            <a href="#">Parts</a>
                                                            <a href="#">Car</a>
                                                            <a href="#">Seat</a>
                                                            <a href="#">Cover</a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__product-details-menu-2">
                                                <ul>
                                                    <li>
                                                        <div className="cart-plus-minus">
                                                            <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__product-details-menu-3">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                            <i className="far fa-heart"></i>
                                                            <span>Add to Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                            <i className="fas fa-exchange-alt"></i>
                                                            <span>Compare</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr/>
                                            <div className="ltn__social-media">
                                                <ul>
                                                    <li>Share:</li>
                                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                    
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
    <!-- MODAL AREA END -->

    <!-- MODAL AREA START (Add To Cart Modal) -->
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="img/product/1.png" alt="#"/>
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><a href="product-details.html">Digital Stethoscope</a></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Cart</p>
                                            <div className="btn-wrapper">
                                                <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                                                <a href="checkout.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                                            </div>
                                         </div>
                                         <!-- additional-info -->
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br/>  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="img/icons/payment.png" alt="#"/>
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
    <!-- MODAL AREA END -->

    <!-- MODAL AREA START (Wishlist Modal) -->
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="img/product/7.png" alt="#"/>
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><a href="product-details.html">Digital Stethoscope</a></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                            <div className="btn-wrapper">
                                                <a href="wishlist.html" className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
                                            </div>
                                         </div>
                                         <!-- additional-info -->
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br/>  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="img/icons/payment.png" alt="#"/>
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
    </div> */}
    {/* <!-- MODAL AREA END --> */}
    
    </>
    )
}
export default Lab_details