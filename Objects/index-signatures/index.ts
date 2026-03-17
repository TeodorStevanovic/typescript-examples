type Scores = {
    [key: string]: number,
};

const studentScores = {
    math: 90,
    english: 88,
    history: 100
};

function printScores(student: Scores) {
    for (const key in student) {
        console.log(key, student[key]);
    };
};

printScores(studentScores);