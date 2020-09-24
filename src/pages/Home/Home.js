import React from 'react'
import { Link } from 'react-router-dom'
import Caro from './Carlo'
import Cards from './Cards'
import Jumbo from './Jumbo'
import './style.css'

const Home = () => {
  return (
    <>
      <body className="background">
        <Jumbo className="jumbo" />
          <br/>
        <Cards className="cards" />
          <br/>
        <Caro className="caro"/>
      </body>
    </> 
  )
}

export default Home