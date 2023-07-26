import {useState} from 'react';

function Promises(){
    let[records,assignRecord]=useState([]);
    function displayData(DataValues){
        assignRecord(DataValues);
    };
    function processResponse(response){
        let responseData = response.json();
        responseData.then(displayData);
    };
    function fetchData(entryID){
        let address = "http://jsonplaceholder.typicode.com/" + toString(entryID) + "/comments";
        let response = fetch(address);
    response.then(processResponse);
    };
    return(
        <>
            <h1> Data Entries from <strong>Json Placeholder API</strong></h1>
            <br/>
            <input type="number" placeholder="Enter Entry ID" id="selectedEntry"/>
            <input type="button" value="Get Data" onclick={fetchData((document.getElementById="selectedEntry").value)}/>

            <table>
                <th><td>ID</td><td>Name</td><td>email</td></th>
                {
                    records.map( (value) =>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                        </tr>
                    )
                }
           </table>
        </>
    );
};

export default Promises();