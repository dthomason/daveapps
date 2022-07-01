/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PUBLIC_URL: string
      REACT_APP_FORM_KEY: string
      REACT_APP_CAPTCHA_KEY: string
      }
  }
  interface Window {
      Stripe: any
  }
