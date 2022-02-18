import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Calc (){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [opcode, setOpcode] = useState("");
    const [result, setResult] = useState(0);
    
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자 1 :'+num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자 2 : '+num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        console.log('결과 :'+result)
    }

    return <Layout><h1>Calc폼</h1>
       
    <div>
    <label><b>num1</b></label>
    <input id = "num1" type=""/><br/>

    <label htmlFor=""><b>opcode</b></label>
    <select name="" id="">
        <option value="">+</option>
        <option value="">-</option>
        <option value="">*</option>
        <option value="">/</option>
        <option value="">%</option>
    </select>
    
    <br/>

    <label htmlFor=""><b>num2</b></label>
    <input id = "num2" type="" /><br/>
    <button onClick={()=>{setNum1(document.getElementById('num1').value)}}>숫자1 결정</button>
    <button onClick={()=>{setNum2(document.getElementById('num2').value)}}>숫자2 결정</button>
    <button onClick={()=>{sum()}}>더하기 실행</button>
    <div>결과: {num1} + {num2} = {result}</div>
    
    </div>
    </Layout>
}

