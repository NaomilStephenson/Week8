function DiceRoll(){
    let a = Math.floor(Math.random()*6);
    let b = Math.floor(Math.random()*6);
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