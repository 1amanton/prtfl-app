import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import {products} from "../../data.js"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-texts-title">Create & Create</h1>
            <p className="pl-texts-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque quisquam ullam voluptatum sunt accusantium soluta nihil libero voluptatem animi. Corrupti cumque asperiores adipisci. Fugit magnam dolores sit nostrum voluptas!</p>
        </div>

        <div className="pl-list">
            {products.map(item => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))
            }

        </div>
    </div>
  )
}

export default ProductList
