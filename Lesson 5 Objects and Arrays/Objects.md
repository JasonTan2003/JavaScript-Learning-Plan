# JavaScript Object

### Syntax 1

```javascript
// Create an Object
const object = { key1: "value1", key2: "value2", key3: "value3" };
```

### Syntax 2

```javascript
// Create an Object
const object = new Object();

// Add Properties
object.key1 = "Jason";
object.key2 = "Tan";
object.key3 = 21;
```

The two examples above do exactly the same.  
For simplicity, readability and execution speed, there is no need to use <mark>_new Object()_</mark>, instead just use the **_object literal_** method.

## Accessing Object Properties

You can access object properties in two ways:

```javascript
objectName.propertyName;
//or
objectName["propertyName"];
```

## Adding New Properties

```javascript
objectName.propertyName = "ABC";
```

## Deleting Properties

```javascript
delete objectName.propertyName;
//or
delete objectName["propertyName"];
```

### Accessing Nested Objects

Example

```javascript
myObj = {
  name: "Jason",
  age: 21,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
```

You can access nested objects using the dot notation or the bracket notation:

```javascript
myObj.myCars.car2;
//or
myObj.myCars["car2"];
//or
myObj["myCars"]["car2"];
//or
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
```

## How to display JavaScript Objects?

Displaying a JavaScript object will output **[object Object]**.

Some solutions to display JavaScript objects are:

1. Displaying the Object Properties by name (example, person.name)
2. Displaying the Object Properties in a Loop
3. Displaying the Object using Object.values()
4. Displaying the Object using JSON.stringify()
