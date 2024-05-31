import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Lab from './pages/Lab.jsx';
import Lab_details from './pages/Lab_details.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctors from './pages/Doctors.jsx';
import Contact from './pages/Contact.jsx';
import Register from './pages/Register.jsx';
import UserLogin from './pages/UserLogin.jsx';
import Myaccount from './pages/Myaccount.jsx';
import Booking from './pages/Booking.jsx';
function App() {
  return (
     <Router>

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Lab_details" element={<Lab_details/>} />
        <Route path="/lab" element={<Lab/>} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/myaccount" element={<Myaccount/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
