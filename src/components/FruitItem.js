import React from 'react'
import { ShoppingCart } from '@mui/icons-material'
import F3 from '../img/f3.png'
import '../FruitItem.css'
import { motion } from 'framer-motion'

const card = {
    hover: { backgroundColor: '#ecf1ff', boxShadow: '2px 4px 6px 0 gray' }
}
const cardImg = {
    hover:{scale:1.2}
}
const FruitItem = () => {
  return (
      <motion.div whileHover='hover' variants={card} className={`fruit-item`}>
          <div  className='item-wrap'>
              <motion.img variants={cardImg} src={F3} alt="f3" width={100} />
              <motion.div whileHover={{ scale: 0.9, cursor: 'pointer', backgroundColor:'rgb(255, 192, 203)' }} className='item-cart'><ShoppingCart /></motion.div>
          </div>
          <div className='item-text'>
              <h4>Blue berries</h4>
              <h5>80 Calories</h5>
              <p>$ <span>5.2</span></p>
          </div>
      </motion.div>
  )
}

export default FruitItem