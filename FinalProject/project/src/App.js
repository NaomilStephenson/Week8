import './App.css';
import Employees from './Employees';
import NewEmployee from './NewEmployee';

function App(){
    return(
        <div>
            <h1>Welcome to Nationwide HR Department</h1>
            <NewEmployee/>
            <Employees/>
        </div>
    );
};

export default App;
