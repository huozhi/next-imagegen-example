const imageStyles = {
  userSelect: 'none',
  width: 500,
  margin: '0 40px',
  alignSelf: 'center',
}

export default function App() {
  return (
    <div style={{margin: 0, background: 'rgb(14, 14, 14)', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center'}}>
      <img
        style={imageStyles}
        src="/logo/microlink.image"
      />
      <div style={{fontSize: '100px', alignSelf: 'center', color: '#fff'}}>&times;</div>
      <img
        style={imageStyles}
        src="/logo/vercel.image"
      />
    </div>
  )
}