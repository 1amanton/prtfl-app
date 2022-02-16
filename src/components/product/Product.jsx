import React from 'react'
import "./product.css"

const Product = ({img, link}) => {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-browser-circle"></div>
            <div className="p-browser-circle"></div>
            <div className="p-browser-circle"></div>
        </div>
        
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-browser-img" />
        </a>
      
    </div>
  )
}

export default Product
