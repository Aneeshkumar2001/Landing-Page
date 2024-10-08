import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AnotherPage from './AnotherPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
