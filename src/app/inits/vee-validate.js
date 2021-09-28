import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import * as customRules from '@Validator/custom-rules'
import locale from '@I18n/locale'

// Register it globally
import en from '@Validator/locales/en'
import ja from '@Validator/locales/ja'

export const initValidation = () => {
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)

  Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
  })

  Object.keys(customRules).forEach(rule => {
    extend(rule, customRules[rule])
  })

  // Install English and Japan locales.
  localize({
    en,
    ja
  })
  // Set locale for vee-validate
  localize(locale)
}
