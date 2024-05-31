import React, { useState } from 'react';


function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this data to a server for further processing
  };

  return (
    <div style={{ 
      maxWidth: '700px', 
      marginBottom: '12%',
      marginLeft: '25%',
      marginTop: '20px', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '12px',
      backgroundImage: 'url(bokk)', // Replace "path/to/your/image.jpg" with the actual path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Book Appointment</h2>
      <form style={{ display: 'grid', gridGap: '10px' }} onSubmit={handleSubmit}>
        <label style={{ fontWeight: 'bold' }} htmlFor="name">Name:</label>
        <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        
        <label style={{ fontWeight: 'bold' }} htmlFor="email">Email:</label>
        <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label style={{ fontWeight: 'bold' }} htmlFor="phone">Phone:</label>
        <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        
        <label style={{ fontWeight: 'bold' }} htmlFor="date">Date:</label>
        <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="date" id="date" name="date" min="2024-05-30" value={formData.date} onChange={handleChange} required />
        
        <label style={{ fontWeight: 'bold' }} htmlFor="time">Time:</label>
        <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        
        <button style={{ padding: '5px 5px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer',maxWidth:'20%' }} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;



// import PropTypes from 'prop-types';
// import React, { useState } from 'react';




// const MakeAppointment = ({ apartmentId }) => {
//   const [message, setMessage] = useState('');

//   const handleAppointmentSubmit = event => {
//     event.preventDefault();

//     createAppointment(event.target.children[0].value, apartmentId)
//       .then(message => setMessage(message));
//   };

//   return (
//     <>
//       <form onSubmit={handleAppointmentSubmit}>
//         <input type="datetime-local" />
//         <button type="submit">Make An Appointment</button>
//         <p>{message}</p>
//       </form>
//     </>
//   );
// };

// MakeAppointment.propTypes = {
//   apartmentId: PropTypes.string.isRequired,
// };

// export default MakeAppointment;