import './App.css';
import EmployeeManager from './EmployeeManager';
import Employees from './Employees';

function App(){
    return(
        <div>
            <h1>Welcome to Nationwide HR Department</h1>
            <EmployeeManager/>
            <Employees/>
        </div>
    );
};

export default App;