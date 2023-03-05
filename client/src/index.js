import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InitPage from './pages/InitPage';
import Nav from './components/Nav/Nav';

const reducer = (state, action) => {
   let newState = [];
   switch (action.type) {
      case "INIT": {
         return action.data;
      }
      case "CREATE": {
         newState = [action.data, ...state];
         break;
      }
      default:
         return state;
   }

   localStorage.setItem('info', JSON.stringify(newState));
   return newState;
};

export const SmartStateContext = React.createContext();
export const SmartDispatchContext = React.createContext();

function App() {
   const [data, distpatch] = useReducer(reducer, []);

   useEffect(() => {
      const localDate = localStorage.getItem('info');

      console.log(localDate);
   }, []);


   const onCreate = (name, gender, age) => {
      distpatch({
         type: "CREATE",
         data: {
            name,
            gender,
            age,
         },
      });
   };



   return (
      <SmartStateContext.Provider value={data}>
         <SmartDispatchContext.Provider value={{onCreate}}>
            <Nav />
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/init' element={<InitPage />} />
            </Routes>
         </SmartDispatchContext.Provider>
      </SmartStateContext.Provider>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

//
