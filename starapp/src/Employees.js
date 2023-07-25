function Employees(){
    let employees=[
        {"name": "John", "surname": "Thomas", "dept": "IT", "salary":15000},
        {"name": "Mary", "surname": "Thomas", "dept": "IT", "salary":6000},
        {"name": "Sarah", "surname": "Thomas", "dept": "IT", "salary":28000}
    ];
    return(
        <>
        <table>
            {
            employees.map((record)=>
                <tr>
                    <td>{record.name}</td>
                    <td>{record.surname}</td>
                    <td>{record.dept}</td>
                    <td>{record.salary}</td>
                </tr>            
                )
            }
            </table>
        </>
    );
};
export default Employees;