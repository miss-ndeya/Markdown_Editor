import React from 'react'

const EditeurText = ({ cols, className, rows, onChange, value }) => {
  return (
    <textarea
    cols={cols}
    rows={rows}
    className={className}
    onChange={onChange}
    value={value}
  ></textarea>
  )
}

export default EditeurText
