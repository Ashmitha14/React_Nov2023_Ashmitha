import React,{useEffect,useState} from "react";
import axios from "axios";
function AxiosGet(){
    const[employees,setEmployees]=useState([]);//initializing emrpty array
    useEffect(()=>{ //when loding the page it has to be displayed
        axios //for giving request from client side to server side
        .get(`http://localhost:3001/users`) //we have user details
        .then((res)=>{//get respose
            setEmployees(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    return (
    <div>
        AxiosGet
        <ul>
            {employees.map((employee)=>(
                <li key={employee.id}>{employee.name}</li>
            ))}
        </ul>
        </div>
    );
}
export default AxiosGet;
