function NewEmployee(){

    let request = {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
            "eno":document.getElementById("num"),
            "ename":document.getElementById("name"),
            "esal":document.getElementById("sal"),
            "edept":document.getElementById("dept")
        })
    };
    fetch('http://127.0.0.1:4000/HR/NewEmployee', request);

    return(
        <>
            <h1>Enter New Employee Employee</h1>
                <form name="Enter New Employee Details">
                {/* Employee ID: <input type="number" name="Number" id="num"/>
                Name: <input type="text" name="Name" id="name"/>
                Salary: <input type="number" name="Salary" id="sal"/>
                Department: <input type="text" name="Department" id="dept"/>
                <br /> */}
                <input type="button" value="New" onClick={ () => fetch() }/>
            </form>
        </>
    )
};
export default NewEmployee;