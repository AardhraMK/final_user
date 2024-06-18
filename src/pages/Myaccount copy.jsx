
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Myacc.css";
import person1 from "./person1.avif";

const MyAccount = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    setTimeout(() => {
      const mockUserData = {
        username: "John Davis",
        email: "johndavis@gmail.com",
        image: "https://via.placeholder.com/150",
        phone: "+91 8293839338",
        address: "peettayil house,Manal,P.O Chalad ",
        city: "Kannur",
        state: "Kerala",
        pincode: "670014",
      };
      setUserData(mockUserData);
    }, 1000);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className="container-wrapper">
        <div className="container-md">
          <p>loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wrapper">
      <Container>
        <Row>
          <Col xs={12} md={2}></Col>
          <Col style={{borderRadius:'10px'}} className="border bg-light rounded-lg p-5 my-5" xs={12} md={8}>
            <div style={{backgroundColor:'rgb(255,255,255,0.8)'}}>
              <h2 style={{fontFamily:'inherit',fontWeight:'bold'}} className="text-center mb-4">YOUR ACCOUNT</h2>
              <div className="text-center">
                <img
                  className="rounded-circle object-fit-cover"
                  height={170}
                  width={170}
                  src={person1}
                  alt="User"
                />
              </div>
              <div style={{alignItems:'baseline',marginLeft:'10%'}} className="mt-5">
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0" style={{ marginLeft: '10px' }}>Name:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold" }}>
        {userData.username}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0">Email:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold" }}>
        {userData.email}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0">Phone:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold" }}>
        {userData.phone}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0">Address:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold"}}>
        {userData.address}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0">City:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold" }}>
        {userData.city}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%',alignItems:'left' }}>
      <p className="text-muted m-0">State:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold",alignItems:'left' }}>
        {userData.state}
      </p>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <div className="text-center" style={{ width: '15%' }}>
      <p className="text-muted m-0">Pincode:</p>
    </div>
    <div className="w-50 text-center">
      <p className="text-dark m-0" style={{ fontWeight: "bold" }}>
        {userData.pincode}
      </p>
    </div>
  </div>

  <div className="w-75 mt-3 text-center" style={{marginLeft:'5%'}}>
    <a href="/register">
      <Button variant="success" className="mr-3">
        Edit Profile
      </Button>
    </a>
    
    <Button style={{marginLeft:'3%'}} variant="secondary">Delete Profile</Button>
  </div>
</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyAccount;