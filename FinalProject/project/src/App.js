import './App.css';
// import EmployeeManager from './EmployeeManager';
// import Employees from './Employees';
import OpenAccount from './OpenAccount';
import Accounts from './Accounts';

function App(){
    return(
        <div>
            <h1>Welcome to Nationwide</h1>
            {/* <EmployeeManager/>
            <Employees/> */}
            <OpenAccount/>
            <Accounts/>
        </div>
    );
};

export default App;