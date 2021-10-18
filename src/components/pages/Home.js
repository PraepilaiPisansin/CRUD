import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import SearchBox from "./SearchBox";
function Home() {
    const [data, setData] = useState([{}]);
    const token = sessionStorage.getItem('token');
    const [searchTerm, setSearchTerm] = useState(() => {
        return ""
    })
    const searchUser = (e) => {
        setSearchTerm(prevState => console.log(e.target.value))
    };
    useEffect(() => {
        loadUsers();
    }, []);
    async function loadUsers(updated) {
        if (sessionStorage.getItem('firstTime') == 1) {
            const result = await axios.get("https://reqres.in/api/users", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            setData(result.data.data);
            sessionStorage.setItem('firstTime', 0)
            sessionStorage.setItem('data', JSON.stringify(result.data.data))
        }
        else if (updated != null) {
            setData(updated);
            sessionStorage.setItem('data', JSON.stringify(updated))
        }
        else {
            setData(JSON.parse(sessionStorage.getItem('data')));
        }
    };

    const deleteUser = async id => {
        try {
            const res = await axios.delete(`https://reqres.in/api/users/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            if (res.status == 204) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        id = i;
                        break;
                    }
                }
                if (data[i] != null && data[i] != undefined)
                    await delete (data[id]);
                const filtered = data.filter(function (el) {
                    return el != null;
                });
                loadUsers(filtered)
            }
        }
        catch (e) {
            alert(e.message);
        }

    };
    return (
        <main class="main">
            <div class="wrap-bar">
                <h5>Users</h5>
                <SearchBox searchUser={searchUser}></SearchBox>
            </div>
            <br />
            <br />
            <div class="filter-wraper">
                
                    <button>All</button>
                    <button>Men</button>
                    <button>Women</button>
                <button></button>
                

               
                    <button><i class="bi bi-grid-3x2-gap-fill"></i></button>
                    <button><i class="bi bi-layout-sidebar"></i></button>
                <button></button>

                <button><i class="bi bi-funnel-fill"></i></button>
                
            </div>

          
            <div class="scrollable">
                {data?.map((user, i) =>
                    <div class="products-wrap">
                        <div class="products">
                            
                           <p class="products-id"><i class="bi bi-star-fill"></i> <a>{user.id}</a></p>
                            
                            <img src={user.avatar} />

                            <p class="products-name">{user.first_name + " " + user.last_name}</p>
                            <p class="products-email"><i class="bi bi-envelope"></i> {user.email}</p>
                            {user.job}

                            <div class="row btn-custom">
                                <button class="col-6">
                                        <Link
                                        to={`/users/edit/${user.id}`}
                                    >
                                        <i class="bi bi-pencil-square"></i><a> Edit</a>
                                    </Link></button>
                                <button class="col-6"
                                    onClick={() => {
                                        const confirm = window.confirm("Confirm Delete");
                                        if (confirm == true) {
                                            deleteUser(user.id);
                                        }
                                    }}><i class="bi bi-trash-fill"></i> Delete</button>
                            </div>
                        </div>


                    </div>
                )
                }


            </div>

                                {/*<td className="align-middle">
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/users/edit/${user.id}`}
                                    >
                                        Edit
      </Link>
                                    <Link
                                        class="btn btn-danger"
                                        onClick={() => {
                                            const confirm = window.confirm("Confirm Delete");
                                            if (confirm == true) {
                                                deleteUser(user.id);
                                            }
                                        }}
                                    >
                                        Delete
      </Link>
                                    </td>
                            </tr>*/}
                            </main>
                       
    );
};
export default Home;