import { Middleware } from '@nuxt/types'

const ua: Middleware = (context) => {
  console.log('ua')
  // @ts-ignore
  context.userAgent = process.server
                      ? context.req.headers['user-agent']
                      : navigator.userAgent
}

export default ua
