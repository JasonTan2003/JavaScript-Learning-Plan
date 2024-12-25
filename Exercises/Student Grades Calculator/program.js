const students = [
    { name: "Jason", scores: { Math: 95, Science: 81, English: 71 }},
    { name: "Jackie Chan", scores: { Math: 85, Science: 65, English: 45 }},
    { name: "Alice", scores: { Math: 40, Science: 75, English: 85 }},
    { name: "Jordan", scores: { Math: 35, Science: 45, English: 55 }},
    { name: "Kelly", scores: { Math: 48, Science: 27, English: 63 }},
];

const averageScore = [];
const state = [];

students.forEach(student => {
    const calculatedAverage = average(student.scores.Math, student.scores.Science, student.scores.English);
    averageScore.push(calculatedAverage);
});

function average(mathScore, scienceScore, englishScore) {
    const sum = mathScore + scienceScore + englishScore;
    const average = sum / 3;
    return average.toFixed(2);
};

isPass = () => {
    for (let i = 0; i < averageScore.length; i++) {
        if (parseFloat(averageScore[i]) >= 50) {
            state.push('Pass');
        } else {
            state.push('Fail');
        }
    }
};

isPass();

students.forEach((student, i) => {
    console.log(`${student.name}:
        Math: ${student.scores.Math}, Science: ${student.scores.Science}, English: ${student.scores.English}
        Average: ${averageScore[i]}
        Status: ${state[i]}`
    );
});