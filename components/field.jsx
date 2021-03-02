export default function Field({title, children}) {
  return (  
    <div className="field">
      <label>
        <div className="field-label">{title}</div>
        <div className="field-value">{children}</div>
      </label>
    </div>
  )
}
