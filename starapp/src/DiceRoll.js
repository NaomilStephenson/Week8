function DiceRoll(){
    let a = Math.floor(Math.random()*5)+1;
    let b = Math.floor(Math.random()*5)+1;
    let c = a + b;

    return(
        <>
            <br />
            Die {a}, Die {b}
            <br />
            Your Roll is <strong>{c}</strong>
            <br />

        </>
    );
};

export default DiceRoll;