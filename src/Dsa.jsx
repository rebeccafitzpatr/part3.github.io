import React from 'react';
function Dsa() {
    return (
        <article>
        <h2>These are DSA notes for 2024</h2>

        <h3>Week 1 Concept: solve the problem by halving it.</h3>
        <p>Efficiency of a strategy is determined by its worst performance. The running time of an algorithm are determined by number of elementary steps. And we usually consider the worst case, and sometime consider in expectation (or on average). Optimised algorithms should be efficient independent of the OS they run on. We need to cover sorting and searching algorithms, graph algorithms. Data structure - how to organise data in memory. Algorithm design techniques. Learning how to code is like learning the rules of chess. We are about to learn startegies that will make us better players.</p>
        <p>Many factors contribute to the overall running time: <b>Input</b> - we always assume that our program reads some input data and outputs a result, <b>Number of CPU instructions</b> - depends on the programming language, compiler, OS. <b>Memory</b>, <b>Network communication</b>. When we compare the running time of the same algorithm implemented in different languages, we may find that the scale is different, however the shape of the graph is similar. This is referred to a time complexity.</p>
        <br/> 
        <p>Big O notation : given functions f:N - N and g: N - N,  f = O(g) if there exist constants n0 and C such that f(n) is less than or equal to C g(n) for every n greater than or equal to n0. Exercise: we can prove that nlog(n) is not equal to O(n). <b>Caution:</b> The goal of the big O notation is to hide constants coming from specific languages/ compilers and focus on the inherent rate of growth of the running time. However the algorithm may come with large constants that have large effect on the run time.<b>Summary:</b> Ideally, we want to find a function g such that T = theta(g). We write T = theta(g) if T = O(g) and g = O(T). ~ T is something like g. On the otherhand T = omega(g) if g = O(T) ~ T is at least something like g. T = O(g) ~ T is at most something like g.</p>

        <br/>
        <h3>Binary search</h3>
        <p>Problem: Given an array of integers A and an integer x, find an index of x in A or return -1 if x is not in A. If we don't know anything about A, we have no choice but to go through the entire array. <i>O(n)</i> Given a <b>sorted</b> array of integers A and an integer x, find an index of x in A or return -1 if x is not in A. <i>O(log n)</i>. What about: Given a <b>sorted</b> array of integers A and an integerx, find the <b>first</b> index of x in A or return -1 if x is not in A. Binary search can be tricky to get right. Find the <b>last</b> index? <b>Exercises:</b> 1. Suppose that an input array A is first going up then down. Write an algorithm that outputs the largest number in A. 2. Given a sorted array A and two numbers Low and Hi, write an algorithm that outputs how many numbers in A are greater than or equal to Low and less than or equal to Hi.</p>

        <h3>Week 2: Sorting</h3>
        <p>Problem: Sort a given array A in non-decreasing order. Two approaches Selection sort vs insertion sort. Both are O(n^2) in the worst case, but selection sort is a bit easier to implement. Insertion sort can be faster if the array is almost sorted.</p>
        <br/>
        <p>Divide and conquer - merge sort can sort the given array in non-decreasing order with time complexity O(nlog n). Makes use of the magic word <b>Recursion</b>. At most C n log n operations. With mergesort, it is easy to divide the problem into smaller pieces, then solve each subproblem using recursion but it is difficult to combine the solutions. In contrast <b>Quicksort</b> dividing the problem into smaller pieces can be difficult, while combining the solutions is easy. <b>Exercises for analysis, use the tree method to get a feeling for what the complexity is, Induction to formally prove it. Challenge - design an O(n logn) divide and conquer algorithm for the largest welcome sign problem.</b></p>
        <br/>
        <p>Quicksort idea: Take the last element, and partition the array around it. Time complexity = worst case: theta(n2), there exists theta(nlogn) solution. Average case with random pivot = O(nlogn) <b>Welcome to the world of randomised algorithms</b></p>

        <h3>Week 3: Quick Select</h3>
        <p>Binary search meets Quick sort. Given an unsorted array A of length n and an integer k greater than or equal to 1, k less than or equal to n, retur the kth smallest element in A. In the average case O(n), worst case O(n^2)</p>
        <br/>
        <p>Counting sort and Engineer's approach to sorting - what goes into java.util.Arrays.sort() ? Sorting by comparison, so far we have been sorting integers, but all we actually do is comparing them. We could then as well sort an array of objects assuming each two elements are comparable. Exercise, implement inbuilt sorting functions using sorting algorithms we have learnt. Is it possible to sort in O(n) yes and no - it depends. Count how many times each number appears and reconstruct the array in sorted order. Count how many elements of each type we have - counting sort.</p>

        <br/> 
        <p>Data Structure: Linked List. Can be implemented with array, if it is guaranteed that the user will never add more than n elements. This implementation has excellent running time, but fixed maximum size and too much memory if we only end up adding small number of elements. We can create Node class and keep the order with pointers.</p>

        <h3>Week 4: Double Linked List and Dynamic Arrays.</h3>
        <p>Linked list operations : add and size O(1), remove, get and set are O(n). Double linked list has the same operations however, remove is O(1). <b>Dynamic arrays</b> - Arrays are excellent for get/set operations. Maximum capacity is determined upon creation. Idea - If we have reached the capacity, create a new array with double the capacity and copy the current content. Assuming the collection has already n elements what is the worst case running time of the next operation? add O(n) and remove, get, set, size O(1). Amortised Complexity. Dynamic Array has add operation in O(1) amortised. <b>Issue:</b> If our list grows to size n and then we remove all but a few elements, we are still using n memory cells. In Java/C++/Rust, add an operation which shrinks the storage to the current size of the list, which is the user's responsibility. In Python, automatically shrink the storage.</p>

        <br/>

        <p>Main idea: If we want to add a new element and the data array is full, create a new one with doubled capacity and copy the content into it. Theory - the worst case running time of one add is O(n), the current list has n elements and the data array is full. Which suggests that calling add exactly n times might take O(n^2) operations in total. However, adding 1000 elements takes 10 ms, 10000 elements takes 100ms, 1000000 elements taes 10000 ms. So the real total running time is O(n). Goal of amortised complexity is to explain this.... Let A(n) denote the total number of operations if we start with a freshly initialised Dynamic Array object and call add exactly n times. Amortised Complexity of add T(n) = A(n)/n   or A(n) = n x T(n). Yes, we also have A(n) = O(n x T(n)) but this estimate might be too pessimistic. Amortised complexity = A(n)/n = O(1), means that in the long run, the operation behaves like it has O(1) running time in the worst case.</p>
        <br/> 
        <p>Managing space on remove operation. 1.Make the user responsible, 2.Automatic shrinking when the list occupies at most half of the storage array. So what would the worst case number of operations be? We don't specify the number of times each method add and remove are called, so maybe the worst case is when we call add n times or perhaps a particular mixture of add and remove. A very bad sequence would be add, remove, add, remove repeated n times = theta(n^2), so Amortised complexity = theta(n). Improved remove operation, only shrink the list if it is 1/4 of the data array. In this course the proof is not covered that Amortised complexity of add and remove in Dynamic Array with automatic shrinking is O(1).</p>

        <br/>
        <p>Union Find: How to organise data in the form of a tree. Supposing we have n bads, each which contain a unique number between 0 and n-1. We can merge bags containing two given numbers or ask if two numbers are the the same bag. And we can make the merging operation faster by maintaining an array parent which tells us if a number is representative of the bag and if not, who to ask for the representative. So im a bad case distance = theta(n), and good case = theta(1), but we can further optimise this operation by during merge selecting the tree with smaller height to be the representative. To make this even faster we can implement path compression: If we need to find the root R of the bag which contains some number x, the in the future x can simply ask R about who the root is. We can also update the parent of every number visited on the way from X to R. Worst case remains at O(logn),amortised complexity = O(logn)</p>

        <h3>Week 5: Binary Search Tree Data Structure</h3>

        <p>List, Set and Map interfaces: List, we care about the order in which elements are added. Add and remove from the end of the list and random access in a Dynamic Array are fast. However add/remove from the middle of the list and checking if an element is present in the list is slow. Set, we care whether an element is present but not when it was added. Map(Dictionary), we care if an element is present and what is its associated value. Usually Set and Map do not have duplicates. Set interface has add, remove and contains methods. Map methods: put, get, contains, removeKey. A Map can be a Set, but a Set cannot make a Map, however if we can tell whether an element is present, it sounds plausible that wihtout any additional effort we can find out its mapped value. <b>Set via List:</b> store all the elements in a list: add(key) O(1) adds the key to the end of the list, contains(key) O(n) iterate through the list and check if the key is there, remove(key):O(n) removes all occurrent of the key from the list. <b>Set via List version 2:</b> store all the elements in a sorted list - DynamicArray. add(key): add the key to the list such that it remains sorted O(n), contains(key): binary search O(logn), remove(key) remove the key from the list O(n)</p>

        <br/>
        <p>Binary search tree gymnastics: contains, add, remove with no descendants, one child, two children</p>
        <br/> 
        <p>Implementing remove is slightly tricky. P1. Find the max/min key in a BST, P2. Given a node in a BST, find the node with the next larger key - two cases: node.right is not null, node.right is null P3.</p>
        <br/>
        <p>Rotations, rotation strategies for AVL trees, Red-Black trees, Splay trees.</p>
        </article>
    )
}

export default Dsa;