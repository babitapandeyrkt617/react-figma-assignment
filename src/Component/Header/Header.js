import React from 'react'

const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src='./image/FliqaIndia-Logo 1.png'/>
      </div>
      <div className='items'>
        <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Community</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className='btn'>
      <button className='btn-1'>Sign Up</button>
      <button className='btn-2'>Sign In</button>
      </div>
    </div>
  )
}

export default Header;
