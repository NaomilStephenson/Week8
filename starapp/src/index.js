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
import FilterPosts from "./FilterPosts.js";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>React Training Demos</h1>
    <BrowserRouter>
      <nav>
        <table>
          <th>
            <td padding="20"><Link to="/diceroll">Dice Roll</Link></td>
            <td padding="20"><Link to="/filternames">Filter Names</Link></td>
            <td padding="20"><Link to="/employees">Employees</Link></td>
            <td padding="20"><Link to="/event">Event</Link></td>
            <td padding="20"><Link to="/school">School</Link></td>
            {/* <td padding="20"><Link to="/promises">Promises</Link></td> */}
            <td padding="20"><Link to="/filterposts">Filter Posts</Link></td>
          </th>
        </table>
      </nav>
      <Routes>
          <Route path = "/diceroll" element={<DiceRoll/>}/> 
          <Route path = "/filternames" element={<FilterNames/>}/> 
          <Route path = "/employees" element={<Employees/>}/> 
          <Route path = "/event" element={<Event/>}/> 
          <Route path = "/school" element={<School/>}/> 
          {/* <Route path = "/promises" element={<Promises/>}/>  */}
          <Route path = "/filterposts" element={<FilterPosts/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
