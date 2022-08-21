import React, { useState, useEffect } from 'react'
import '../MenuContainer.css'
import CardItem from './CardItem'
import RowContainer from './RowContainer'

const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Fruits', 'Icecream', 'Drinks']

const MenuContainer = () => {
  const [filter, setFilter] = useState('Chicken')
  useEffect(() => {
  }, [filter])
  
  return (
    <div className='menu'>
      <h2 className="menu-head">
        Our Hot Dishes
      </h2>
      <div className="card-row">
        {dishes.map((item, index) => <CardItem name={item} filter={filter} setFilter={setFilter} key={index} /> )}
      </div>
      <RowContainer scroll={false} />
    </div>
  )
}

export default MenuContainer