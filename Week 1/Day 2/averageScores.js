const studentNames = [{
    name: "Akmal",
    score: 88
},
{
    name: "Ahmad",
    score: 78
},
{
    name: "Hamza",
    score: 56
},
{
    name: "Asad",
    score: 43
},
{
    name: "Talha",
    score: 90
}
]

const averageScores = (studentNames) => {
let totalScore = 0;
for(let i = 0; i < studentNames.length; i++){
    totalScore += studentNames[i].score
}

let averageScore = totalScore / studentNames.length;
return averageScore;
}

console.log(averageScores(studentNames));

