import moment from 'moment';

export function fromNow (time) {
  return moment(time, 'X').fromNow();
}
