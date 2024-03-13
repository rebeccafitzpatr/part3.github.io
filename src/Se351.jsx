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
            <p>Database users can be either those who use the database(Actors on the scene) or those who design and implement the DBMS software(Workers Behind the Scene).</p>

        </article>
        

    )
}

export default Se351;