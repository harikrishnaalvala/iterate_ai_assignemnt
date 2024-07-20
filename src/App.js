import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomeSection/Home';
import './App.css';
import Footer from './components/Footer/Footer';
import MyPoojaPage from './components/MyPoojaPage/MyPoojaPage';
import BookingPage from './components/BookingPage/BookingPage';
import PujaBooking from './components/PujaBooking/PujaBooking';
import PujaPackages from './components/PujaPackages/PujaPackages';
import BookingForm from './components/BookingForm/BookingForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/mypoojapage" element={<MyPoojaPage />} />
         <Route path="/bookingpage" element={<BookingPage />} />
         <Route path="/pujabooking" element={<PujaBooking />} />
         <Route path="/pujapackages" element={<PujaPackages />} />
         <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
