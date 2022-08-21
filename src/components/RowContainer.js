import React from 'react'
import '../RowContainer.css'
import FruitItem from './FruitItem'
const RowContainer = ({scroll}) => {
  return (
      <div className={`fruit-row ${!scroll?'menu-row':''}`}>
      <FruitItem />
      <FruitItem />
      <FruitItem />
      <FruitItem />
      <FruitItem />
      <FruitItem />
      <FruitItem />
          
      </div>
  )
}

export default RowContainer