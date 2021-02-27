import { handler, provider as defaultProvider } from 'next-plugin-imagegen'
import { provider } from 'next-plugin-imagegen-puppeteer'

const options = {
  viewport: {
    x: 8,
    y: 8,
    width: 240,
    height: 100,
  }
}

export default handler(
  process.env.NODE_ENV === 'production' ? 
    defaultProvider(options) : 
    provider(options)
)
