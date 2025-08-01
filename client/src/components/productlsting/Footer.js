import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <Link to='/'><div className='site-title'>rayicon store</div></Link>        <h3>&copy; All rights reserved | Designed by Raymond Iwobi</h3>
        <div className='links'>
            <ul className='ul-links'>
                <Link to='/'><li>Home</li></Link>
                  <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
