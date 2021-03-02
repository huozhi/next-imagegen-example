import { useState } from 'react'
import Field from '../components/field'
import Input from '../components/input'
import Image from '../components/image'
import styles from './vercel.module.css'

function genUrl(params = {}) {
  const basePath = `/logo/vercel.image`
  let query = ''
  for (const key in params) {
    const value = params[key]
    if (value != null && value !== '') {
      query += `${key}=${encodeURIComponent(value)}`
    }
  }
  return query ? basePath + '?' + query : basePath
}

export default function Vercel() {
  const [title, setTitle] = useState('Vercel')
  const params = {title}
  const [url, setUrl] = useState(genUrl(params))
  return (
    <div className="container">
      <h1 className="page-title">Generate Vercel Images</h1>
      <div className="app">
        <div className="split">
          <div className="pull-left">
            <div>
              <Field title="Title">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              </Field>
              <Field>
                <button className="button" onClick={() => setUrl(genUrl(params))}>
                  Generate
                </button>
              </Field>
            </div>
          </div>
          
          <div className="pull-right">
            <div className={styles.image}>
              <Image src={url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
