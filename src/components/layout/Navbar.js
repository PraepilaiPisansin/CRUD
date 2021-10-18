import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch, Link, NavLink
} from "react-router-dom";


function Navbar({ isLoggedIn }) {
    function logout() {
        sessionStorage.clear();
        window.location.reload();
    }
    const status = isLoggedIn ? "Logout" : "Login/Register";
    return (
        <div class="wrapper">
            {/*<header class="header">
            </header>*/}

            {/* Sidebar*/}
            <aside class="sidebar">
                <nav class="navbar ">
                    <ul>
                        <NavLink className="navbar-brand" to ="/">
                            USERs
        </NavLink>

                        <li ><NavLink activeClassName="side-active dd" exact to='/' ><i class="bi bi-house-fill"></i> Home</NavLink></li>


                        <li ><NavLink activeClassName="side-active" exact to='/users/add' ><i class="bi bi-plus-circle"></i> Add User</NavLink></li>


                        <li > <NavLink activeClassName="side-active" exact to="/etc" onClick={() => { logout() }}><i class="bi bi-box-arrow-left"></i>    {status}
                        </NavLink>
                        </li>

                    </ul>
                    
                   
                </nav>
<div class="line"></div>
                <ul class="nav-foot">
                    <li ><NavLink activeClassName="side-active" exact to='/setting' ><i class="bi bi-gear-fill"></i> Setiing</NavLink></li>
                </ul>
            </aside>




            <aside class="sidebar2">
                <nav class="navbar">
                    <i class="bi bi-house-fill"></i>
                    <i class="bi bi-calendar-date"></i>
                    <i class="bi bi-folder2-open"></i>
                    <i class="bi bi-bar-chart-line-fill"></i>
                    <i class="bi bi-envelope-open-fill"></i>
                </nav>
            </aside>

        </div>


    );
};

export default Navbar;