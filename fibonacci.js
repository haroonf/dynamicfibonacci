// Basic fibonacci sequence, nothing too interesting here
function fib(n) {
  var result = 0;
  if (n == 1 || n == 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  return result;
}
// Much more effecient fibonacci sequence, O(N) instead of O(2^N)
// Still requires a ton of memory for massive recursive functions
function betterFib(n, memo) {
  var result = 0;
  if (memo[n] != null) {
    return memo[n];
  }
  if (n == 1 || n == 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  memo[n] = result;
  return result;
}
// Nonrecursive version, this requires much less memory for high numbers
// Also O(N)
function nonrecursiveFib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  var memo = [];
  memo[1] = 1;
  memo[2] = 1;
  for (var i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}