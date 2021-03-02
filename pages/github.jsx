import { useState } from 'react'
import styles from './github.module.css'
import Field from '../components/field'
import Input from '../components/input'
import { param } from '../utils'

const generateUrl = (params) => param(`/card/github.image`, params)

export default function Github() {
  const [uname, setUname] = useState('ghost')
  const [fullname, setFullname] = useState('Mr. Ghost')
  const [job, setJob] = useState('Developer')
  const [company, setCompany] = useState('Earth')
  const params = {name: uname, job, fullname, company}
  const [url, setUrl] = useState(generateUrl(params))
  return (
    <div className="container">
      <h1 className="page-title">Generate Next.js User Card</h1>
      <div className="app">
        <div className="split">
          <div className="pull-left">
            <div>
              <Field title="Github Username">
                <Input value={uname} onChange={(e) => setUname(e.target.value)} />
              </Field>
              <Field title="Fullname">
                <Input value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </Field>
              <Field title="Job">
                <Input value={job} onChange={(e) => setJob(e.target.value)} />
              </Field>
              <Field title="Company">
                <Input value={company} onChange={(e) => setCompany(e.target.value)} />
              </Field>
              <Field>
                <button className="button" onClick={() => setUrl(generateUrl(params))}>
                  Generate
                </button>
              </Field>
            </div>
          </div>
          
          <div className="pull-right">
            <div className={styles.image}>
              {url ?
                <img src={url} /> :
                <div className={styles.placeholder} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}