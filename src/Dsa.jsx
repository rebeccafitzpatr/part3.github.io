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

        </article>
    )
}

export default Dsa;