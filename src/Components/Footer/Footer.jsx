import React from 'react'
import './Footer.css'
import logo1 from "../../assets/image/college-career.png";
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer-logo">
{/* <Image src={logo1} alt='' /> */}
Kriti Rai
            </div>
            <div className="footer-nav">
                <ul className="footer-ul">

                    <li><Link href="">Services</Link></li>
                     <li><Link href="">About Me</Link></li>
                    <li><Link href="">Works</Link></li>
                    <li><Link href="">Resume</Link></li>
                    <li><Link href="">Skills</Link></li>
                     <li><Link href="">Testmonials</Link></li>
                        <li><Link href="">Contact</Link></li>
                </ul>
            </div>
          
        </div>
          <div className="copyrights">
                <p>  © 2025 Kriti Rai. All rights reserved.</p>
            </div>
    </div>
    </>
  )
}

export default Footer