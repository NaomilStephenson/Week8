function PaySlip(props){
    let salary = props.salary;
    let tax = 0
    if (salary >= 2000){
        tax = salary / 5
    } else {
        tax = salary / 8
    }
    let net = salary - tax
    return(
    <>
        <h2>{props.name}'s Payslip</h2>
        <p>
            Salary = {salary} credits
            <br/>
            Tax Paid = {tax} credits
            <br/>
            Take Home Pay = {net} credits
            <br/>
            <br/>
        </p>
    </>
    );
};
export default PaySlip;