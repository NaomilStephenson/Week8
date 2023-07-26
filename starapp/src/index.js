import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DiceRoll from "./DiceRoll.js";
import FilterNames from "./FilterNames.js";
import Employees from "./Employees.js";
import Event from "./Event.js";
import School from "./School.js";
// import Promises from "./Promises.js";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>React Training Demos</h1>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/diceroll">Dice Roll</Link></li>       
          <li><Link to="/filternames">Filter Names</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/school">School</Link></li>
          {/* <li><Link to="/promises">Promises</Link></li> */}
        </ul>
      </nav>
      <Routes>
          <Route path = "/diceroll" element={<DiceRoll/>}/> 
          <Route path = "/filternames" element={<FilterNames/>}/> 
          <Route path = "/employees" element={<Employees/>}/> 
          <Route path = "/event" element={<Event/>}/> 
          <Route path = "/school" element={<School/>}/> 
          {/* <Route path = "/promises" element={<Promises/>}/>  */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
