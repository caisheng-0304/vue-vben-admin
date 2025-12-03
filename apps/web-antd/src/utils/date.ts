import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDate(date: Date, format: string = 'YYYY-MM-DD') {
  return dayjs(date).format(format);
}

export function formatDateTime(date: Date, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format);
}
