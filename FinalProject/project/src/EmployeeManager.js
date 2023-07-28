function EmployeeManager(){

    function saveEmployee(){
        let newRequest = {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                "eno":document.getElementById("num").value,
                "ename":document.getElementById("name").value,
                "esal":document.getElementById("sal").value,
                "edept":document.getElementById("dept").value
            })
        };
        fetch('http://127.0.0.1:4000/HR/NewEmployee', newRequest);   
    };

    function deleteEmployee(){
        let removeRequest = {
            method: 'DELETE',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                "eno":document.getElementById("num").value,
                "ename":document.getElementById("name").value,
                "esal":document.getElementById("sal").value,
                "edept":document.getElementById("dept").value
            })
        };
        fetch('http://127.0.0.1:4000/HR/deleteEmployee', removeRequest);   
    };

    return(
        <>
            <h1>Employee Details</h1>
                <form name="Employee Details">
                Employee ID: <input type="number" name="Number" id="num"/>
                Name: <input type="text" name="Name" id="name"/>
                Salary: <input type="number" name="Salary" id="sal"/>
                Department: <input type="text" name="Department" id="dept"/>
                <br />
                <input type="button" value="New" onClick={ () => saveEmployee() }/>
                <input type="button" value="Delete" onClick={ () => deleteEmployee() }/>
            </form>
        </>
    )
};
export default EmployeeManager;