import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Grade (){
    const [username, setUsername] = useState("");
    const [korscore, setKorscore] = useState(0.0);
    const [engscore, setEngscore] = useState(0.0);
    const [mathscore, setMathscore] = useState(0.0);

    const result =()=>{
        let username = document.getElementById("username").value
        console.log('name :'+ username)
        setUsername(username)
        let korscore = document.getElementById("kor score").value
        console.log('kor score :' + korscore)
        setKorscore(korscore)
        let engscore = document.getElementById("eng score").value
        console.log('eng score :'+ engscore)
        setEngscore(engscore)
        let mathscore = document.getElementById("math score").value
        console.log('math score :'+ mathscore)
        setMathscore(mathscore)

    }

    return <Layout><h1>Grad폼</h1>
    
        
    <div>
    <label><b>Username</b></label>
    <input id= "username" type=""/><br/>

    <label><b>kor score</b></label>
    <input id = "kor score" type=""/><br/>

    <label><b>eng score</b></label>
    <input id = "eng score" type=""/><br/>

    <label><b>math score</b></label>
    <input id = "math score" type=""/><br/>
    
    <button onClick={()=>{result()}}>결과</button>

    <div>
        이름 : {username} 국어 : {korscore} 영어 : {engscore} 수학 : {mathscore}
    </div>
    </div>
    </Layout>
}

