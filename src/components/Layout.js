import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Category from './category'
import Footer from './Footer'
import Cart from './Cart'
import { useState } from 'react'

const Layout = () => {
  const[showCart, setShowCart] = useState(false);

  const handlevisisble = () =>
    {
      setShowCart(!showCart);
    }


  return (
    <div style={{position:"relative", maxWidth:"100vw", overflow:"hidden"}}>
    <Cart showCart={showCart} toggle={handlevisisble} />
    <Navbar toggle={handlevisisble}/>
    <Category/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
