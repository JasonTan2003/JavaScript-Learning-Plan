# Asynchronous JavaScript

## JavaScript Callbacks

A callback is a function passed as an argument to another function.

**Example:**

```javascript
function myDisplayer(total) {
  document.getElementById("demo").innerHTML = total;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

## setTimeout() and setInterval()

In the real world, callbacks are often used with asynchronous functions.

**Example 1:**  
When using the JavaScript function _setTimeout()_, you can specify a callback function to be executed on time-out:

```javascript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

**Explanation:**  
In the above example, _myFunction_ is used as a callback.  
_myFunction_ is passed to _setTimeout()_ as an argument.  
3000 is the number of milliseconds before time-out, so myFunction() will be called after _3 seconds_.

**Example 2:**  
When using the JavaScript function **_setInterval()_**, you can specify a callback function to be executed for each interval.

```javascript
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHtml =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
```

**Explanation:**  
In the above example, _myFunction_ is used as a callback.  
_myFunction_ is passed to _setInterval()_ as an argument.  
1000 is the number of milliseconds between intervals, so myFunction() will be called _every second_.

> ### Note
>
> Asynchronous programmes are difficult to write and difficult to debug.
>
> Because of this, most modern asynchronous JavaScript methods don't use callbacks.
>
> Instead, in JavaScript, asynchronous programming is solved using **_Promises_** instead.

## Promises

### Promises Syntax

A Promise is created using the _Promise_ constructor, which takes a function with two parameters: _resolve_ and _reject_.

**Example:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
    resolve("Operation was successful!"); // Pass a result to resolve
  } else {
    reject("Something went wrong!"); // Pass an error to reject
  }
});

// Consuming the Promise
myPromise
  .then((result) => {
    console.log(result); // Logs: "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // Logs: "Something went wrong!" if rejected
  });
```

### Key States of a Promise

1. **Pending:** The operation is ongoing. (The result is undefined)
2. **Fulfilled:** The operation completed successfully and a result is available.
3. **Rejected:** The operation failed and an error is available.

### Chaining Promises

You can chain _.then()_ methods to handle subsequent operations.

**Example:**

```javascript
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});

fetchData
  .then((data) => {
    console.log(data); // Logs: "Data fetched!"
    return "Processing data...";
  })
  .then((message) => {
    console.log(message); // Logs: "Processing data..."
  })
  .catch((error) => {
    console.error(error);
  });
```

### Note on Promises

1. **Promises are chainable:** You can return another Promise in _.then()_.
2. **Always handle errors:** Use _.catch()_ to prevent unhandled errors or _try...catch_ in _async/await_.
3. **Avoid callback hell:** Promises help keep code clean and manageable.

## Async and Await

Async and await make promises easier to write.  
Instead of chaining _.then()_ and _.catch()_, you use async functions with the await keyword.  
In other words, async makes a function return a Promise and await makes a function wait for a Promise.

**Example:**
Without _async/await_ (Using Promises):

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

With _async/await_:

```javascript
async function fetchDataAsync() {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });
    console.log(data); // Logs: "Data fetched!"
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
```

### Chaining with Async/Await

You can perform multiple asynchronous operations in sequence using await.

**Example:**

```javascript
async function fetchDataAsync() {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve("Step 1: Data fetched!"), 1000);
    });
    console.log(data); // Logs: "Step 1: Data fetched!"

    const processedData = await new Promise((resolve) => {
      setTimeout(() => resolve("Step 2: Data processed!"), 1000);
    });
    console.log(processedData); // Logs: "Step 2: Data processed!"
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
```

### Parallel Execution with _Promise.all_

When tasks can run independently, you can use _Promise.all_ to execute them in parallel.

**Example:**

```javascript
async function fetchMultipleData() {
  const fetch1 = new Promise((resolve) =>
    setTimeout(() => resolve("Data 1"), 1000)
  );
  const fetch2 = new Promise((resolve) =>
    setTimeout(() => resolve("Data 2"), 500)
  );

  const results = await Promise.all([fetch1, fetch2]);
  console.log(results); // Logs: ["Data 1", "Data 2"]
}

fetchMultipleData();
```

### Error Handling with Async/Await

Use _try...catch_ to gracefully handle errors.

**Example:**

```javascript
async function fetchDataWithError() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Failed to fetch data"), 1000);
    });
    console.log(data);
  } catch (error) {
    console.error("Error:", error); // Logs: "Error: Failed to fetch data"
  }
}

fetchDataWithError();
```

### Key Notes with Async/Await

1. **Simplifies Code:** Avoids nested _.then()_ chains, making it easier to read.
2. **Always Handle Error:** Use _try...catch_ to handle errors explicitly.
3. **Works Best with APIs:** Async/Await is commonly used with HTTP requests or file operations.
