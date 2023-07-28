import {useState} from 'react';

function Accounts(){

    let[records,setRecords] = useState([]);

    function getDataFromResponse(data){
        console.log(data);
        setRecords(data);
    };

    function processResponse(response){
        let jsonPromise = response.json();
        jsonPromise.then(getDataFromResponse);
    };

    function UpdateAccounts(){
        let responsePromise = fetch('http://localhost:4000/Accounts');
        responsePromise.then(processResponse)
    };
    
    return(
        <>
            <h1>Applications in Progress</h1>
            <input type="button" value="Refresh" onClick={ () => UpdateAccounts() }/>
            <table>
                {
                    records.map( (rec) =>
                    <tr>
                        <td>{rec.accno}</td>
                        <td>{rec.name}</td>
                    </tr>
                    )
                }
            </table>
        </>
    );
};

export default Accounts;