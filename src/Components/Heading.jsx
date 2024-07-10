import React from 'react'

const Heading = (props) => {
  return (
    <div className="heading">
        <i className={props.iclass}></i>
        <h3>{props.h3}</h3>
    </div>
  )
}

export default Heading