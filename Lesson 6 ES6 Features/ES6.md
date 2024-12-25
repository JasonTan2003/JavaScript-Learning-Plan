# ES6 Features

## **1. Template Literals**

- Use backticks **_`_** for easier string interpolation and multiline strings.
  **Example:**
  ```javascript
  const name = "Jason";
  console.log(`Hello, my name is ${name}!`);
  ```

## **2. <mark>let</mark> and <mark>const</mark> (Block Scope Declarations)**

- Replace <mark>var</mark> with <mark>let</mark> and <mark>const</mark> for better variable scoping and immutability.
  **_See Lesson 1_**

## **3. Arrow Functions**

- A concise way to write functions, with a shorter syntax and no binding of <mark>this</mark>.
  **Example:**
  ```javascript
  const add = (a, b) => a + b;
  console.log(add(5, 3)); //Output: 8
  ```

## **4. Default Parameters**

- Set default values for function parameters.
  **Example:**
  ```javascript
  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet(); // Output: Hello, Guest!
  ```

_If there is a parameter being passed then it will use it, otherwise it uses the default value._

## **5. Destructing Assignment**

- Extract values from arrays or objects into variables.
  **Example:**

  ```javascript
  //Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // Destructuring Assignment
  let [fruit1, fruit2] = fruits; //Output: Banana, Orange

  //Object
  const person = {
    firstName: "Jason",
    lastName: "Tan",
    age: 21,
  };
  // Destructuring Assignment
  let { firstName, age } = person;
  ```

## **6. Spread and Rest Operators (...)**

- Spread: Expand arrays/objects.
- Rest: Collect multiple elements into an array.

  **Example:**

  ```javascript
  //Spread
  const a1 = ["Jan", "Feb", "Mar"];
  const a2 = ["Apr", "May", "Jun"];
  const a3 = ["Jul", "Aug", "Sep"];

  const b1 = [...a1, ...a2, ...a3]; //Output: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep
  ```

  The spread operator (**...**) can also be used with objects to **copy** or **merge** their properties into another object.

  **Example 1: Copying an Object**

  ```javascript
  const person = { name: "Jason", age: 21 };
  const copiedPerson = { ...person };

  console.log(copiedPerson); // Output: { name: "Jason", age: 21 }
  console.log(person === copiedPerson); // Output: false (It's a new object)
  ```

  The spread operator creates a **shallow copy** of the _person_ object into _copiedPerson_.

  **Example 2: Merging Objects**

  ```javascript
  const person = { name: "Jason", age: 21 };
  const address = { city: "New York", country: "USA" };

  const mergedObject = { ...person, ...address };

  console.log(mergedObject); //Output: { name: "Jason", age: 21, city: "New York", country: "USA" }
  ```

  The spread operator combines properties from multiple objects into a new object.

  **Example 3: Overriding Properties**

  If objects have overlapping properties, the **_last spread object takes precedence_**.

  ```javascript
  const person = { name: "Jason", age: 21 };
  const updates = { age: 22, city: "New York" };

  const updatedPerson = { ...person, ...updates };
  console.log(updatedPerson); // Output: { name: "Jason", age: 22, city: "New York" }
  ```

  **Example:**

  ```javascript
  //Rest Operator
  const [first, second, ...rest] = [1, 2, 3, 4, 5];

  console.log(first); //Output: 1
  console.log(second); //Output: 2
  console.log(rest); //Output: [3, 4, 5]
  ```

  **Explanation:**
  The **_rest_** variable collects all the remaining elements in the array after first and second.

  **Example of Rest Operator in Functions**

  The rest operator allows a function to accept an indefinite number of arguments and group them into a single array.

  ```javascript
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3, 4, 5)); //Output: 15
  ```

  **Explanation:**
  The **_...numbers_** rest operator gathers all arguments passed to the function into the **_numbers_** array.

  **Example of Rest Operator in Objects**

  You can use the rest operator to extract certain properties and group the remaining ones into another object.

  ```javascript
  const person = { name: "Jason", age: 21, city: "New York", country: "USA" };

  const { name, ...details } = person;

  console.log(name); //Ouput: "Jason"
  console.log(details); //Output: { age: 21, city: "New York", country: "USA" }
  ```

  **Explanation:**
  The **_name_** property is extracted, and the rest of the properties **_(age, city, country)_** are grouped into the **_details_** object.

## **7. Modules (<mark>import</mark> and <mark>export</mark>)**

- There are 2 types of exports: **_Named Exports_** and **_Default Exports_**.

  **Example of _Named Exports_**

  Let us create a file named person.js, and fill it with the things we want to export.  
  You can create named exports two ways. In-line individually, or all at once at the bottom.

  ```javascript
  //person.js
  //In-line individually
  export const name = "Jason";
  export const age = 21;

  //All at once at the bottom
  const name = "Jason";
  const age = 21;

  export { name, age };
  ```

  **Example of _Default Exports_**

  Let us create another file, named message.js, and use it for demonstrating default export.  
  You can only have **one** default export in a file.

  ```javascript
  //message.js
  const message = () => {
    const name = "Jason";
    const age = 21;

    return name + " is " + age + "years old.";
  };

  export default message;
  ```

- There are 2 ways you can import modules into a file, based on if they are named exports or default exports.

  Named exports are constructed using curly braces and default exports are not.

  **Example: Import from named exports**

  ```javascript
  import { name, age } from "./person.js";
  ```

  **Example: Import from default exports**

  ```javascript
  import message from "./message.js";
  ```

  > Note
  >
  > Modules only work with the HTTP(s) protocol.  
  > A web-page opened via the file:// protocol cannot use import/export.
