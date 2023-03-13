import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InitPage from './pages/InitPage';
import Nav from './components/Nav/Nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 감시가 필요한 컴포넌트 _ 알람, 온습도 등ㅈ */}
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/init' element={<InitPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
