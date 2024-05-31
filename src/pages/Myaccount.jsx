

// import React from "react";
// import person1 from './person1.avif';
// import './Myacc.css';



// const About = () => {
//   return(
//    <>
//    <div class="page-content page-container" id="page-content">
//     <div class="padding">
//         <div class="row container d-flex justify-content-center">
// <div class="col-xl-6 col-md-12">
//                                                 <div class="card user-card-full">
//                                                     <div class="row m-l-0 m-r-0">
//                                                         <div class="col-sm-4 bg-c-lite-green user-profile">
//                                                             <div class="card-block text-center text-white">
//                                                                 <div class="m-b-25">
//                                                                     <img src={person1} class="img-radius" alt="User-Profile-Image"/>
//                                                                 </div>
//                                                                 <h6 class="f-w-600">Hembo Tingor</h6>
//                                                                 <p >User</p>
//                                                                 <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
//                                                             </div>
//                                                         </div>
//                                                         <div class="col-sm-8">
//                                                             <div class="card-block">
//                                                                 <h6 class="m-b-20 p-b-5 b-b-default f-w-600">User Information</h6>
//                                                                 <div class="row">
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Email</p>
//                                                                         <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
//                                                                     </div>
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Phone</p>
//                                                                         <h6 class="text-muted f-w-400">98979989898</h6>
//                                                                     </div>
//                                                                 </div>
//                                                                 <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
//                                                                 <div class="row">
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Recent</p>
//                                                                         <h6 class="text-muted f-w-400">Sam Disuja</h6>
//                                                                     </div>
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Most Viewed</p>
//                                                                         <h6 class="text-muted f-w-400">Dinoter husainm</h6>
//                                                                     </div>
//                                                                 </div>
//                                                                 <ul class="social-link list-unstyled m-t-40 m-b-10">
//                                                                     <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
//                                                                     <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
//                                                                     <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
//                                                                 </ul>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                              </div>
//                                                 </div>
//                                             </div>




//    <div class="container" style={{margin: '15%'}}>
//     <div class="main-body">
    
//         <div class="row gutters-sm">
//             <div class="col-md-4 mb-3">
//                 <div class="card">
//                     <div class="card-body">
//                         <div class="d-flex flex-column align-items-center text-center">
//                             <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
//                             <div class="mt-3">
//                                 <h4>John Doe</h4>
//                                 <p class="text-secondary mb-1">USER</p>
//                                 {/* <p class="text-muted font-size-sm">USER</p>  */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-md-8 mb-8">
//                 <div class="card mb-3">
//                     <div class="card-body">
//                         <div class="row">
//                             <div class="col-sm-3">
//                                 <h6 class="mb-0">Full Name</h6>
//                             </div>
//                             <div class="col-sm-9 text-secondary">
//                                 Kenneth Valdez
//                             </div>
//                         </div>
//                         <hr class="info-line"/> 
//                         <div class="row">
//                             <div class="col-sm-3">
//                                 <h6 class="mb-0">Email</h6>
//                             </div>
//                             <div class="col-sm-9 text-secondary">
//                                 fip@jukmuh.al
//                             </div>
//                         </div>
//                         <hr class="info-line"/> 
//                         <div class="row">
//                             <div class="col-sm-3">
//                                 <h6 class="mb-0">Phone</h6>
//                             </div>
//                             <div class="col-sm-9 text-secondary">
//                                 (239) 816-9029
//                             </div>
//                         </div>
//                         <hr class="info-line"/> 
//                         <div class="row">
//                             <div class="col-sm-3">
//                                 <h6 class="mb-0">Mobile</h6>
//                             </div>
//                             <div class="col-sm-9 text-secondary">
//                                 (320) 380-4539
//                             </div>
//                         </div>
//                         <hr class="info-line"/> 
//                         <div class="row">
//                             <div class="col-sm-3">
//                                 <h6 class="mb-0">Address</h6>
//                             </div>
//                             <div class="col-sm-9 text-secondary">
//                                 nile house, manal,po chalad ,kannur
//                             </div>
//                         </div>
//                         <hr class="info-line"/>
//                         <div class="row">
//                             <div class="col-sm-12">
//                                 <a href="/register"><button class="btn btn-outline-primary">Edit profile</button></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//    </>
//   )
// }
// export default About






import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function EditButton() {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}