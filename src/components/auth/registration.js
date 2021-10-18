import React, { useState } from "react";
import axios from "axios";
function RegUser({ setToken }) {
    const [data, regUser] = useState({
        email: "",
        password: ""
    });
    const { email, password } = data;
    const onInputChange = e => {
        regUser({ ...data, [e.target.name]: e.target.value });
    };
    if (setToken == null)
        return 
        <main class="main">
        <div class="registerd-login">
            <h1>Already Logged In</h1>
            <hr />
            <button class="btn-regis"><a href="/">Return to the Home page</a></button>
        </div>
        </main>
    const onSubmit = async e => {
        e.preventDefault();
        try {
            console.log(data);
            const token = await axios.post("https://reqres.in/api/register", data);
            setToken(token.data.token);
        }
        catch (e) {
            alert(e.message);
        }
    };


    return (
        <div class="popup-box">
            <div class="box">
                <div class="login-bg">
                    <div class="login-img">
                    <img src={'https://th.bing.com/th/id/R.71bb5610f583afa613bf6de7c16d05d6?rik=SHodgTm9OQ68PQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f12%2fBlue-and-Purple-Background-Free-Download.jpg&ehk=X9aqgux92YWnp7AJGbbp80lkqkePmFuOOfu6ZtDM5is%3d&risl=&pid=ImgRaw&r=0'} />
                </div>
                </div>

                <div class="login-txt">
                    <p class="txt-head">Already registerd? <button class="btn-regis">
                        <a href="/users/login">Log in</a>
                    </button></p>
                <h2 className="text-left mb-4">Registration</h2>
                    <form onSubmit={e => onSubmit(e)}>

                        <div class="form-group mb-4">
                            <label>Email</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn-login mb-1" >Register</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );

};
export default RegUser;