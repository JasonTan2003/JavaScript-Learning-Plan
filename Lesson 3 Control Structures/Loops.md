# JavaScript Loops

- _for_
- _for/in_
- _for/of_
- _while_
- _do/while_

## The **_for_** Loop

```javascript
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

1. Expression 1 is executed (one time) before the execution of the code block.
2. Expression 2 defines the condition for executing the code block.
3. Expression 3 is executed (every time) after the code block has been executed.

## The **_for/in_** Loop

The JavaScript **_for in_** statement loops through the properties of an Object

```javascript
for (key in object) {
  // code block to be executed
}
```

Example

```javascript
const person = { fname: "Jia Shen", lname: "Tan", age: 21 };

let text = "";
for (let x in person) {
  text += person[x];
}
```

Output: Jia Shen Tan 21

### Explanation

- The for in loop iterates over a person object
- Each iteration returns a key (x)
- The key is used to access the value of the key
- The value of the key is person[x]

## The **_for/of_** Loop

The JavaScript **_for of_** statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

For every iteration the value of the next property is assigned to the variable

## The **_while_** Loop

```javascript
while (condition) {
  // code block to be executed
}
```

## The **_do while_** Loop

```javascript
do {
  // code block to be executed
} while (condition);
```

## The **_continue_** keyword

The _continue_ statement "jumps over" one iteration in the loop.
Continue statement is a bit different when compared to the _break_ keyword, because it only skips one iteration in the loop instead of ending the loop.

Example:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
```

The above example will skip printing the number 3.
