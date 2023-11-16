import React,{useState} from "react";
function Toogle()
{
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);
    const nameHandler=()=>
    {
        let value=count;
        setCount(++value);
        if(count===3)
        {
        if(name==="Kaioken")
        setName("SuperSaiyan");
        else
        setName("Kaioken");
        setCount(0);
        }
    }
    return(
        <div>
            <h1>Toggle App</h1>
            <hr></hr>
            <h2>{name}</h2>
            <button onClick={nameHandler}>Toogle</button>
        </div>
    );
}
export default Toogle;