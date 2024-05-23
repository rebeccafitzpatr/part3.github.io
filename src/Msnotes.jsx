import React from 'react';
import Navbar from "./Navbar";
import { Link} from "react-router-dom";
function Msnotes() {
    return (
        <article>
            <h3>Many more notes for the Microsoft technologies can be found on Microsoft Learn</h3>
            <h2>Notes for C#</h2>
            <p>Console is a class with methods such as Write(), WriteLine()</p>
            <br/> <p>A literal value is a constant, and usually hardcoded - it never changes. When thinking about strings, "" marks string literals, '' marks char literal. Int literal requires neither. Float literal needs F after the number, bool literal is either true or false.</p>
            <br /> <p>Declaring variables: declare it's data type, and name. Names should follow the naming conventions.</p>
            <br /> <p>Implicitly typed local variables: use var in place of the data type and initialise. i.e var number = 5; rather than int number = 5;. However the data type will still be locked in at initialisation, and unchangeable.</p>
            <br /> <p>Verbatim string literal using @ keeps all white space and character. Add encoded characters using \u followed by Unicode. String interpolation use {} curly brackets and put the value inside them. We can use string interpolation to combine many types of variables in an intuitive way. </p>
            <br /> <p>String concatenation: combine two or more strings using + symbol.</p>

            <h2> Using .NET</h2>
            <p>.NET Runtime hosts/manages your code as it executes on the end user's computer.</p>
            <br /> <p>.NET Class library contains many useful methods. Also you need to create an instance of the class in order to use the methods.Stateful methods rely on values in memory at runtime. Stateless methods(static methods) can work without referring to outher values.</p>   
            <br /><p>Arrays are sequences of individual data elements accessible through a single variable name. We need to declare with the data type and size of array. We can iterate through the elements of the array with the foreach operator:  foreach(int items in inventory) {}  </p> 
            <br/> <p>Conditional operator -- evaluate this condition ? if condition is true,return this value : if condition is false, return this value </p> <p>Variable scope refers to a variable's visibility to other code</p>
        </article>
    )
}

export default Msnotes;