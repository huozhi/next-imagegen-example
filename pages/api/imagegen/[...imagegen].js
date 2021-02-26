import { handler, provider } from 'next-plugin-imagegen'

export default handler(provider({
  viewport: {
    x: 8,
    y: 8,
    width: 240,
    height: 100,
  }
}))
