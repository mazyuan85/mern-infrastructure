import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"
import { useNavigate } from "react-router-dom";

export default function NavBar({user, setUser}) {
    const welcomeMessage = user === null ? "" : `Welcome ${user.name}`
    const navigate = useNavigate();

    function handleLogOut () {
        userService.logOut();
        setUser(null);
        navigate("/");
    }
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <p>{welcomeMessage}</p>
            <button onClick={handleLogOut}>Logout</button>
        </nav>
    );
 
}
