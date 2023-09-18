import React from 'react'
import Navbar from "./Navbar"


const Header = () => {
  return (
    <div>
        <div className='header'>
            <Navbar/>
                <div className='header-content' flex flex-c text-center text-white>
                    <h2 className='header-title text-capitalize'>Yоu’re bоund tо find mоre.</h2>
                    <br></br>
                        <p className='header-text fs-18 fw-3 '></p>

                </div>

        </div>
      
    </div>
  )
}

export default Header
