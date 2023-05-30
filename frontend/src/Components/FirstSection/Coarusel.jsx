import React from 'react'
import "./style.scss";

const Coarusel = ({img,text}) => {
  return (
    <>
      <div className="full-home" style={{backgroundImage: `url(${img})`}}>
        <div className="container">
          <div className="find">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coarusel
