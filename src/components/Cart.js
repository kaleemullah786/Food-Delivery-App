import {  KeyboardBackspace, Loop } from '@mui/icons-material'
import React from 'react'
import styles from '../Cart.module.css'
import I6 from '../img/i6.png'
import { motion} from 'framer-motion'

const Cart = ({ cart, setcart }) => {
  return (
    <motion.div initial={{ x: '50vw' }} animate={{ x: '0px' }} exit={{ x:'100vw' }} className={styles.cart}>
      <div className={styles.head}>
          <motion.div className={styles.back} whileHover={{ backgroundColor:'rgb(240, 240, 240)',borderRadius:'1rem',cursor:'pointer'}} onClick={() => setcart(!cart)}><KeyboardBackspace /></motion.div>
        <h3>Cart</h3>
        <h6>Clear<Loop /></h6>
      </div>
      <div className={styles.main}>
        <div className={styles.itemRow}>
          <div className={styles.item}>
            <div className={styles.itemContent}>
              <img src={I6} alt="i6" width={50} />
              <div className={styles.itemText}>
                <h6>Chocolate vanilla</h6>
                <h6>$ 8.5</h6>
              </div>
            </div>
            <div className={styles.btn}>
              <button>-</button>1<button>+</button>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          
            <div className={styles.data}>
              <h4>Sub Total</h4>
              <h4>$ 8.5</h4>
            </div>
            <div className={styles.data}>
              <h4>Delivery</h4>
              <h4>$ 2.5</h4>
            </div>
            <span className={styles.divider}> </span>
            <div className={`${styles.data} ${styles.total}`}>
              <h3>Total</h3>
              <h3>$ 11</h3>
            </div>
            <button className={styles.checkout}>Check Out</button>        
          </div>
        </div>
      </motion.div>
  )
}

export default Cart