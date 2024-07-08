import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = 'https://dify-awuac-u15194.vm.elestio.app/v1'
export const IS_WORKFLOW = 'false'
export const APP_INFO: AppInfo = {
  title: 'Generator APP',
  description: 'App description',
  copyright: '',
  privacy_policy: '',
  default_language: 'en-EN',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
