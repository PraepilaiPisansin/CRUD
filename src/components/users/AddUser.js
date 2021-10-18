import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [data, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        id: "",
        avatar: ""
    });

    const { first_name, last_name, email, avatar } = data;
    const onInputChange = e => {
        setUser({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://reqres.in/api/users", data);
        const temp_data = JSON.parse(sessionStorage.getItem('data'));
        var last = temp_data.length;
        temp_data[last] = data;
        temp_data[last].id = temp_data[last - 1].id + 1;
        sessionStorage.setItem('data', JSON.stringify(temp_data));
        history.push("/");
    };
    return (
        <main class="main">
            <div class="form">
                <h2 className="text-left mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group col-6 col-6">
                        <input
                            type="text"
                        className="form-control form-control-lg mb-4 mb-4"
                            placeholder="First Name"
                            name="first_name"
                            value={first_name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control form-control-lg mb-4"
                            placeholder="Last Name"
                            name="last_name"
                            value={last_name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="email"
                            className="form-control form-control-lg mb-4"
                            placeholder="E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control form-control-lg mb-4"
                            placeholder="Avatar Link"
                            name="avatar"
                            value={avatar}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn-btn" >Add User</button>
                </form>
                </div>
        </main>
    );
};

export default AddUser;