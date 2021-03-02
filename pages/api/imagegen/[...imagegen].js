import { handler, provider as defaultProvider } from 'next-plugin-imagegen'

const options = {
  viewport: {
    x: 8,
    y: 8,
    width: 240,
    height: 100,
  }
}

export default handler(defaultProvider(options))
