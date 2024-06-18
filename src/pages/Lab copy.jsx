import React from 'react';
// import './Lab.css'; 
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import labmain6edit from './labmain6edit.png';
import Carousel from 'react-bootstrap/Carousel';
// import { Container } from 'react-bootstrap';
import ExampleCarouselImage from './labmain5.webp';
import ExampleCarouselImage1 from './labmain1.jpg';
import ExampleCarouselImage2 from './rare.png';
import l2 from './l2'


const Lab = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={ExampleCarouselImage} alt='img' style={{height:"80vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={ExampleCarouselImage1} alt='img' style={{height:"80vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={ExampleCarouselImage2} alt='img' style={{height:"80vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    
    <div className="containers1 mt-5 mb-5" style={{ margin: "35px" }}>
  <CRow className="g-3 mb-5 mr-5 mt-5">
    <CCol md={4}>
      <CCard className="mb-3 " style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md={4}>
      <CCard className="mb-3" style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md={4}>
      <CCard className="mb-3" style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <CRow className="g-3">
    <CCol md={4}>
      <CCard className="mb-3" style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md={4}>
      <CCard className="mb-3" style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md={4}>
      <CCard className="mb-3" style={{ overflow: 'hidden' }}>
        <CCardImage 
          src={labmain6edit} 
          style={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        <CCardBody>
          <CCardTitle 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            Card title
          </CCardTitle>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1s',
              opacity: 0
            }}
          >
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText 
            style={{
              animation: 'fadeInUp 1s forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}
          >
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</div>

    </>
  );
}

export default Lab;






// import React from 'react'

// export default function Lab() {
//     return (
//         <>
   
//     <div class="ltn__product-area ltn__product-gutter mb-120">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-12">
//                     <div class="ltn__shop-options">
//                         <ul>
//                             <li>
//                                 <div class="ltn__grid-list-tab-menu ">
//                                     <div class="nav">
//                                         <a class="active show" data-bs-toggle="tab" href="#liton_product_grid"><i class="fas fa-th-large"></i></a>
//                                         <a data-bs-toggle="tab" href="#liton_product_list"><i class="fas fa-list"></i></a>
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                <div class="showing-product-number text-right">
//                                     <span>Showing 1–12 of 18 results</span>
//                                 </div>
//                             </li>
//                             <li>
//                                <div class="short-by text-center">
//                                     <select class="nice-select">
//                                         <option>Default Sorting</option>
//                                         <option>Sort by popularity</option>
//                                         <option>Sort by new arrivals</option>
//                                         <option>Sort by price: low to high</option>
//                                         <option>Sort by price: high to low</option>
//                                     </select>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div class="tab-content">
//                         <div class="tab-pane fade active show" id="liton_product_grid">
//                             <div class="ltn__product-tab-content-inner ltn__product-grid-view">
//                                 <div class="row">
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs2.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs3.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">OPTIGEN LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs4.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">HYATT LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs5.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">RIOT LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs6.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">LEO LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs7.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">MEDCITY LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs8.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">MEDIFIX LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div> 
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-xl-3 col-sm-6 col-6">
//                                         <div  class="ltn__product-item ltn__product-item-3 text-center">
//                                             <div  class="product-img">
//                                                 <a href="product-details.html"><img src="img/photos/labs9.jpg" alt="#"/></a>
                                               
//                                             </div>
//                                             <div style={{backgroundColor:'white'}} class="product-info">
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a style={{color:'seagreen'}} href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a  style={{color:'seagreen'}}href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <h2 class="product-title"><a style={{fontFamily:'inherit',fontWeight:'bold'}} href="product-details.html">GENOTICS LABS</a></h2>
//                                                 <div class="product-price">
//                                                     <span>Kannur Town</span>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     {/* <!--  --> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="tab-pane fade" id="liton_product_list">
//                             <div class="ltn__product-tab-content-inner ltn__product-list-view">
//                                 <div class="row">
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/1.png" alt="#"/></a>
//                                                 <div class="product-badge">
//                                                     <ul>
//                                                         <li class="sale-badge">New</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/2.png" alt="#"/></a>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Cosmetic Containers</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/3.png" alt="#"/></a>
//                                                 <div class="product-badge">
//                                                     <ul>
//                                                         <li class="sale-badge">New</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/4.png" alt="#"/></a>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Digital Stethoscope</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/5.png" alt="#"/></a>
//                                                 <div class="product-badge">
//                                                     <ul>
//                                                         <li class="sale-badge">Hot</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/6.png" alt="#"/></a>
//                                                 <div class="product-badge">
//                                                     <ul>
//                                                         <li class="sale-badge">New</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Thermometer Gun</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- ltn__product-item --> */}
//                                     <div class="col-lg-12">
//                                         <div class="ltn__product-item ltn__product-item-3">
//                                             <div class="product-img">
//                                                 <a href="product-details.html"><img src="img/product/4.png" alt="#"/></a>
//                                             </div>
//                                             <div class="product-info">
//                                                 <h2 class="product-title"><a href="product-details.html">Digital Stethoscope</a></h2>
//                                                 <div class="product-ratting">
//                                                     <ul>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star"></i></a></li>
//                                                         <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
//                                                         <li><a href="#"><i class="far fa-star"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="product-price">
//                                                     <span>$165.00</span>
//                                                     <del>$1720.00</del>
//                                                 </div>
//                                                 <div class="product-brief">
//                                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
//                                                 </div>
//                                                 <div class="product-hover-action">
//                                                     <ul>
//                                                         <li>
//                                                             <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
//                                                                 <i class="far fa-eye"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
//                                                                 <i class="fas fa-shopping-cart"></i>
//                                                             </a>
//                                                         </li>
//                                                         <li>
//                                                             <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
//                                                                 <i class="far fa-heart"></i></a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!--  --> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="ltn__pagination-area text-center">
//                         <div class="ltn__pagination">
//                             <ul>
//                                 <li><a href="#"><i class="fas fa-angle-double-left"></i></a></li>
//                                 <li><a href="#">1</a></li>
//                                 <li class="active"><a href="#">2</a></li>
//                                 <li><a href="#">3</a></li>
//                                 <li><a href="#">...</a></li>
//                                 <li><a href="#">10</a></li>
//                                 <li><a href="#"><i class="fas fa-angle-double-right"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }
