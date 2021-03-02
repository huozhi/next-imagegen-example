export default function Input(props) {
  return (
    <div className="input-outer-wrapper">
      <div className="input-inner-wrapper">
        <input {...props} />
      </div>
    </div>
  )
}
