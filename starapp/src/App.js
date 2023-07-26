// import DiceRoll from "./DiceRoll.js";
// import Address from "./Address.js";
// import Exam from "./Exam.js";
// import Accent from "./Accent.js";
// import Dobble from "./Dobble.js";
// import FilterNames from "./FilterNames.js";
// import Employees from "./Employees.js";
// import Event from "./Event.js";
// import School from "./School.js";
import Promises from "./Promises.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This page has loaded</h1>
      <div id = "Dice Roll">
            {/* <DiceRoll/>
            <DiceRoll/>
            <DiceRoll/>
            <DiceRoll/> */}
      </div>
      <div id = "Galactic Address Book">
          {/* <p>Star are Awesome!</p>
          <Address name="Naomi Stephenson" planet="Earth" galaxy="Milky Way" />
          <Address name="Doctor Who" planet="Galafray" galaxy="?" />
          <Address name="Goofy" planet="Pluto" galaxy="Milky Way" />
          <Address name="Teal'c" planet="Chulak" galaxy="Andromeda" /> */}
      </div>
      <div id = "ExamResults">
          {/* <table>
            <th colspan="10"><h1>Exam Results</h1></th>
            <tr>
              <td width="10"></td>
              <td>
                <Exam name="Andy" physics="80" chemistry="64" biology="55" mathematics="65" english="62"/>
              </td>
              <td width="10"></td>
              <td>
                <Exam name="Bart" physics="12" chemistry="40" biology="35" mathematics="0" english="51"/>
              </td>
              <td width="10"></td>
              <td>
                <Exam name="Charlie" physics="61" chemistry="85" biology="67" mathematics="58" english="0"/>
              </td>
              <td width="10"></td>
              <td>
                <Exam name="David" physics="98" chemistry="97" biology="92" mathematics="100" english="76"/>
              </td>
              <td width="10"></td>
              <td>
                <Exam name="Evan" physics="76" chemistry="82" biology="68" mathematics="71" english="89"/>
              </td>
            </tr>
          </table> */}
      </div>
      <div id = "Accent Formatting">
          {/* <Accent>Welcome to the House of Fun!</Accent> */}
      </div>
      <div id = "Doubling all Array Values">
        {/* <Dobble/> */}
      </div>
      <div id = "Filter family Names">
        {/* <FilterNames/> */}
      </div>
      <div id = "Salary Information">
        {/* <Employees/> */}
      </div>
      <div id = "Use State Change Button">
        {/* <Event/> */}
      </div>
      <div id = "Add to Array using React Button">
        {/* <School/> */}
      </div>
      <div id = "Promises & Callbacks upsing External API">
        <Promises/>
      </div>
    </div>
  );
};

export default App;
