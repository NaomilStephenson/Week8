import {useState} from 'react';

function Employees(){
    let[records,setRecords] = useState([]);

    function getDataFromResponse(data){
        console.log(data);
        setRecords(data);
    };

    function processResponse(response){
        let jsonPromise = response.json();
        jsonPromise.then(getDataFromResponse);
    };

    function getEmployees(){
        let responsePromise = fetch('http://localhost:4000/HR');
        responsePromise.then(processResponse)
    };
    return(
        <>
            <h1>Current Employees</h1>
            <input type="button" value="Refresh" onClick={ () => getEmployees() }/>
            <table>
                {
                    records.map( (rec) =>
                    <tr>
                        <td>{rec.eno}</td>
                        <td>{rec.ename}</td>
                        <td>{rec.esal}</td>
                        <td>{rec.edept}</td>
                    </tr>
                    )
                }
            </table>
        </>
    );
};

export default Employees;