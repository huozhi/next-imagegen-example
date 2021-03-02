import { useEffect, useState } from 'react'
import { loadImage } from '../utils'
import styles from './image.module.css'

export default function Image({src, className = '', ...props}) {
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    loadImage(src).then(
      () => { setLoading(false); },
      () => { setLoading(false); }
    )
    
    return () => {
      setLoading(true)
    }
  }, [src])
  
  return (
    <img {...props} src={src} className={styles.image + ' ' + className} data-loading={isLoading} />
  )
}
