import {useState} from 'react';

function OpenAccount(){

    function applyForAccount(){
        let current = document.getElementById("Current").value;
        let type;
        if(current){
            type = "Current";
        }else {
            type = "Savings";
        };
        let newApplication = {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                "name":document.getElementById("name").value,
                "country":document.getElementById("country").value,
                "accountType":type,
            })
        };
        fetch('http://127.0.0.1:4000/CreateAccount', newApplication);
    };

    return(
        <>
            <h1>Open an Account with Nationwide</h1>
            <h3>Please enter your desired account details</h3>

                <form name="Account Request">
                Name: <input type="text" id="name"/>
                Country: <select id="country">
                    <option value="England">England</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Wales">Wales</option>
                </select>
                <fieldset>
                    <legend>Account Type</legend>
                    Current <input type="radio" name="account" id="Current" value="Current"/>
                    Savings <input type="radio" name="account" id="Savings" value="Savings"/>
                </fieldset>

                <br />
                <input type="button" value="Submit" onClick={ () => applyForAccount() }/>
            </form>
        </>
    );
};
export default OpenAccount;