import React, { useState } from "react"
import Layout from "../containers/Layout"
import axios from "axios";
export default function Bmi (){
    const[username, setUsername] = useState("");
    const[height, setHeight] = useState(0.0);
    const[weight, setWeight] = useState(0.0);
    const getBmi = (e) => { 
    e.preventDefault()
    alert('버튼클릭')
        try {
             axios.get('http://localhost:8080/member/bmi/aaa/180.5/80.5')
             .then((res)=>{
                 alert(res + `답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)

             })
        }catch(error){
            alert(`에러가 발생했습니다 [내용] ${error}`)

        }
    }

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

    
    return (<Layout>
    <h1>Bmi폼</h1>
    <div>
    <label><b>Username</b></label>
    <input id = "username"/><br/>

    <label><b>height</b></label>
    <input id = "height"/><br/>

    <label><b>weight</b> </label>
    <input id = "weight"/><br/>
    <input type="button" onClick={getBmi} value = "BMI 체크" /> <br/>
      
    </div>

    </Layout>)
    
}
