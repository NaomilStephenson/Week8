function Results(props){
    let physics = 0;
    let chemistry = 0;
    let biology = 0;
    let mathematics = 0;
    let english = 0;
        physics = props.Physics;
        chemistry = props.Chemistry;
        biology = props.biology;
        mathematics = props.mathematics;
        english = props.english;
    let total = physics + chemistry + biology + mathematics + english;
    let percentage = total / 5 * 100;
    let pass;
    switch(percentage){
        case ()>=90):
            pass = "A+";
        case (>=80 && <90):
            pass = "A";
        case (>=70 && <80):
            pass = "B";
        case (>=60 && <70):
            pass = "C";
        case (>=40 && <60):
            pass = "Pass";
        case (<70):
            pass = "Fail";
    }

    return(
        <div>
            <strong>Name:</strong>{props.name}
            <br/>
            Physics:{physics}
            <br/>
            Chemistry:{chemistry}
            <br/>
            Biology:{biology}
            <br/>
            Maths:{mathematics}
            <br/>
            English:{english}
            <br/>
            <hr/>
            <br/>
            <strong>Total Marks:</strong>{total}
            <br/>
            {percentage}%
            <br/>
            <strong>You have:</strong>{pass}
            <br/>
            <br/>
        </div>
    );
};
export default Results;