## Fibonacci sequence using Dynamic Programming

We all know and love the fibonacci sequence. If you don't, it is the sequence of numbers that are equal to the sum of the previous two numbers, starting with 1,1. So the sequence looks like 1, 1, 2, 3, 5, 8, 13... The function we will write returns the nth value of the sequence. 

Writing this recursively seems like a good idea, until you realize that it requires a TON of frames on the stack. Also, it repeats calculations over and over. How can we  make that better? 

That's where **Dynamic Programming** comes in. If we program dynamically, we reduce the redundant calculations as much as possible. To achieve this goal, we memoize.

What is memoization? It is the practice of storing the results of previous function calls and returning the stored value when the same inputs are passed to the function. We can see this at work with the function betterFib. The function betterFib is passed an array, named memo, which stores values of the fibonacci sequence as the function betterFib is called. By memoizing, instead of having to compute fib(3) as fib(2) + fib(1), the function checks the memo array at index 3, and if populated simply returns that value. This makes the function much faster. 

Recursive functions however still have one major drawback, in that they require many frames on the stack, and therefore tons of memory. We can solve this issue by writing the function without recursion. 

Since we know how the computations will be computed, we can substitute the recursion in betterFib with a for loop. Using an array, we can just calculate the next value based on the previous  two. This way of writing the program avoids the stack overflow problem we would run into computing big inputs using betterFib. Check out nonrecursiveFib for an idea on how to write the function nonrecursively.  

