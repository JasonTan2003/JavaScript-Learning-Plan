# Exercise: Student Grades Calculator

### Create a program that:

1. Stores the names of students and their scores for three subjects: _Math_, _Science_ and _English_, using an array of objects.
2. Calculates the average score for each student.
3. Determines of the student passed or failed based on the following criteria:
   - A student passes if their average score is **greater than or equal to 50**.
4. Outputs the results in a well-formatted way using template literals.

### Requirements:

- Use **arrays**, **objects** and **arrow functions**.
- Use **array methods** such as **_map()_** or **_forEach()_** to calculate the averages.
- Use destructuring to extract data from objects.
- Use **let** and **const** for variable declarations.

### Example Input:

```javascript
const students = [
  { name: "Alice", scores: { Math: 55, Science: 65, English: 70 } },
  { name: "Bob", scores: { Math: 40, Science: 45, English: 35 } },
  { name: "Charlie", scores: { Math: 80, Science: 75, English: 85 } },
];
```

### Expected Output:

```
Alice:
  Math: 55, Science: 65, English: 70
  Average: 63.33
  Status: Pass
Bob:
  Math: 40, Science: 45, English: 35
  Average: 40.00
  Status: Fail
Charlie:
  Math: 80, Science: 75, English: 85
  Average: 80.00
  Status: Pass
```
