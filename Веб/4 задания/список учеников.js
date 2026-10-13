const studs = [
    { name: "Иван", grade: 5 },
    { name: "Анна", grade: 4 },
    { name: "Пётр", grade: 3 },
    { name: "Мария", grade: 5 }
];

let mg = 4;
let sum = 0;

for (let i = 0; i < studs.length; i++) {

    if (studs[i].grade > mg) {
        console.log(studs[i].name);
    }

    sum = sum + studs[i].grade;
}

let average = sum / studs.length;

console.log("Средняя оценка:", average);
