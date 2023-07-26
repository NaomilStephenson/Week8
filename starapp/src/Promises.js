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
    let response = fetch('http://jsonplaceholder.typicode.com/comments');
    response.then(processResponse);

    return(
        <>
            <h1> Data Entries from <strong>Json Placeholder</strong></h1>
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