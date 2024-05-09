import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Category from './category'
import Footer from './Footer';
import Cart from './Cart';

const Layout = () => {
  return (
    <div style={{position:"relative"}}>
    <Cart/>
    <Navbar/>
    <Category/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
