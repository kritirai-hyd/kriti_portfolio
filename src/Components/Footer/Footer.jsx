import React from 'react'
import './Footer.css'

import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
    <div className="footer">
  
          <div className="copyrights">
                <p className='p-p'>  © {new Date().getFullYear()} Kriti Rai. All rights reserved.</p>
            </div>
    </div>
    </>
  )
}

export default Footer