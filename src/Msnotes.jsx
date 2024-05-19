import React from 'react';
import Navbar from "./Navbar";
import { Link} from "react-router-dom";
function Msnotes() {
    return (
        <article>
            <h2>Notes for C#</h2>
            <p>Console is a class with methods such as Write(), WriteLine()</p>
            <br/> <p>A literal value is a constant, and usually hardcoded - it never changes. When thinking about strings, "" marks string literals, '' marks char literal. Int literal requires neither. Float literal needs F after the number, bool literal is either true or false.</p>
            <br /> <p>Declaring variables: declare it's data type, and name. Names should follow the naming conventions.</p>
            <br /> <p>Implicitly typed local variables: use var in place of the data type and initialise. i.e var number = 5; rather than int number = 5;. However the data type will still be locked in at initialisation, and unchangeable.</p>
            <br /> <p>Verbatim string literal using @ keeps all white space and character. Add encoded characters using \u followed by Unicode. String interpolation use {} curly brackets and put the value inside them. We can use string interpolation to combine many types of variables in an intuitive way. </p>
            <br /> <p>String concatenation: combine two or more strings using + symbol.</p>

        </article>
    )
}

export default Msnotes;