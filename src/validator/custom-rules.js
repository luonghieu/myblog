import moment from 'moment'
import { isEmpty } from 'lodash'

const afterMinute = {
  validate (value, { minute }) {
    if (!value) {
      return true
    }
    value = moment(value).second(0).format('YYYY-MM-DD HH:mm:ss')
    const now = moment().second(0).format('YYYY-MM-DD HH:mm:ss')
    return moment(value).diff(now, 'minutes') >= minute
  },
  params: ['minute']
}

const afterNow = {
  validate (value) {
    if (!value) {
      return true
    }
    value = moment(value).second(0).format('YYYY-MM-DD HH:mm:ss')
    const now = moment().second(0).format('YYYY-MM-DD HH:mm:ss')
    return moment(value).diff(now, 'minutes') > 0
  }
}

const afterOrEqualNow = {
  validate (value) {
    if (!value) {
      return true
    }
    value = moment(value).second(0).format('YYYY-MM-DD HH:mm:ss')
    const now = moment().second(0).format('YYYY-MM-DD HH:mm:ss')
    return moment(value).diff(now, 'minutes') >= 0
  }
}

const after = {
  validate (value, { target }) {
    if (!value || !target) {
      return true
    }
    value = moment(value).second(0).format('YYYY-MM-DD HH:mm:ss')
    const now = moment().second(0).format('YYYY-MM-DD HH:mm:ss')
    return moment(value).diff(now, 'minutes') > 0
  },
  params: ['target']
}

const same = {
  validate (value, { target }) {
    if (!value || !target) {
      return true
    }
    return value === target
  },
  params: ['target']
}

const extension = {
  validate (value, { target }) {
    if (isEmpty(value) || isEmpty(target)) {
      return true
    }

    var fileName = ''

    if (Array.isArray(value) && value.length) {
      fileName = value[value.length - 1].file.name
    } else {
      fileName = value.name
    }

    return target.includes(fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase())
  },
  params: ['target']
}

const array = {
  validate (value) {
    return Array.isArray(value)
  }
}

export {
  array,
  afterMinute,
  afterNow,
  afterOrEqualNow,
  after,
  same,
  extension
}
