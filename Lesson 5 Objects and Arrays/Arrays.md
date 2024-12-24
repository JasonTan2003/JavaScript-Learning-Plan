# JavaScript Array

### Syntax 1

```javascript
const array_name = [item1, item2, item3, ...];
```

### Syntax 2

```javascript
const array_name = new Array(item1, item2, item3, ...);
```

The two examples above do exactly the same. For simplicity, readability and execution speed, there is no need to use <mark>_new Array()_</mark>

## Accessing Array Elements

```javascript
const cars = ["Mustang", "BMW", "Porsche"];
let car = cars[0]; //Output: Mustang
```

## Changing an Array Element

```javascript
const cars = ["Mustang", "BMW", "Porsche"];
cars[0] = "Tesla"; //Output: Tesla, BMW, Porsche
```

## Adding Array Element

```javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
```

## Associative Arrays

Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.

## Nested Arrays and Objects

Values in objects can be arrays, and values in arrays can be objects:

**Example:**

```javascript
const myObj = {
  name: "Jason",
  age: 21,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
```

To access arrays inside arrays, use a for-in loop for each array:

**Example:**

```javascript
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
```
