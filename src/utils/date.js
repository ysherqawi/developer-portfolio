const _days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getToday = () => {
  const date = new Date();

  return _days[date.getDay()];
};
