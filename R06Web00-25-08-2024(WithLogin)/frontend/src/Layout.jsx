import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop.jsx';  // Adjust the path based on your project structure

function Layout() {
  return (
    <>
    <ScrollToTop/>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout