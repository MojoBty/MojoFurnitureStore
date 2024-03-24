import React, {useState, useEffect} from 'react'

import Product from "./Product"
import furniture from "../resources/furnitureData"
import { Form } from "react-router-dom"

const productArray = furniture.map((item, index) => (
  <div key={index}>
    <Product 
      id = {item.id}
      name = {item.name}
      img = {item.img}
      price ={item.price}
      description = {item.description}
      padding = {'15px'}
    />
  </div>
))

const ProductGrid = () => {

  const [numOfColumns, setNumOfColumns] = useState(4)
  const [containerWidth, setContainerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if (containerWidth >= 1652) {
      setNumOfColumns(4)
    } else if (containerWidth >= 1239) {
      setNumOfColumns(3)
    } else if (containerWidth >= 826) {
      setNumOfColumns(2)
    }  else if (containerWidth >= 413) {
        setNumOfColumns(1)
      }
    }
  )

  return (
    <div className="product-grid-container">
      <div className="product-page-title">
        Furniture
      </div>
      <div className='product-page-grid-container'>
        <div className="product-page-grid" style={{gridTemplateColumns: `${("1fr ").repeat(numOfColumns)}`}}>
          {productArray}
        </div>
      </div>
    </div>
  )
}

export default ProductGrid