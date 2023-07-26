function Dobble(){
    let nums = [1,2,3,4];
    let doubleNumbers = nums.map(multiple);

    function multiple(value){
        return value*2;
    };

    return (
        <>
            {nums.length}
            <br/>
            {doubleNumbers}
        </>
    );
};

export default Dobble();