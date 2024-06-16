import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReportForm from './components/ReportForm';
import CardsList from './cards/CardsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cardData, setCardData] = useState([]);

  const addCardData = (newCardData) => {
    setCardData([...cardData, newCardData]);
  };

  return (
    <Router>
      <div>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/report" element={<ReportForm addCardData={addCardData} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
