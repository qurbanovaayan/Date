function getNextSalaryDate() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();

    let salaryDate = new Date(year, month, 15);

    if (today > salaryDate) {
        salaryDate = new Date(year, month + 1, 15);
    }

    if (salaryDate.getDay() === 6) {
        salaryDate.setDate(salaryDate.getDate() - 1);
    }

    if (salaryDate.getDay() === 0) {
        salaryDate.setDate(salaryDate.getDate() - 2);
    }

    return salaryDate.toLocaleDateString();
}

console.log(getNextSalaryDate());