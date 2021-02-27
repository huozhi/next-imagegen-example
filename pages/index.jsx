import styles from './index.module.css'

export default function App() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="/logo/microlink.image"
        />
        <div style={{fontSize: '100px', alignSelf: 'center'}}>&times;</div>
        <img
          className={styles.image}
          src="/logo/vercel.image"
        />
      </div>
      <div className={styles.link}>
        Source:
        <a className={styles.anchor} href="https://github.com/huozhi/imagegen-logo-previews">
          github.com/huozhi/imagegen-logo-previews
        </a>
      </div>
    </div>
  )
}
