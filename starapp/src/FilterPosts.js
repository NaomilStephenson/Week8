import Data from './data.json';
import {useState} from 'react';

function FilterPosts(){
    let [filterTable,updateTable] = useState(Data);

    function applyFilter(postId){
        let filteredTable = Data.filter(postId);
        updateTable(filteredTable);
    };

    return(
        <>
        {
        filterTable.map((record)=>
            <table>
                <tr>
                    <td width="20%">{record.postId}</td>
                    <td width="40%">{record.name}</td>
                    <td width="35%">{record.email}</td>
                    <td><input type="button" value="Filter" onClick={() => applyFilter(record.postId)}/></td>
                </tr>  
                <tr>
                    <td colspan="4">{record.body}</td>
                </tr>          
            </table>
        )
        }
        </>
    );
};
export default FilterPosts;