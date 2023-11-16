import React,{useState} from "react";
function ToggleMessage()
{
    const[showMessage,setShowMessage] =useState(false);
    const toggleMessage=()=>
    {
        setShowMessage(!showMessage);
    };
    return(
        <div>
        <h1>Dashboard</h1>
        <hr></hr>
        <button onClick={toggleMessage}>
            {showMessage? "Hide Message" : "Show Message"}
        </button>
        {showMessage && <p>Hi! How are You!!!</p>}
    </div>
    );
}
export default ToggleMessage;