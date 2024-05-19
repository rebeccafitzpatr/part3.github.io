import React from 'react';
import { Link} from "react-router-dom";
import Linguist from './Linguist';
import Home from './Home';
import Se351 from './Se351';
import Se370 from './Se370';
import Cs373 from './Cs373';
import Eg303 from './Eg303';
import Msnotes from './Msnotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Navbar() {
    return (
        <ul>
            <Router>
            <li><Link to = ""><h4>HOME</h4></Link></li>
            <li><Link to= "linguist"><h4>LINGUIST100</h4></Link></li>
            <li><Link to = "eg303"><h4>ENGGEN303</h4></Link></li>
            <li><Link to = "se351"><h4>SOFTENG351</h4></Link></li>
            <li><Link to = "se370"><h4>SOFTENG370</h4></Link></li>
            <li><Link to = "cs373"><h4>COMPSCI373</h4></Link></li>

            
            <h2>Extra curricular notes</h2>
            <li><Link to = "msnotes"><h4>Microsoft Tech Stack</h4></Link></li>

            
                
                <Routes>
                    
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/linguist" element = {<Linguist />} />
                    <Route path = "/eg303" element = {<Eg303 />} />
                    <Route path = "/se351" element = {<Se351 />} />
                    <Route path = "/se370" element = {<Se370 />} />
                    <Route path = "/cs373" element = {<Cs373 />} />
                    <Route path = "/msnotes" element = {<Msnotes />} />
                   
                    
                </Routes>
            </Router>
        </ul>
    );
}

export default Navbar;