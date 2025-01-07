import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage';
import HitungModal from './HitungModal';
import FinancialChart from './FinancialChart';
import UangkuAppWrapper from './UangkuWrapper'; // Pastikan path ini benar

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/UangkuApp">
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Root path menuju Homepage */}
        <Route path="/hitung-modal" element={<HitungModal />} />
        <Route path="/uangku" element={<UangkuAppWrapper />} />
        <Route path="/financial-chart" element={<FinancialChart />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
