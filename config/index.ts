import type { AppInfo } from '@/types/app'
export const APP_ID = '1049d466-df04-42b9-a87c-71867850ca79'
export const API_KEY = 'app-2a1Xx4aH4nL4o4luWVqNYYkz'
export const API_URL = 'https://api.dify.ai/v1'
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: 'Generator APP2',
  description: 'App description',
  copyright: '',
  privacy_policy: '',
  default_language: 'en-EN',
}


export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
