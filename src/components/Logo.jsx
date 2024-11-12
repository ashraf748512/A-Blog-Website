import React from 'react'
import logo from "../assets/logo.png"
const Logo = ({width="100px"}) => {
  return (
    <div className='max-w-[100px] rounded-full'>
      <img className='rounded-full' src={logo} alt="logo" />
    </div>
  )
}

export default Logo