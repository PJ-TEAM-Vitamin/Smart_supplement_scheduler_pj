import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// redux store
import { Provider } from 'react-redux';
import createStore from './store/configureStore';

// page
import LandingPage from './pages/LandingPage/LandingPage';
import InitPage from './pages/InitPage/InitPage';
import TestPage from './pages/TestPage/TestPage';
import BootPage from './pages/BootPage/BootPage';
import Nav from './components/Nav/Nav';
import InitPage_2 from "./pages/InitPage_2";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/init' element={<InitPage />} />
         <Route path='/init2' element={<InitPage_2/>}/>
        <Route path='/test' element={<TestPage />} />
        <Route path='/boot' element={<BootPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

//
