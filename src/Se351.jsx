import React from 'react';
function Se351() {
    return (
        <article>
            <h3>These are SOFTENG351 notes for 2024 - SOFTENG351 Fundamentals of Database Systems</h3>
            <p>This course looks at designing and using a database, aswell as looking at the theoretical consideration of how can we measure the quality of a database design.</p>
            <p>The second half of the course will look at how to implement database systems</p>
            <p><b>Concepts</b></p>
            <ul>
                <li>Database Systems and Concepts, Data modelling and Diagram representation</li>
                <li>Structured Queru Language (SQL)</li>
                <li>Relational Algebra, Functional Dependencies and Normalisation</li>
                <li>Implementation: Transaction processing, Storage and indexing, Query processing and optimization</li>
                <li>Advanced topics: NoSQL, Reliable and scalable applications</li>
            </ul>

            <h4>Database and Database Users</h4>
            <p>Databases are used everywhere, across all domains, to store and manage large amounts of data.</p>
            <p>Databases can be more effective than traditional file management systems because as long as the principles of database design are adhered to, DBMS software can take care of the file management. The database systems are made up of DBMS software combined with its data/applications. DBMS software allows us to define, construct, manipulate and process/share the database.</p>
            <p>Applications can interact with databases and create queries and transactions at user application level.</p>
            <p>Main characteristics of the database approach: self describing nature, insulation between programs and data, data abstraction, multiple views of the data, sharing of data and multi-user transaction processing. </p>
            <p>Database <b>users</b> can be either those who use the database(Actors on the scene) or those who design and implement the DBMS software(Workers Behind the Scene).</p>
            <p>DBMS systems may not be necessary when the database are already quite simple/well defined. Also it may not be necessary if there will only be a single user access.</p>
            <p>DBMS requires a high initial investment of resources and sometimes hardware to provide generality, security, concurrency, recovery and integrity utilities. Therefore it may be impossible to utilise DBMS in embedded systems with limited storage.</p>

            <h4>Database Systems Modelling and Architecture</h4>
            <p><b>Data Model:</b>A set of concepts to describe the <b>structure</b>, <b>operations</b> and <b>constraints</b> for the database.</p>
            <p><b>Categories of Data Models:</b></p>
            <ul>
                <li><p>Conceptual data models: high-level, semantic</p><p>Concepts are conveyed very humanly, AKA Object-based data model</p></li>
                <li><p>Physical data models: low-level, internal</p><p>Concepts described as they are processed by the computer</p></li>
                <li><p>Implementation data models: representational</p><p>Concepts are between these above described, relational data models</p></li>
                <li><p>Self-describing data models: </p><p>Combine description of the data with their values, e.g XML, key-value</p></li>
            </ul>

            <h3>Basic SQL</h3>

            <p>SQL Data Definition and Data Types: using CREATE SCHEMA name, CREATE TABLE name (ATTRIBUTES), INSERT INTO-VALUES, DELETE FROM-WHERE, UPDATE-SET-WHERE </p>
            <br/>
            <p>Retrievals using SELECT-FROM-WHERE structure, we can make it more specific using the substring pattern matching/arithmetic operation techniques e.g 'WHERE date LIKE '____9__'. We can display the results of a query in a particular order using SELECT-FROM-WHERE-ORDER BY</p>

            <h3>More SQL: Complex queries, aggregate functions, triggers, views, and schema modification</h3>
            <p>Nested queries, correlated nest queries, joining tables and outer joins.</p>
            <p>Grouping: SELECT-FROM-GROUP BY,SELECT-FROM-WHERE-GROUPBY, SELECT-FROM-WHERE-GROUP BY-HAVING</p>

            <h3>Relational Algebra, Relational Calculus</h3>
            <p>The basic set of operations for the formal relational model is the relational algebra. Also relational algebra forms the basis to optimise queries. <b>sigma</b> -selection condition- (Relation), <b>project</b> -attribute list- (Relation), <b>rho</b> -rename operation</p>
            <br/>
            <p>Union, Intersection, Minus, Cartesian Product, Join, Division . Generalised projection, Aggregate Function</p>
        </article>
        

    )
}

export default Se351;