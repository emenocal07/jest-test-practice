function calculateDaysBetweenDates(begin, end) {
    let oneDay = 24 * 60 * 60 * 1000;
    let firstDate = new Date(begin);
    let secondDate = new Date(end);
    let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
}