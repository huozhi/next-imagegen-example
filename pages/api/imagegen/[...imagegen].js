import { handler, provider as defaultProvider } from 'next-plugin-imagegen'
import { provider } from 'next-plugin-imagegen-puppeteer'

const options = {
  viewport: {
    x: 0,
    y: 0,
    width: 240,
    height: 100,
  }
}

console.log(`db:${process.env.NODE_ENV} === 'development'`,)

export default handler(
  process.env.NODE_ENV === 'development' ?
    provider(options) :
    defaultProvider(options)
)
