function daysBetween(date1, date2) {

    let firstDate = new Date(date1);
    let secondDate = new Date(date2);

    let difference = Math.abs(secondDate - firstDate);

    let days = difference / (1000 * 60 * 60 * 24);

    return days;
}

console.log(daysBetween("2026-07-01","2026-07-10"));