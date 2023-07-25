import Address from "./Address.js";
import Calculator from "./Calculator.js";
import PaySlip from "./PaySlip.js";
import Exam from "./Exam.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table>
        <th colspan="9"><h1>Exam Results</h1></th>
        <tr>
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
      </table>
    </div>
  );
}

export default App;
