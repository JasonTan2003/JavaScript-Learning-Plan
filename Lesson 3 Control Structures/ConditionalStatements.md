# There are 4 conditional statements

1. _if_
2. _else_
3. _else if_
4. _switch_

```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

## Switch Statement Syntax

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

## The **_break_** keyword

When JavaScript reaches a break keyword, it breaks out of the switch block.

## The **_default_** keyword

The _default_ keyword specifies the code to run if there is no case match.
The _default_ case does not have to be the last case in switch block, it can be the first case. If use as the first case, remember to end it with the _break_ keyword.
