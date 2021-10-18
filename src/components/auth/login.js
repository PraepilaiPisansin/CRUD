import React, { useState } from "react";
import axios from "axios";
function LogUser({ setToken }) {
    const [data, logUser] = useState({
        email: "",
        password: ""
    });
    const { email, password } = data;
    const onInputChange = e => {
        logUser({ ...data, [e.target.name]: e.target.value });
    };
    if (setToken == null)
        return 
        <main class="main">
        <div class="registerd-login">
            <h1>Already Logged In</h1>
            <hr/>
            <button class="btn-regis"><a href="/">Return to the Home page</a></button>
        </div>
        </main>
        
    const onSubmit = async e => {
        e.preventDefault();
        try {
            const token = await axios.post("https://reqres.in/api/login", data);
            setToken(token.data.token);
            console.log(setToken);
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
                    <p class="txt-head">Already have an account? <button class="btn-regis">
                        <a href="/users/register">Sign in</a>
                    </button></p>

                    <h2>Welcome to Login!</h2>
                    <h6 class="sub-topic">Register your account</h6>
                    <br/>
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
                        <button class="btn-login mb-1" >Login</button>
                    </form>

                    <p class="txt-foot">Create account with 
                            <button><i class="text-primary bi bi-facebook"></i></button>
                        <button><i class="text-danger bi bi-google"></i></button>
                        <button><i class="text-primary bi bi-twitter"></i></button>
                    </p>
                </div>

                
            </div>
        </div>
    );
};
export default LogUser;