function Dobble(){
    let numbers = (1,2,3,4);
    let doubleNumbers = numbers.map(multiple);

    function multiple(value){
        let newValue = value*2;
        return newValue;
    };

    return (
        <>
            {numbers.length}
            <br/>
            {doubleNumbers[1]}
        </>
    );
};

export default Dobble();