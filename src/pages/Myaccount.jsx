import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Myacc.css";
import indian from './indian.jpg';

const MyAccount = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    setTimeout(() => {
      const mockUserData = {
        username: "John Davis",
        email: "johndavis@gmail.com",
        image: "https://via.placeholder.com/150",
        phone: "+91 8293839338",
        address: "peettayil house, Manal, P.O Chalad",
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
      <div className="container-wrapper d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="container-md text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wrapper d-flex justify-content-center align-items-center" style={{ height: '100vh',margin:'7%',borderRadius:'18px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="border bg-light rounded-lg p-5 my-5">
            <div className="text-center" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
              <h2 style={{ fontFamily: 'inherit', fontWeight: 'bold' }} className="mb-4">YOUR ACCOUNT</h2>
              <img
                className="rounded-circle object-fit-cover"
                height={170}
                width={170}
                src={indian}
                alt="User"
              />
              <div className="mt-5">
                <div style={{marginLeft:'18%'}} className="d-flex flex-column align-items-center">
                  {[
                    ["Name", userData.username],
                    ["Email", userData.email],
                    ["Phone", userData.phone],
                    ["Address", userData.address],
                    ["City", userData.city],
                    ["State", userData.state],
                    ["Pincode", userData.pincode]
                  ].map(([label, value], idx) => (
                    <div key={idx} className="d-flex w-100 mb-3">
                      <div className="w-25 text-right pr-3" style={{ paddingRight: '20px' }}>
                        <p className="text-muted m-0" style={{ fontWeight: 'bold' }}>{label}:</p>
                      </div>
                      <div className="w-75 text-left pl-3">
                        <p className="text-dark m-0" style={{ fontWeight: 'bold' }}>
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div style={{marginRight:'23%'}} className="w-50 mt-4  text-center align-items-center">
  <a href="/editprofile" style={{marginRight:'10%'}}>
    <Button variant="success" className="mr-1 w-55">
      Edit Profile
    </Button>
  </a>
  <Button style={{marginRight:'30p%'}} variant="secondary" className="ml-3 ">Delete Profile</Button>
</div>


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
