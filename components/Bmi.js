import React, { useState } from "react"
import Layout from "../containers/Layout"

export default function Bmi (){
    const[username, setUsername] = useState("");
    const[height, setHeight] = useState(0.0);
    const[weight, setWeight] = useState(0.0);
    
    const result = () => {
        let username = document.getElementById("username").value
         console.log('name :'+username)
         setUsername(username)
         let hegiht = document.getElementById("height").value
         console.log('height :'+hegiht)
         setHeight(hegiht)
         let weight = document.getElementById("weight").value
         console.log('weight :'+weight)  
         setWeight(weight)
    }

    
    return (<Layout><h1>Bmi폼</h1>

        
    <div>
    <label><b>Username</b></label>
    <input id = "username" type=""/><br/>

    <label htmlFor=""><b>height</b></label>
    <input id = "height" type=""/><br/>

    <label htmlFor=""><b>weight</b> </label>
    <input id = "weight" type=""/><br/>

    <button onClick={()=>{result()}}>결정</button>
   
    <div>
        이름:{username} 키:{height} 몸무게 :{weight} 
    </div>
    </div>

    </Layout>)
    
}
