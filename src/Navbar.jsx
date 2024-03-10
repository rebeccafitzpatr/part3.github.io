import React from 'react';
import { Link} from "react-router-dom";
import Linguist from './Linguist';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Navbar() {
    return (
        <ul>
            <Router>
            <li><Link to = ""><h4>HOME</h4></Link></li>
            <li><h4>ENGGEN303</h4></li>
            <li><h4>SOFTENG351</h4></li>
            <li><h4>SOFTENG370</h4></li>
            <li><h4>COMPSCI373</h4></li>
            <li><Link to= "linguist"><h4>LINGUIST100</h4></Link></li>

            
                
                <Routes>
                    <Route path = "/linguist" element = {<Linguist />} />
                    <Route path = "/" element = {<Home />} />
                </Routes>
            </Router>
        </ul>
    );
}

export default Navbar;