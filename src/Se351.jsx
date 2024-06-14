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

            <h3>Basics of Functional Dependencies + Normalisation</h3>
            <p>So far we have assumed that attributes are grouped to form a relation schema, however we still need a formal way of analysing why one grouping of attributes may be better than another. -- Theory of evaluating relational schema for design quality, and we can discuss relation schema quality at the logical level vs the implementation/physical storage level. Furthermore, database design may be performed using either the bottom-up design methodology or top-down design. The relations are then analysed individually and collectively, leading to further decomposition. Relational database design ultimately produces a set of relations. The implicit goals of the design activity are information preservation and minimum redundancy. The relational design must capture all of the concepts: attribute types, entity types, relationship types + generalisation/specialisation relationships. Four measures of relation schema design quality: making sure that the semantics of the attributes is clear in the schema, reducing the redundant information in tuples, reducing the null values in tuples, disallowing the possibility of generating spurious tuples.</p>

            <br/>
            <p>Imparting clear semantics to attributes in relations: whenever we group attributes to form a relation schema we assume that attributes belonging to one relation have certain real-world meaning and proper interpretation associated with them. Semantics of a relation refers to its meaning resulting from the interpretation of attribute values int a tuple. Usually, the easier it is to explain the semantics of the relation, the better the relation schema design is. <b>Guideline 1: </b>design a relation schema so that it is easy to explain its meaning. Do not combine attributes from multiple entity types and relationship types into a single relation. Furthermore it is easier to explain meaning when a relation schema corresponds to only one entity type rather than multiple entities and relationships.</p>
            <br/>
            <p>Redundant information: One goal of schema design is to minimise the storage space used by the base relations. This can be done by grouping attributes in to relation schemas. Storing natural joins of base relations leads to an additional problem referred to as update anomalies - insertion, delation and modification. <b>Insertion anomalies:</b> when inserting a new tuple for an instance we must enter all the attribute values correctly so that they are consistent with the corresponding values from other instances/departments. <b>Deletion anomalies: </b> If we delete a tuple that happens to represent the last instance of a particular department, we lose all of the information concerning that. <b>Modification anomalies: </b> if we change the value of one of the attributes of a particular department, we will have to update that for all of the employees who work in that department.</p>
            <br/>
            <p><b>Guideline 2:</b> design the base relation schema so that no insertions, deletion, or modification anomalies are present in the relations.</p>
            <br/>
            <p><b>Guideline 3:</b> As far as possible, avoid placing attributes in a base relation whose values may frequently be NULL, and if it is unavoidable, make sure that they apply in exceptional cases only, not the majority of tuples in the relation.</p>
            <br/>
            <p><b>Guideline 4:</b> Design relation schemas so that they can be joined with equality conditions on attributes that are appropriately related. Otherwise this may produce spurious tuples.</p>
            <br/>
            <p><b>Functional Dependencies</b> are constraints between two sets of attributes from the database. The single most important concept in the relational schema design theory is that of a functional dependency. Suppose that a relational database has n attributes, and let us think of the whole database as being described by a single universal relation schema. We do not imply that we are actually storing the database as a single universal table this is only a concept for developing theory. Functional dependency denoted X to Y between two sets of attributes X and Y that are subsets of R, specifies a constraint on the possible tuples that can form a relation state r of R. The constraint is that for any two tuples t1 and t2 in r that have t1[X] = t2[X], they must also have t1[Y] = t2[Y]. The means that the values of the Y component of a tuple in r depend on, or are determined by the values of the X component. In other words the values of the X component in the tuple, determines the values of the Y component, so that Y is functionally dependent on X. Functional dependency is a property of the semantics/meaning of the attributes. And database designers will use this understanding to specify the functional dependencies that should hold on all relation states r of R.  Certain FDs can be specified without referring to a specific relation, but as a property of those attributes given their commonly understood meaning. </p>
            <br/>
            <p>These functional dependencies sepcify that 1. the value of an employee's social security number uniquely determines the employee name, 2. the value of a project's number uniquely determines the project name and location and 3. a combination of ssn and pnumber values uniquely determines the number of hours the employee currently works on the project per week. So a functional dependency is a property of the relation schema R, not of a particular legal relation state r of R.</p>

            <br/>
            <p><b>Normal Forms based on Primary keys</b>-- we assume that a set of functional dependencies is given for each relation, and that each has a designated primary key. Most practical relational design projects take one of the following two approaches: perform a conceptual schema design using a conceptual model e.g ER/EER and map the conceptual design into a set of relations.... or designt eh relations based on a external knowledge derived from an existing implementation of files or forms or reports. <b>Normalisation:</b> take a relation schema through a series of tests to certify that it satisfies a certain normal form. A process of analysing the given relation schemas based on their FDs and primary keys to achieve the desirable properties of minimising redundancy and minimising the insertion, deletion, and update anomalies. Consider it as a filtering process to ensure that the design takes better quality. An unsatisfactory schema should be able to be broken into small relation schemas that can meet the test. Normalisation also confirms the presence of the two properties: <b>nonadditive join or lossless join property</b> which guarantees that the spurious tuple generation problem does not occur in the relation schemas created after decomposition.<b>Depedency preservation property</b> ensures that each functional dependency is represented in some individual relation resulting after decomposition.</p>

            <br/>
            <p><b>First Normal form:</b> defined to disallow multivalued attributes, composite attributes and their combinations. It states that the domain of an attribute must include only atomic values and that the value of any attribute in a tuple must be a single value from the domain of that attribute. First normal form disallows sets of values as an attribute value for a single tuple. Disallows relations within relations or relations as attribute values within tuples. Only single atomic values are allowed.</p>

            <br/>
            <p><b>Second normal form: </b> is based on the concept of full functional dependency. A functional dependency is a full functional dependency is removal of any attribute A from X means that the dependency does not hold anymore. So for any attribute of X, (X-A) does not functionally determine Y. If this dependency still holds, that is a partial dependency. In other words, <i>A relation schema R is in 2NF if every nonprime attribute A in R is fully functionally dependent on the primary key of R.</i></p>

            <br/>
            <p><b>Third Normal Form:</b> based on the concept of transitive dependency. A functional dependency is a transitive dependency if there exists a set of attributes Z in R that is neither a candidate key nor a subset of any key of R and both X to Z and Z to Y hold. A relation schema is 3NF if it satisfies 2NF and no nonprime attribute of R is transitively dependent on the primary key.</p>

            <br/>
            <p><b>General definitions</b> 1NF: relation should have no multivalued attribute or nested relations. 2NF: For relations where primary key contains multiple attributes, no nonkey attribute should be functionally dependent on a part of the primary key. 3NF: Relation should not have a monkey attribute functionally determined by another nonkey attribute(or by a set of nonkey attributes). That is, there should be no transitive dependency of a nonkey attribute on the primary key.</p>

            <p>Boyce-codd normal form, multivalued dependency and fourth normal form, join dependencies and fifth normal form</p>

        </article>
        

    )
}

export default Se351;