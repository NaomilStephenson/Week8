function FilterNames(){
    let family = [
        {"name": "John", "surname": "Thomas", "age": 35, "sex":"M"},
        {"name": "Mary", "surname": "Thomas", "age": 31, "sex":"F"},
        {"name": "Sarah", "surname": "Thomas", "age": 10, "sex":"F"}
    ];

    function getFirstName(record){
        return record.name;
    };

    function getFemales(record){
        if(record.sex == "F"){
            return true;
        } else {
            return false;
        };
    };

    return (
        <>
        {family.map(getFirstName)}
        <br/>
        {family.filter(getFemales)}
        </>
    );
};

export default FilterNames;