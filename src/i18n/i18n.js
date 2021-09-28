import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { DEFAULT_LANGUAGE } from '@Config/constants'
import locale from '@I18n/locale'
import jaLocale from './ja'
import enLocale from './en'

const messages = {
  ja: {
    ...jaLocale
  },
  en: {
    ...enLocale
  }
}

/**
 * Define I18n instance.
 *
 * @type {VueI18n}
 */
const i18n = createI18n({
  locale: locale,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages,
  silentTranslationWarn: true
})

createApp({}).use(i18n)

/**
 * Function helper translation language.
 *
 * @param key
 * @param params
 * @returns {VueI18n.TranslateResult}
 */
export const trans = (key, params = null) => {
  return i18n.t(key, params)
}

export default i18n
