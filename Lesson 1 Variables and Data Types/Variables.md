# Declaring Variables

let, const, var, automatically

```javascript
let x = 5;
let y = 6;
let z = x + y;

const a = 10;
const b = 11;
```

The value of **_const_** cannot be changed but **_let_** and **_var_** can.
**var** keyword should only be used in code written for **_older browser_**.

## When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

## You can declare many variables in one statement

```javascript
let person = "Jason",
  age = 21,
  netWorth = 1000000;
```

# Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable name will still have the value "Jason" after the execution of these statements:

```javascript
var name = "Jason";
var name; //Note that let and const will not work
```
