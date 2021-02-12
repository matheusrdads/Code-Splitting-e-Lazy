import React from 'react'
import krisiun from '../.././views/Products/assets/krisiun.jpg';
import aerosmith2 from '../../views/Products/assets/aerosmith2.jpg';

function Banner() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <h1>You won't hear anything like that in the next decade</h1>
        <img alt="" src={krisiun} style={{ width: "70%" }} />
      </div>
      
      <div className="col-sm-6">
        <h1>don't forget that brutes also love</h1>
        <img alt="" src={aerosmith2} style={{ width: "70%" }} />

      </div>

    </div>
  )
}

export default Banner
