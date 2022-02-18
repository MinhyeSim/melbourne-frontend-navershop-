import React, { useState } from "react";
import Layout from '../containers/Layout';

export default function Login(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    

    const result = ()=>{
    let username = document.getElementById("username").value
    console.log('username :' + username)
    setUsername(username)
    let password = document.getElementById("password").value
    console.log('password :' + password)
    setPassword(password)


    }


    return <Layout><h1>로그인폼</h1>
        
    <div>
    <label><b>Username</b></label>
    <input id ="username"type=""/><br/>

    <label htmlFor=""><b>Password</b></label>
    <input id = "password"type=""/><br/>

    <button>Login</button><br/>
    <label><input type="checkbox"/>Remember me</label><br/>
        
    </div>
    <div>
    <button>Cancel</button><br/>
    <span>Forgot<a>password?</a></span>
    </div>
    
    </Layout>
}


