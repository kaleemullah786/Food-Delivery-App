import React from 'react'
import { motion } from 'framer-motion'
import { Fastfood } from '@mui/icons-material'
import styles from '../CardItem.module.css'

const card = {
    hover: { scale: 0.8, cursor: 'pointer', boxShadow: '2px 4px 6px 0 gray' }
}

const CardItem = ({ name, filter, setFilter }) => {
  return (
      <motion.div whileHover='hover' variants={card} className={`${styles.cardItem} ${filter===name?styles.activeCard:''}`} onClick={()=>setFilter(name)}>
          <motion.div  className={`${styles.cardImg} ${filter === name ? styles.activeImg : ''}`}><Fastfood /></motion.div>
          <motion.div  className={`${styles.cardText} ${filter === name ? styles.activeText : ''}`}>{name}</motion.div>
      </motion.div>
  )
}

export default CardItem