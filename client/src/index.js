import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// redux store
import { Provider } from 'react-redux';
import createStore from './store/configureStore';

// page
import LandingPage from './pages/LandingPage/LandingPage';
import InitPage from './pages/InitPage';
import TestPage from './pages/TestPage/TestPage';
import BootPage from './pages/BootPage/BootPage';
import HealthcarePage from './pages/HealthcarePage';
import Nav from './components/Nav/Nav';
const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BootPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/Healthcare" element={<HealthcarePage />} />
        <Route path="/init/*" element={<InitPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

//
