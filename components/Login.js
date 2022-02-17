import React from "react";
import Layout from '../containers/Layout';

export default function Login(){
    return <Layout><h1>로그인폼</h1>
    <form>
        
    <div>
    <label><b>Username</b></label>
    <input type=""/><br/>

    <label htmlFor=""><b>Password</b></label>
    <input type=""/><br/>

    <button>Login</button><br/>
    <label><input type="checkbox"/>Remember me</label><br/>
        
    </div>
    <div>
    <button>Cancel</button><br/>
    <span>Forgot<a>password?</a></span>
    </div>
    </form>
    </Layout>
}


