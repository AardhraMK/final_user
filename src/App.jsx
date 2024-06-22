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
import Header2 from './components/Commonheader.jsx';
import Emergency from './pages/Emergency.jsx';
import Booknow from './pages/Booknow.jsx';
import ViewAppointment from './pages/ViewAppointment.jsx';
import Labdetails2 from './pages/Labdetails2.jsx';
import Editprofile from './pages/Editprofile.jsx';
function App() {
  return (
     <Router>

      {/* <Header/>
      <Header2/> */}
      <Routes>
        <Route path="/" element={<><Header/><Header2/><Home/><Footer/></>} />
        <Route path="/Lab_details" element={<><Header/><Header2/><Lab_details/><Footer/></>} />
        <Route path="/Labdetails2" element={<><Header/><Header2/><Labdetails2/><Footer/></>} />
        <Route path="/lab" element={<><Header/><Header2/><Lab/><Footer/></>} />
        <Route path="/Doctors" element={<><Header/><Header2/><Doctors/><Footer/></>} />
        <Route path="/contact" element={<><Header/><Header2/><Contact/><Footer/></>} />
        <Route path="/register" element={<><Register/></>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/myaccount" element={<Myaccount/>} />
        <Route path="/booking" element={<><Header/><Header2/><Booking/><Footer/></>} />
        <Route path="/emergency" element={<><Header/><Header2/><Emergency/><Footer/></>} />
        <Route path="/booknow" element={<><Header/><Header2/><Booknow/><Footer/></>} />
        <Route path="/viewappointment" element={<ViewAppointment/>} />
        <Route path="/editprofile" element={<><Editprofile/></>} />
      </Routes>
     
    </Router>
  );
}

export default App;
