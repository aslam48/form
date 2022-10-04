import React from 'react'
import './Forminput.css'


const Forminput = (props) => {
  const {label, OnChange, id, ...inputprops}  = props;

  return (
    <div className='forminput'>
        <label>{label}</label>
        <input {...inputprops}  onChange={OnChange}/>
    </div>
  )
}

export default Forminput