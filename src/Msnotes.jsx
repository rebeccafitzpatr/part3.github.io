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

            <br/>

            <h2>Working with variable data</h2>
            <p>C# relies on data types extensively. Data types restrict the kinds of values that can be stored in a given variablem which can be helpful when trying to create error free code. As developers we want to have confidence that our variables only store valid values. <b>Signed integral types:</b> sbyte -128 to 127, short -32768 to 32767, int -2147483648 to 2147483647, long. <b>Unsigned integral types: </b> byte, ushort, uint, ulong. <b>Reference types: </b> include arrays, classes, and strings, and are treated differently from value types regarding the way values are stored when the application is executing. Value types are stored directly to the stack. Reference types are stored in a separate area called the heap.</p>
        
            <h2>Azure notes</h2>
            <p><b>Describing cloud computing:</b> Microsoft Azure is a cloud computing platform with ever expanding set of services to help build business solutions. Cloud computing is the delivery of computing services over the internet, including virtual machines, storage, databases, networking, Internet of Things, machine learning, artificial intelligence. And because cloud computing uses the internet, it is not constrained by physical infrastructure e.g physical datacenters. This allows users to select the services they need and only pay for what they use. Shared responsibility model - maintence and update requirements are shared between the cloud provider(physical security, power, cooling, network connectivity) and consumer(data and access security). And shared responsibility model is tied to cloud service types (IaaS, PaaS, SaaS).</p>
        </article>
    )
}

export default Msnotes;