import { createI18n } from 'vue-i18n'
import en from './en.js'
import zn from './zn.js'

const i18n = createI18n({
  locale: 'zn',
  fallbackLocale: 'en',
  messages: {
    en: en,
    zn: zn
  }
})


export default i18n