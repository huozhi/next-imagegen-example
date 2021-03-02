export default function Select({options}) {
  return (  
    <div className="select-wrapper">
      <select>
        {options.map(opt => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="select-arrow">▼</div>
    </div>
  )
}
