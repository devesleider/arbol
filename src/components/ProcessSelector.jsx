function ProcessSelector({ processNames, activeProcess, onChange }) {
  return (
    <div className="process-picker">
      <label htmlFor="processSelector">Proceso</label>
      <select
        id="processSelector"
        value={activeProcess}
        onChange={(event) => onChange(event.target.value)}
      >
        {Object.entries(processNames).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProcessSelector
