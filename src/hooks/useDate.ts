const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const dayWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export const getDate = () => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = months[dateNow.getMonth()];
    const month2 = month.slice(0, 3);
    const day = dayWeek[dateNow.getDay() - 1];
    const date =
        dateNow.getDate() < 9 ? dateNow.getDate() + '0' : dateNow.getDate();

    return {
        year,
        month,
        day,
        month2,
        date,
    };
};
