import {useState} from 'react';

function Event(){

    let [x,IncreaseX] = useState(10);
    let [y,IncreaseY] = useState(10);
    let [z,AddZ] = useState(20);

    function X() {
        IncreaseX(++x);
        AddZ(x+y);
    };
    function Y() {
        IncreaseY(++y);
        AddZ(x+y);
    };

    return(
        <>  
            <input type="Button" value="X" onClick={X}/>
            <input type="Button" value="Y" onClick={Y}/>
            <h1>{x} + {y} = {z}</h1>

        </>
    );
};

export default Event;