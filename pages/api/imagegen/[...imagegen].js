import { handler, provider } from 'next-plugin-imagegen'

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
    provider(options) : 
    require('next-plugin-imagegen-puppeteer').provider(options)
)
