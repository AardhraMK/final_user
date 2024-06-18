import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "./Myacc.css";

const MyAccount = () => {
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");

  const fetchUserData = () => {
    setTimeout(() => {
      const mockUserData = {
        username: "John Davis",
        age:"20",
        gender: "Male",
        email: "johndavis@gmail.com",
        phone: "+91 8293839338",
        address: "peettayil house, Manal, P.O Chalad",
        labname: "Leo Lab",
        testname: "Blood Test",
        date: "2024-06-15",
        timeslot: "10:00 AM - 11:00 AM",
      };
      setUserData(mockUserData);
    }, 1000);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRescheduleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  if (!userData) {
    return (
      <div className="container-wrapper d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="container-md text-center">
          <p style={{color:"white",fontSize:'20px'}}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wrapper d-flex justify-content-center align-items-center" style={{ height: '100vh',margin:'7%',borderRadius:'8px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="border bg-light rounded-lg p-5 my-5">
            <div className="text-center" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
              <h2 style={{ fontFamily: 'inherit', fontWeight: 'bold' }} className="mb-4">YOUR APPOINTMENT DETAILS</h2>
              <div className="mt-5">
                <div style={{marginLeft:'18%'}} className="d-flex flex-column align-items-center">
                  {[
                    ["Name", userData.username],
                    ["Age", userData.age],
                    ["Gender", userData.gender],
                    ["Email", userData.email],
                    ["Phone", userData.phone],
                    ["Address", userData.address],
                    ["Lab Name", userData.labname],
                    ["Test Name", userData.testname],
                    ["Date", userData.date],
                    ["Time Slot", userData.timeslot]
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
                    <Button variant="success" className="mr-1 w-55" onClick={handleRescheduleClick}>
                      Reschedule 
                    </Button>
                    <Button variant="secondary" className="ml-3 ">Cancel Appointment</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex w-100 mb-3">
            <div className="w-25 text-right pr-3" style={{ paddingRight: '20px' }}>
              <label>Date:</label>
            </div>
            <div className="w-75 text-left pl-3">
              <DatePicker selected={selectedDate} onChange={handleDateChange} />
            </div>
          </div>
          <div className="d-flex w-100 mb-3">
            <div className="w-25 text-right pr-3" style={{ paddingRight: '20px' }}>
              <label>Time Slot:</label>
            </div>
            <div className="w-75 text-left pl-3">
              <select
                className="form-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="10:00">9:00 AM - 10:00 AM</option>
                <option value="14:00">10:00 AM - 11:00 AM</option>
                <option value="16:00">11:00 AM - 12:00 PM</option>
              </select>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyAccount;