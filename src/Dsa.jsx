import React from 'react';
function Dsa() {
    return (
        <article>
        <h2>These are DSA notes for 2024</h2>

        <h3>Week 1 Concept: solve the problem by halving it.</h3>
        <p>Efficiency of a strategy is determined by its worst performance. The running time of an algorithm are determined by number of elementary steps. And we usually consider the worst case, and sometime consider in expectation (or on average). Optimised algorithms should be efficient independent of the OS they run on. We need to cover sorting and searching algorithms, graph algorithms. Data structure - how to organise data in memory. Algorithm design techniques. Learning how to code is like learning the rules of chess. We are about to learn startegies that will make us better players.</p>
        <p>Many factors contribute to the overall running time: <b>Input</b> - we always assume that our program reads some input data and outputs a result, <b>Number of CPU instructions</b> - depends on the programming language, compiler, OS. <b>Memory</b>, <b>Network communication</b>. When we compare the running time of the same algorithm implemented in different languages, we may find that the scale is different, however the shape of the graph is similar. This is referred to a time complexity.</p>
        <br/> 
        <p>Big O notation : given functions f:N - N and g: N - N,  f = O(g) if there exist constants n0 and C such that f(n) is less than or equal to C g(n) for every n greater than or equal to n0. Exercise: we can prove that nlog(n) is not equal to O(n). <b>Caution:</b> The goal of the big O notation is to hide constants coming from specific languages/ compilers and focus on the inherent rate of growth of the running time. However the algorithm may come with large constants that have large effect on the run time.</p>
        </article>
    )
}

export default Dsa;