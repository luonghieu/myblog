import moment from 'moment'
import { trans } from '@I18n/i18n'

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

export const getTimeleft = (time) => {
  time = moment(time)
  const current = moment()
  const tempTime = moment.duration(time.diff(current))
  return {
    days: time.diff(current, 'days'),
    hours: tempTime.hours(),
    minutes: tempTime.minutes(),
    seconds: tempTime.seconds()
  }
}

export const getTimeleftToText = (time) => {
  const timeleft = getTimeleft(time)
  let text = ''
  if (timeleft.days > 0) {
    text += timeleft.days + '<span class="fs-16">' + trans('label.time.days') + ' </span>'
  }
  if (timeleft.hours > 0) {
    text += timeleft.hours + '<span class="fs-16">' + trans('label.time.hours') + ' </span>'
  }
  if (timeleft.minutes > 0) {
    text += timeleft.minutes + '<span class="fs-16">' + trans('label.time.minutes') + ' </span>'
  }
  if (timeleft.seconds >= 0) {
    text += timeleft.seconds + '<span class="fs-16">' + trans('label.time.seconds') + ' </span>'
  }
  return text
}

export const isString = (string) => {
  return typeof string === 'string'
}

/*
* Ex: replaceArgumentsString('Hello %0', ['world']) => 'Hello world'
*
* */
export const replaceArgumentsString = (string, args) => {
  return string.replace(/%(\d+)/g, (_, m) => {
    return args[m]
  })
}
