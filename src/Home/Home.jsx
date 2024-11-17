import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='bgi'>Home</div>
    
    <h1 className='logo'>DICE LUCK
   <Link to='/game' className='link'> <button className='play'>Lets's Play</button></Link>
    </h1>
    </>
  )
}

export default Home