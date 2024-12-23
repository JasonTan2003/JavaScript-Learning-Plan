# JavaScript Functions

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

## **_Return_** keyword

When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

## Arrow Functions

**Before Arrow**

```javascript
hello = function () {
  return "Hello World!";
};
```

**With Arrow Function**

```javascript
hello = () => {
  return "Hello World!";
};
```

## Higher-order functions (HOF)

A HOF is a function that does at least one of the following:

1. Takes another function as an argument.
2. Returns a function as its result.

In simpler terms, it’s a function that works with other functions as input or output.

### Simple examples of <mark>map</mark>, <mark>filter</mark> and <mark>reduce</mark>

1. **<mark>map</mark>: Transforming Each Element**

- **What it does**: Applies a function to every element of an array and creates a new array with the transformed values.
- **Example**: Doubling numbers in an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

2. **<mark>filter</mark>**: Selecting Certain Elements

- **What it does**: Filters out elements of an array that don't meet a specific condition.
- **Example**: Keeping only even numbers.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

3. **<mark>reduce</mark>**: Combining All Elements

- **What it does**: Reduces an array to a single value by repeatedly applying a function.
- **Example**: Calculating the sum of all numbers in an array.

- Note: The reduce function takes a _function_ and an _initial value_ as arguments. It applies the function to each element of the array, accumulating the result into a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
```

### Advanced **<mark>reduce</mark>** Examples

The **reduce** function is not limited to addition. It is a versatile method that can be used to perform a variety of operations on arrays.

#### Example 1: Flattening Arrays

```javascript
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
```

**How It Works:**

**1. Initial Value:**

- The initial value of the accumulator is [] (an empty array).
- This tells reduce that the result should be an array, and elements will be accumulated into this array.

**2. Callback Function:**

- The callback function (accumulator, currentValue) => accumulator.concat(currentValue):
- accumulator is the current flattened array (starting as []).
- currentValue is the current sub-array being processed (e.g., [1, 2]).

**3. Iterations:**

- 1st Iteration: accumulator = [], currentValue = [1, 2].
  Result: accumulator.concat(currentValue) = [1, 2].
- 2nd Iteration: accumulator = [1, 2], currentValue = [3, 4].
  Result: [1, 2].concat([3, 4]) = [1, 2, 3, 4].
- 3rd Iteration: accumulator = [1, 2, 3, 4], currentValue = [5, 6].
  Result: [1, 2, 3, 4].concat([5, 6]) = [1, 2, 3, 4, 5, 6].

**4. Final Result:**

- The final flattened array is [1, 2, 3, 4, 5, 6].

#### Example 2: Counting Occurrences

```javascript
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count); // Output: { apple: 2, banana: 3, orange: 2 }
```

**How It Works:**

**1. Initial Value:**

- The initial value of the accumulator is {} (an empty object).
- This indicates that the result will be an object where the keys are fruit names, and the values are their counts.

**2. Callback Function:**

```javascript
(accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
};
```

- accumulator[currentValue]: Checks if the current fruit (currentValue) already exists in the object.
- (accumulator[currentValue] || 0): If it exists, use its current value; otherwise, use 0.
- +1: Increment the count.

**3. Iterations:**

- 1st Iteration: accumulator = {}, currentValue = 'apple'.
  Result: accumulator['apple'] = (0) + 1 = 1.
  accumulator = { apple: 1 }.
- 2nd Iteration: accumulator = { apple: 1 }, currentValue = 'banana'.
  Result: accumulator['banana'] = (0) + 1 = 1.
  accumulator = { apple: 1, banana: 1 }.
- 3rd Iteration: accumulator = { apple: 1, banana: 1 }, currentValue = 'orange'.
  Result: accumulator['orange'] = (0) + 1 = 1.
  accumulator = { apple: 1, banana: 1, orange: 1 }.
- Subsequent iterations increment the counts for 'apple', 'banana', and 'orange'.

**4. Final Result:**

- The final object is { apple: 2, banana: 3, orange: 2 }.
