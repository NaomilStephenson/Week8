import Address from "./Address.js";
import Calculator from "./Calculator.js";
import PaySlip from "./PaySlip.js";
import Exam from "./Exam.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Exam Results</p>
      <table>
        <tr>
          <td>
            <Exam
              name="Andy"
              physics="90"
              chemistry="74"
              biology="65"
              mathematics="85"
              english="62"
            />
          </td>
          <td>
            <Exam
              name="Bart"
              physics="12"
              chemistry="40"
              biology="35"
              mathematics="39"
              english="51"
            />
          </td>
          <td>
            <Exam
              name="Charles"
              physics="61"
              chemistry="85"
              biology="67"
              mathematics="58"
              english="45"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
