import { handler, provider as defaultProvider } from 'next-plugin-imagegen'
import { provider } from 'next-plugin-imagegen-puppeteer'

const options = {
  viewport: {
    width: 1200,
    height: 630,
  }
}

export default handler(
  process.env.NODE_ENV === 'development' ?
    provider(options) :
    defaultProvider(options)
)
