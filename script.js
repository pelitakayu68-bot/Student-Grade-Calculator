let subjects = [];
function addSubject() {
    let mark = parseFloat(document.getElementById("mark").value);
    let credit = parseFloat(document.getElementById("credit").value);

    if (mark < 0 || mark > 100 || credit <= 0) {
        alert("Invalid input");
        return;
    }

    subjects.push({ mark, credit });
    alert("Subject added");
}
function getGradePoint(mark) {
    if (mark >= 80) return 4.0;
    else if (mark >= 70) return 3.0;
    else if (mark >= 60) return 2.0;
    else if (mark >= 50) return 1.0;
    else return 0.0;
}
function calculateCGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects.length; i++) {
        let gp = getGradePoint(subjects[i].mark);
        totalPoints += gp * subjects[i].credit;
        totalCredits += subjects[i].credit;
    }

    let cgpa = totalPoints / totalCredits;
    document.getElementById("result").innerHTML =
        "CGPA: " + cgpa.toFixed(2);
}
localStorage.setItem("cgpaData", JSON.stringify(subjects));
