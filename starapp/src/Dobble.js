function Dobble(){
    let nums = [1,2,3,4];
    let doubleNumbers = nums.map(multiple);

    function multiple(value){
        let newValue = value*2;
        return newValue;
    };

    return (
        <>
            {nums.length}
            <br/>
            {doubleNumbers[1]}
        </>
    );
};

export default Dobble();