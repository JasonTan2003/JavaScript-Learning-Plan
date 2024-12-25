/*
Suggestion for Improvement
1. Avoid Mutating Global Variables:
    Using global variables like averageScore and state can be avoided. You can store these results direclty in the students array or compute them on the fly.
2. Combine Logic in forEach:
    The logic for calculating averages and determining the pass/fail state can be combined in a single iteration to reduce redundancy.
3. Use Arrow Functions Consistently:
    While you've used an arrow function for isPass, other parts (like average) could also use arrow functions for consistency.

Key Improvements in Refactored Code
1. Directly Modify the students Array:
    Instead of using external arrays (averageScore and state), the results are stored directly in the students array as new properties (average and status).
2. Simplified Logic:
    Combined average calculation and pass/fail determination into a single forEach loop.
3. Destructuring:
    Used destructuring to extract scores (Math, Science and English) for cleaner and more readable code.
4. Ternary Operator:
    Simplified the pass/fail logic using a ternary operator.
*/

const students = [
    { name: "Jason", scores: { Math: 95, Science: 81, English: 71 } },
    { name: "Jackie Chan", scores: { Math: 85, Science: 65, English: 45 } },
    { name: "Alice", scores: { Math: 40, Science: 75, English: 85 } },
    { name: "Jordan", scores: { Math: 35, Science: 45, English: 55 } },
    { name: "Kelly", scores: { Math: 48, Science: 27, English: 63 } },
];
  
// Process each student
students.forEach(student => {
    // Calculate average score
    const { Math: mathScore, Science: scienceScore, English: englishScore } = student.scores;
    const average = ((mathScore + scienceScore + englishScore) / 3).toFixed(2);
    
    // Determine pass/fail status
    const status = parseFloat(average) >= 50 ? "Pass" : "Fail";
    
    // Add average and status to the student object
    student.average = average;
    student.status = status;
});

// Print results
students.forEach(student => {
    console.log(`${student.name}:
      Math: ${student.scores.Math}, Science: ${student.scores.Science}, English: ${student.scores.English}
      Average: ${student.average}
      Status: ${student.status}`);
});
  