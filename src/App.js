import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/common/Navbar';
import Myprofile from './components/common/Myprofile';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
