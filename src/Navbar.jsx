import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <ul>
            <li><h4>ENGGEN303</h4></li>
            <li><h4>SOFTENG351</h4></li>
            <li><h4>SOFTENG370</h4></li>
            <li><h4>COMPSCI373</h4></li>
            <li><Link to="/linguist"><h4>LINGUIST100</h4></Link></li>
        </ul>
    );
}

export default Navbar;