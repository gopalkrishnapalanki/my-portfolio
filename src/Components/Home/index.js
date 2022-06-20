import React from 'react'
import "./index.css"
import Header from '../Header'
import Cookies from 'js-cookie'
import { Redirect, Link } from 'react-router-dom'
import Skills from '../Skills'
import Footer from '../Footer'
import Portfolio from '../Portfolio'
import Slider from '../Slider'
const Home = () => {
 
  
  return (
    <>
    <div>
      <Header />
     <Portfolio/>
   
        <Skills />
        <Slider/>
        </div>
      </>
  )
}

export default Home