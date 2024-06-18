import React, { useState } from 'react';

function AppointmentBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    email: '',
    phone: '',
    date: '',
    timeslot: '9:00 AM' // default timeslot
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      age: '',
      gender: 'male',
      email: '',
      phone: '',
      address:'',
      date: '',
      labname:'',
      testname:'',
      timeslot: '9:00 AM'
    });
  };

  return (
    <div style={{ maxWidth: '690px', margin: '10% auto' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '18px', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center', fontFamily: 'inherit' }}>BOOK YOUR APPOINTMENT</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontWeight: 'bold' }}>
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }} />

            <label htmlFor="age">AGE:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '2px', borderRadius: '6px', height: '50px' }} />

            <label htmlFor="gender">GENDER:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '7px', height: '50px' }}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }} />

            <label htmlFor="phone">PHONE NUMBER:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }} />

            <label htmlFor="address">ADDRESS:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }} />
            
            <label htmlFor="date">DATE:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }} />
          
            <label htmlFor="labname">LAB NAME:</label>
<select id="labname" name="labname" value={formData.labname} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }}>
  <option value="">Select Lab Name</option>
  <option value="Lab A">Optigen labs</option>
  <option value="Lab B">RIOTT labs</option>
  {/* Add more lab options as needed */}
</select>

<label htmlFor="testname">TEST NAME:</label>
<select id="testname" name="testname" value={formData.testname} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }}>
  <option value="">Select Test Name</option>
  <option value="Test X">Blood Test </option>
  <option value="Test Y"> Thyroid Test</option>
  {/* Add more test options as needed */}
</select>

            <label htmlFor="timeslot">TIME:</label>
            <select id="timeslot" name="timeslot" value={formData.timeslot} onChange={handleInputChange} required style={{ width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px', borderRadius: '6px', height: '50px' }}>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="10:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM">11:00 AM - 12:00 AM</option>
              {/* Add more timeslots as needed */}
            </select>

            


          </div>
          <button type="submit" style={{ width: '40%', marginTop: '30px', marginBottom: '20px', alignItems: 'center', marginLeft: '30%', padding: '10px', borderRadius: '4px', backgroundColor: 'seagreen', color: '#fff', border: 'none', cursor: 'pointer' }}>Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentBookingForm;






