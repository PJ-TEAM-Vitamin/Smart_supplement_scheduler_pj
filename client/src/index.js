import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// redux store
import { Provider } from 'react-redux';
import createStore from './store/configureStore';

// page
import LandingPage from './pages/LandingPage';
import InitPage from './pages/InitPage/InitPage';
import Nav from './components/Nav/Nav';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/init' element={<InitPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
