import React from 'react';
function Se370() {
    return (
        <article>


        <h3>These are SOFTENG370 notes for 2024</h3>

        <ul>
            <li>Introduction</li>
            <li>Virtual Machines, Assignment 1 and Process Creation</li>
            <li>Processes + Threads</li>
            <li>Concurrency and Deadlocks</li>
            <li>CPU Scheduling and Deadlock and Assignment 2</li>
        </ul>

        <h4>Introduction to OS </h4>
        <p>An OS is a special software that acts as the intermediary between the user applications of the computer and the computer hardware. The purpose of an operating system is to provede an environment where the user can execute programs in a convenient and efficient manner.</p> <br/>
        <p>OS achieves this by abstracting specific hardware details such as specific sound cards or disks, thereby simplifying communication between software applications and the underlying hardware components.OS also provides commonly used services i.e file management, networking, process management</p> <br/>

        <p>Why study OS? A computer system can be divided into four components: hardware, operation system, applications programs and users. Or in other words hardware, software and data. Operating systems provide the means for proper use of resources in the operation of the computer system - similar to the government of the computer, OS doesn't provide anything on its own, but rather creates the environment for meaningful work to be done.
        </p> <br/>

        <p>We should also look at OS from the view points of User vs System. <b>User View:</b> User's view vaies according to the interface being used. Many users may use a PC with monitor, mouse, keyboard etc. So the goal with this is to maximize the tasks that the user is performing i.e mostly ease of use, some performance consideration, and no need for resource utilization.</p> 
        <p>In another case, a user may be using a mainframe computer with other users accessing the same computer through other terminals, and sharing resources/exchanging info. In this situation the OS would be designed to optimise resource utilisation, ensuring all available resources: CPU time, memory, I/O are used evenly by users. </p><br/>

        <p><b>System View: </b>From the computer's point of view, the operating system is the program most intimately involved with the hardware. OS is a resource allocator for CPU time, memory space, file-storage space etc. This is especially important for times when many users are accessing the same mainframe. Another view of OS comes when we emphasise the need to control the various I/O devices and user programs. The OS is the control program to manage the execution of user programs to prevent errors and wrong use of the computer.</p>

        <br/> <p>Overall, there are many ways to think of an OS. Maybe OS can be described more easily as the single program that is running at all times on the computer - the kernel.</p>

        <br/> <p><b>Kernel</b> is the core of an OS. It runs all the time, and possesses full access to all hardware an software resources. Contemporary operating systems adopt dual-mode operation, where kernel is running in kernel mode with full access to hardware and CPU instructions, and user programs are in user mode with restricted access to instructions and no hardware access. A bit, called the <b>mode bit</b> is added to the hardware of the computer to indicate either kernel mode (0) or user mode(1). When a user app requests a service from the operating system, the system must transition from user to kernel mode to fulfill the request. Employing syscall instructions in x86-64 cpus. Ancient OSs i.e windows 3.1 do not follow the dual-mode operation - user programs possibly could access everything and destroy your PC.</p> 

        <br/>
        <h4>Kernel Design Styles: Monolithic vs Microkernel vs Hybrid</h4>
        <p><b>Monolithic</b> characterised by numerous services operating in kernel mode.Kernel mode provides as many functions as possible. The kernel is a single, large executable that includes various system services.</p>
        <br/> <p><b>Microkernel </b> does minimum functions in kernel mode, delegating more to the user. </p>
        <br/> <p><b>Monolithic vs Microkernel</b> Monolithic pros: higher performance, cons: if one component fails, everything fails. Classic example of monolithic = Linux. Microkernel pros: better stability and security, cons: higher performance overhead. Classic example = MacOS</p>

        <br/><p>Multitasking: multiple tasks runnin at the same time. Jobs are selected and run on CPU via scheduling. By switching fast enough, it gives the illusion of multiple jobs running all at the same time.</p>

        <br/> <p>Virtual Memory: Every user program thinks that they have unlimited memory. They cannot see the other programs memory content by default. A virtual address is mapped into physical address by hardware.</p>
        <br/> <p>File management: using tree like structure, data integrity checks compression, security.</p>
        <br/> <p>Security: user authentication, access control, encryption, firewall</p>
        
        </article>
    )
}

export default Se370;