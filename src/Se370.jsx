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
        <p>Linux is everywhere. 85% of all smartphones run on Linux using the Android operating system. 96% of the world's top one million serves run on Linux. All of the top supercomputers run on Linux. A lot of cloud infrastructure runs on Linux.</p>
        <br/><p>The Linux shell or CLI is a program that provides a test-based interface for interacting with the operating system. It allows users to execute commands, and sometimes is more convenient than graphical user interfaces. i.e <b>ls</b> - directory listing, <b>ls -al</b> - formatted directory listing with hidden files, <b>ls -lt</b> - sorting the formatted directory listing by time modification</p>
        <p>However when we are writing linux kernel modules, it will be running in kernel space (and has full access to hardware and software). A bug in the code could destroy your computer. So to avoid this we can use a linux virtual machine.</p>

        <br/><p>A <b>virtual machine</b> is an emulation of a physical computer. It allows you to run on an operating system and execute applications as if they were on dedicated hardware. An interpreter-based VM is implemented with a loop. 1) fetch next instruction, 2) analyse the instruction 3) translate and execute the instruction and 4) go back to 1). This method of interpretation can execute code for different CPU architectures, however a negative aspect is that there is a high execution overhead for each instruction.</p>
        <br/> <p> <b>Binary translation</b> is more efficient than interpretation as it operates at a block level rather than per instruction. It also saves and reuses translation results for higher performance. Binary translation is much faster than interpretation in general. It amortizes the fetch and analysis costs. Binary translation has low execution cost compared to interpretation, however translation costs can vary. Whereas interpretation tends to have a medium translation cost, but execution costs can be in the mid to high range.</p>

        <br/><p>Hardware virtualisation provides hardware-level support for virtualisation. It reduces the overhead associated with virtualisation. Translation and analysis are unnecessary if code is compiled for the same CPU architecture. Consider running an Ubuntu x86-64 on a windows x86-64 machine. Ubuntu is the guest OS, Windows is the host OS. It also provides some isolation between guest and host OSs to prevent unauthorised access to memory and resources.</p>

        <br/><p>Another interesting point about Unix, is that everythis is a file. This is the foundational concept of the Unix design philosophy. Various systems resources, both physical and abstract are represented and accessible through the file hardware.</p>
        
        <h3>Process Creation</h3>
        <p>Dangling pointer is a pointer that points to a memory location that has been deallocated or freed. We create one by pointing to a local variable that has been automatically released or pointing to a heap area that has been freed. Using a pointer to a freed heap area is called use-after-free. It causes a lot of security vulnerabilities. Rust can eliminate these types of bugs at run time.</p>

        <br/> <p>A <b>process </b> is an instance of a program in execution == used to represent ongoing work in the system. There may be multiple processes coming from the same program. In execution, it needs the processor to run. A process can own resources i,e CPU times, memory, files. In MacOS or Linux, use <b>ps aux</b> to get a list of processes, use <b>top </b> to show all processes in real-time.</p>

        <br/> <p><b>Process Control Block (PCB)</b> is a data structure where the OS bookkeps all the information if needs to know about a process. It contains process identifier, process states, IO information etc. In Linux, PCB is called <b>task_struct</b>, a double linked list. Internally, the OS performs key tasks to intiate a new process. It start by creating a Process Control Block(PCB) or task_struct to store relevant process info. Next the kernel allocates memory for the process, encompassing program code, data and stack. The kernel then sets up the initial execution context, initialising the program counter, configuring the stack pointer, and adjusting other registers. Finally, the process state is set to runnable, indicating readiness for execution. A parent process creates children, which in turn, creates other children. This forms a tree of processes. <b>fork()</b> function duplicates all aspects of a parent process to generate a child process. This duplication includes the instruction pointer, indicating the current program position. Both processes are identical, yet can function independently. fork() returns distinct values for the child and parent processes, allowing these independent copies to diverge in their execution flow. E.g the child process returns 0 and the child's pid in the parent, typically follows a code path invoking <b>exec</b>, to replace its memory space with a new program; while the parent process proceeds along a code path that awaits the termination of the child. </p>
        <br/><p><b>exec()</b> replaces the current process' memory to a new program. <b>exit()</b> terminates the current process immediately. <b>wait()</b> allows the parent process to wait for a child process from parent process. A call to wait() blocks the calling process until its child processes exits or a signal is received. After child process terminates, parent continues its execution.<b>kill()</b> can be used to terminate a child process from a parent process.</p>

        <br/><p>The fork-exec paradigm creates a tree of processes in Linux. The root node is called init process. If a parent process dies, all children become orphaned. They may be adopted by the init process. If a child process is not adopted and the process terminates, it becomes a zombie, this may cause resource leak. Fork bomb duplicates itself to deplete all the system resources.</p>

        <h2>Processes and Threads</h2>
        <h3>Inter Process Communication</h3>
        <p>Multiprocessing allows the execution of multiple tasks or processes concurrently. This can potentially improve the computational speed. By running processes in separate memory spaces, Multiprocessing helps in isolating faults. If one process encounters an issue, it is less likely to affect other processes, contributing to increased system stability.</p>
        <br/>
        <p>Processes are independent, each process in the modern operating system operates independently by default. SO processes do not interfere with each other's execution. Each process has its own address space. Processes cannot directly access each other's memory. Two common ways of doing inter-process communication. One is message passing, the other is shared memory.</p>
        <br/><p><b>Pipe</b> is a message passing mechanism. It is used for parent and child process communication. Reading process blocks when pipe is empty (until data becomes available) and writing process blocks when the pipe is full. Process reads from a broken pipe gets an EOR, a process writing to a pipe with no reader gets signalled and killed. <b>Named pipes </b> are more powerful. And it does not requrie a parent-child relationship. Several processes can use the named pipe for communication and it is also available in windows. Pipe and filter pattern decomposes a task that performs complex processing into a series of separate element that can be reused. In shel, we have '|' pipe operator.</p>

        <h3>Sockets</h3>
        <p>A socket is defined as an endpoint for communication, it is identified as (IP:port). The socket 10.0.0.1:1625 refers to port 1625 on host 192.168.0.1. The special IP address 127.0.0.1 refers to the host itself. Ports below 1024 are for well known and standard services e.g 80 HTTP, 443 HTTPs. Internet sockets <b>UDP</b> connectionless protocol. There is no guarantee of delivery or order so not reliable, but lower latency. <b>TCP</b> Connection-oriented protocol. Reliable delivery via Ack and Retry, but high latency. <b>KCP</b> has advantages from both sides. Reliable, low latency, and user space (on top of UDP)</p>

        <br/><p>Setting up a TCP connection - Server process: socket(), bind(), listen(), accept(), Client Process: socket(), connect()</p>

        <br/> <p><b>Unix Socket:</b> Compared to internet socket, uses a file system path as an address, limited to communication on the same machine. Generally has lower overhead and higher performance. Unix-  socket is optimised for inter-process communication with the same host. Signals are used to notify a process that some events have occurred. For each process there are default handlers, but you can overwrite them. Common signals: SIGABRT, SIGFPE, SIFINT... however SIGKILL is the only signal which cannot be overwritten.</p>

        <br/><p><b>Memory sharing: </b> mmap can map a disk file into memory so that you can access its content directly using classical pointers instead of file read/write. mmap allow for random file access. It is also good for large files. mmap has several advantages over file ops for example, mmap allows random access, while fread/fwrite is good for sequential access. Also, mmap can load super large files.To use mmap to share a memory, first create a memory sharing object using shm_open and map that object into two processes.</p>

        <br/><p>A <b>thread </b> is a basic unit of execution within a process. It is a sequence of instructions being executed, and has its own registers and stacks. A process can have multiple threads and these share process resources. Threads don't share registers or stack space. Threads can make better utilisation of multi core CPUs, and can also be used to improve the responsiveness in GUI applications. There are system level threads, managed by the kernel, and user level threads, managed by userspace program. Pthread is a standardised API to create system-level threads.</p>
        </article>
    )
}

export default Se370;