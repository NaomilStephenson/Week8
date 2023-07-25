function Results(props){
    let physics = 0;
    let chemistry = 0;
    let biology = 0;
    let mathematics = 0;
    let english = 0;
        physics = parseInt(props.physics);
        chemistry = parseInt(props.chemistry);
        biology = parseInt(props.biology);
        mathematics = parseInt(props.mathematics);
        english = parseInt(props.english);
    let total = physics + chemistry + biology + mathematics + english;
    let percentage = Math.floor(total / 5);
    let pass;
    if ( percentage >= 90 ){
        pass = "A+";
    } else if ( percentage >= 80 && percentage < 90 ){
        pass = "A";
    } else if (percentage >= 70 && percentage < 80 ){
        pass = "B";
    } else if (percentage >= 60 && percentage < 70 ){
        pass = "C";
    } else if (percentage >= 40 && percentage < 60 ){
        pass = "Passed";
    } else {
        pass = "Failed";
    };
    return(
        <div>
            <strong>Name: </strong>{props.name}
            <br/>
            Physics: {physics}
            <br/>
            Chemistry: {chemistry}
            <br/>
            Biology: {biology}
            <br/>
            Maths: {mathematics}
            <br/>
            English: {english}
            <br/>
            <hr/>
            <br/>
            <strong>Total Marks: </strong>{total}
            <br/>
            {percentage}%
            <br/>
            <strong>You have: </strong>{pass}
            <br/>
            <br/>
        </div>
    );
};
export default Results;