const monthsArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getDate = (date: DateDetailer) => {
  return `${date.day} ${monthsArray[date.month]} ${date.year}`;
};

export const getTime = (date: DateDetailer) => {
  if (date.hour.length === 1) {
    date.hour = '0' + date.hour;
  }
  if (date.minute.length === 1) {
    date.minute = '0' + date.minute;
  }
  return `${date.hour}:${date.minute}`;
};

export class DateDetailer {
  date = new Date();
  day = this.date.getDay() + '';
  month = this.date.getMonth();
  year = (this.date.getFullYear() + '').slice(2, 4);
  hour = this.date.getHours() + '';
  minute = this.date.getMinutes() + '';
}
