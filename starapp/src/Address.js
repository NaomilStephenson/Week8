function Address(props){
    return(
        <div>
            <strong>{props.name}</strong>;
            <br/>
            {props.planet}
            <br/>
            {props.galaxy}
            <br/>
            <br/>
        </div>
    );
};
export default Address;