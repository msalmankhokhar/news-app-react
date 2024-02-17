import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { useParams } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* business entertainment general health science sports technology */}
        <Route exact path='/' element={
           <Home category='general' key='general' />
        }/>
        <Route exact path='/general' element={
           <Home category='general' key='general' />
        }/>
        <Route exact path='/business' element={
           <Home category='business' key='business'/>
        }/>
        <Route exact path='/entertainment' element={
           <Home category='entertainment' key='entertainment'/>
        }/>
        <Route exact path='/health' element={
           <Home category='health' key='health'/>
        }/>
        <Route exact path='/science' element={
           <Home category='science' key='science'/>
        }/>
        <Route exact path='/sports' element={
           <Home category='sports' key='sports'/>
        }/>
        <Route exact path='/technology' element={
           <Home category='technology' key='technology'/>
        }/>
        

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
