import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import PlanSelection from './pages/PlanSelection/PlanSelection';
import ResponsiveTopBar from './components/ResponsiveTopBar/ResponsiveTopBar';
import DeviceManagement from './pages/DeviceManagement/DeviceManagement'; // Import the Device page

function App() {
  return (
    <Router>
      <ResponsiveTopBar />
      <div className="app-container">
        <Sidebar />
        <main>  
          <Routes>
            <Route path="/subscription" element={<PlanSelection />} />
            <Route path="/device" element={<DeviceManagement />} /> {/* Add Device route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
