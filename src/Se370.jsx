import React from 'react';
function Se370() {
    return (
        <article>


        <h2>These are SOFTENG370 notes for 2024</h2>

        <ul>
            <li>Introduction</li>
            <li>Virtual Machines, Assignment 1 and Process Creation</li>
            <li>Processes + Threads</li>
            <li>Concurrency and Deadlocks</li>
            <li>CPU Scheduling and Deadlock and Assignment 2</li>
        </ul>
        
        <h2>Introduction</h2>
        <h3>Introduction to OS </h3>
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

        <br/><p>Modern operating systems encompass features such as multitasking, virtual memory, file systems and security mechanisms to meet the diverse requirements of contemporary computing environments.</p>
        

        <h3>OS programming language</h3>
        <p>Many modern operating systems implement loadable kernel modules to easily extend functionality. These can be loaded and unload upon demand. Each module can talk to others over known interfaces. In Linux, modules are called kernel modules. Linux kernel modular design allows us to adda device driver to control LED lights, add device driver to adulterate GPS locations, add a filesystem, network protocol.... In Windows environment, these are kernel drivers. A Windows driver example is the anticheat.</p>
        <br/><p>C is the defacto language for OS development, originally designed to build Unix. C supports low-level memory access so C statements can easily be mapped into machine instructions.</p>
        <p>A <b>C pointer </b>is a variable to store a memory address of another variable. Actual address can be stored in a pointer and then used to access content over there. However, accessing an invalid pointer causes issues. In the user space, this will result in <b>segment fault</b>. In kernel mode, this can be fatal -- leading to <b>kernel panic</b> and the blue screen of death</p>

        <br/> <p> Depending on where you declare a variable, it will be placed in different regions of the memory and have a different life span. EG <b>local variables</b> for a function are allocated on the stack when the function is entered. Local variables are gone after the function finishes execution. <b>Global variables</b> are allocated in data area when the program is started, and only released when the program exits. <b>Static variables</b> in the function are allocated when the program starts, only released when the program exits. <b>Dynamic memory</b> does not have a fixed size. To allocate dynamic sized memory use <i>malloc</i> and free it using <i>free</i>. Used the keyword <b>register</b> to hint that a variable  should be kept in a processor register to reduce data access latency. i.e <i>register int number = 1234</i> . But this does not guarantee that the value will be stored in the register, the compiler may choose otherwise because they are often better than human at memory allocation decisions. The keyword <b>volatile</b> is used to specify that a variable may change unexpectedly so it tells the compiler to not do any optimizations on that variable. <b>Rust</b> is an emergin language for OS programming. It does not allow invalid pointer access == memory safe.</p>

        <h2>Virtual Machine, A1 and Process Creation.</h2>
        <h3>Linux, Virtual Machine</h3>
        </article>
    )
}

export default Se370;