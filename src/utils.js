import { Platform } from 'react-native';

function getHoursAndMinutes(hoursMinutesSeconds) {
  const arr = hoursMinutesSeconds.split(':');
  arr.pop();

  return arr.join(':');
}

function isPostedToday(date) {
  const timeNow = new Date();

  const yearNow = timeNow.getFullYear();
  let dayNow = timeNow.getDate();
  let monthNow = timeNow.getMonth() + 1;

  monthNow = monthNow < 10 ? `0${monthNow}` : monthNow;
  dayNow = dayNow < 10 ? `0${dayNow}` : dayNow;

  const dateNow = `${yearNow}/${monthNow}/${dayNow}`;

  return dateNow === date;
}

export function getSimpleTime(time) {
  const indexOfDateEnd = time.indexOf('T');
  let date = time.slice(0, indexOfDateEnd);
  const dateArr = date.split('-');
  date = dateArr.join('/');

  const indexOfZ = time.indexOf('Z');
  const hoursMinutesSeconds = time.slice(
    indexOfDateEnd + 1,
    indexOfZ - 4,
  );

  const hoursAndMinutes = getHoursAndMinutes(hoursMinutesSeconds);

  const isToday = isPostedToday(date);

  return `${isToday ? 'Today' : date}   ${hoursAndMinutes}`;
}

export const isAndroid = Platform.OS === 'android';

export function getMimeType(url) {
  const urlParts = url.split('.');

  return urlParts[urlParts.length - 1];
}

export function getPriceFromStr(price, isFree) {
  if (isFree) {
    return 'priceFrom=0&';
  } else if (!isFree && price) {
    return `priceFrom=${price}&`;
  }
  return '';
}
export function getPriceToStr(price, isFree) {
  if (isFree) {
    return 'priceTo=0&';
  } else if (!isFree && price) {
    return `priceTo=${price}&`;
  }
  return '';
}
