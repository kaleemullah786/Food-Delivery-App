import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'
import Logo from '../img/logo.png'
import { AccountCircle, ShoppingCart } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import Cart from './Cart'

const Navbar = () => {
    const [menu, setmenu] = useState(false)
    const [cart, setcart] = useState(false)
    return (
        <>
            <header>
                <nav>
                    <Link to='/createItem'><li>Create Item</li></Link>
                    <li>Menu</li>
                    <li>About us</li>
                    <li>Services</li>
                </nav>
                <motion.div whileHover={{cursor:'pointer',scale:1.2}} onClick={()=>setcart(!cart)}>
                    <ShoppingCart />
                </motion.div>
                <div className='logo'>
                    <img src={Logo} alt="logo" width={25} height={25} />
                    <Link to={'/'}><h3>City</h3></Link>
                </div>
                <div style={{ position: 'relative' }}>
                    <div onClick={() =>  setmenu(!menu)}>
                        <AccountCircle />
                    </div>
                    <AnimatePresence exitBeforeEnter>
                    {menu && (window.innerWidth <= 760) &&
                            <>  <motion.nav initial={{ opacity: 0, scale: (0), y: -100, x: 100 }} animate={{ opacity: 1, scale: (1), y: 0, x: 0 }} exit={{ opacity: 0, scale: 0, x: 50, y: -60 }} style={{ display: 'initial' }}>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>About us</li>
                            <li>Services</li>
                            </motion.nav>
                            <div className='hide' onClick={() => setmenu(!menu)}></div>
                        </>}
                    </AnimatePresence>
                </div>
            </header>
            <AnimatePresence exitBeforeEnter>
            {cart && <Cart cart={cart} setcart={setcart} />}
            </AnimatePresence>
        </>
    )
}
export default Navbar

