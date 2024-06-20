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
            <p><b>Describing cloud computing:</b> Microsoft Azure is a cloud computing platform with ever expanding set of services to help build business solutions. Cloud computing is the delivery of computing services over the internet, including virtual machines, storage, databases, networking, Internet of Things, machine learning, artificial intelligence. And because cloud computing uses the internet, it is not constrained by physical infrastructure e.g physical datacenters. This allows users to select the services they need and only pay for what they use. Shared responsibility model - maintence and update requirements are shared between the cloud provider(physical security, power, cooling, network connectivity) and consumer(data and access security). And shared responsibility model is tied to cloud service types (IaaS, PaaS, SaaS).  Cloud models - define the deployment of cloud resources. Either private cloud, public cloud, hybrid cloud. <i>Private cloud</i> - natural evolution from corporate datacenter. Offers much greater control for the company and its IT department. However, it is more expensive and has less benefits than public cloud. <i>Public cloud</i> - build, controlled and maintained by third party cloud provide. Anyone that wants to use cloud services can access them and the resources. However organisations don't have the complete control over these resources. <i>Hybrid cloud</i> - uses both public and private in an interconnected environment. It can allow private clour to surge fir increased temporary demand by deploying public cloud resources. Hybrid cloud can also provide an extra layer of security.  <i>Multi-cloud</i> - is another scenario becoming more popular. Multiple public cloud providers are used, and maybe you are using different features from the different providers, or perhaps you are transitioning from one or another. In any case, more than one public providers are used. <i>Azure products</i> - Azure Arc helps manage cloud environment public, private, hybrid or multi-cloud and Azure VMware Solution helps you migrate from private cloud to public/hybrid seamlessly.<b>Consumption based model:</b> two types of expenses to consider - capital expenditure(one time upfront cost) and operational expenditure(spending money on rent/services e.g cloud computing/ leases and paying overtime). Having a consumption based model avoids upfront costs, need to purchase huge infrastructure and allows us to adapt requirements as we need to. Pay as you go!!</p>

            <br/>
            <p><b>Describing benefits of using cloud services.</b> When building/deploying a cloud application, two of the biggest considerations should be uptime and ability to handle demand - high availability and scalability. Azure provides high availablity regardless of disruptions and events that could occur, also providing uptime guarantees depending on the service. Azure also provides scalability, by making it easy to adjust your resources to meet demand, saving money in the process via consumption based payment. Vertical scaling involves adding more CPU/RAM capability to increase processing power. Horizontal scaling involves  adding additional virtual machines or containers to meet demand. Reliability is the ability for our system to recover from failures, return to function. As the cloud is a decentralised design it really encourages reliable and resilient infrastructure. Perhaps processes in one continent can cover for staff in other region if something takes them away from work. Predictability is another benefit of the cloud. We can have a good idea of the performance capabilities as well as cost requirements. Furthermore, cloud computing supports security and governance/compliance. For example, set templates that comply with certain standards. Software updates can be automatically applied. Also the level of security can be set to match security needs, making for easy management. Management of the cloud: auto scale resource deployment according to needs or preset templates, monitor status of resources and receive alerts. Management in the cloud: can be done via web portal, CLI, API, PowerShell.</p>

            <br/>

            <p><b>Describing cloud service types: IaaS, PaaS, SaaS</b> IaaS is the most flexible category of cloud services which gives most control over cloud resources.With IaaS, cloud provide is responsible for maintaining the hardware, network connectivity, and physical security.  Shared responsibility model: applies to all cloud service types but IaaS places the largest share of responsibility on the user. IaaS are commonly used in scenarios: lift and shift migration - setting up cloud resources like a physical data center then moving to the IaaS infrastructure. testing and development - having established configurations for development and test environments which need to be quickly replicated. Start up or shut down different environments rapidly with IaaS, and keep complete control. PaasS is middle ground between renting space and paying for complete deployed solution. Cloud provider maintains physical infrastructure as well as operating systems, services, and updating. Think of PaaS as using a domain joined machine, IT maintains the device with regular updates, patches, refreshes. Scenarios: development framework - PaaS provides the framework that developers can build upon. Analytics/business intelligence - tools provided with PaaS allow organisations to analyse and mine their data, finding insights etc. SaaS is the most complete cloud service model from a product perspective. Users are basically renting a fully developed application. SaaS puts the most responsibility on the cloud provider and the least with user. The user is only really responsible for the data that they put on the system. Common scenarios: email/messaging, productivity applications, finance tracking.</p>

        </article>
    )
}

export default Msnotes;