let grades = [
  [20, 10],
  [15, 20],
  [13, 18],
];

let average = 0;

for (let i = 0; i < grades.length; i++) {
  for (let j = 0; j < grades[i].length; j++) {
    average += grades[i][j];
  }
}

average /= grades.length * 2;

console.log(average);
