import React, {useState} from "react"
import Layout from "../containers/Layout"
import axios from "axios";
import { useLinkClickHandler } from "react-router-dom";
export default function Bmi (){

    const[inputs,setInputs] = useState({})
    const {name,height,weight} = inputs;
 
    const handleChange = (e) => { 
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }
        
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name,height,weight}
        alert(`사용자 이름 : ${JSON.stringify(bmiRequest)}`) 
           
    }
    return (<Layout>
    <form>
    <h1>Bmi폼</h1>

    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange}/><br/>

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange}/><br/>

    <label htmlFor=""><b>weight</b> </label>
    <input type="text" name="weight" onChange={handleChange}/><br/>
    <button onClick={handleClick}> BMI 체크</button>
      
    </div>
    </form>

    </Layout>)
    
    }
