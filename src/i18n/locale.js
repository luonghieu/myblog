import { DEFAULT_LANGUAGE } from '@Config/constants'

let locale = DEFAULT_LANGUAGE
if (!localStorage.getItem('language')) {
  locale = DEFAULT_LANGUAGE
} else {
  locale = localStorage.getItem('language') === 'en' ? 'en' : 'ja'
}

export default locale
