import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import topImage from "../assests/img/topImage.png"
function LayOut({children}) {
  return (
    <div className='w-[100%] m-auto  bg-gray-100' style={{backgroundColor:"F7F8FA"}}>
        <img src={topImage} alt='topImage' className='w-full'/>
        <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default LayOut
