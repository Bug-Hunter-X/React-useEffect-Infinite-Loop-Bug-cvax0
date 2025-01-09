# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array.

## Bug Description

The `bug.js` file contains a React component that attempts to increment a state variable (`count`) within the `useEffect` hook without including any dependencies in the dependency array. This causes the effect to run repeatedly, resulting in an infinite loop that crashes the application.

## Solution

The `bugSolution.js` file demonstrates the correct way to implement the `useEffect` hook. It includes an empty dependency array (`[]`) to ensure the effect runs only once after the initial render. Alternatively, one could include count as a dependency to prevent an infinite loop.