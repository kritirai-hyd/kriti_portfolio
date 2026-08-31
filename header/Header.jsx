import React, { useState } from 'react';
import s from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import l from '../../assets/images/kriti rai.png';
import m from '../../assets/images/menu.svg';
import c from '../../assets/images/close.svg'
const Header = () => {
    const [open, setopen] = useState(false)


  return (
    <>
    
         <div className={s.bg}></div> <header className={open ? s["header-active"] : s.header }>
 <div className={s.media}>
             <Link href="#" className={s.kriti}><Image src={l} width={180} height={60} className={s.logo} /></Link>
         <div className={s.menu} onClick={() => setopen(!open)}>
<Image src={open ? c : m} width={120} height={40} />
        </div>
           
 </div>      

          <nav className={open ? s.active : s.nav}>
                <Link href="#">Home</Link>
                <Link href="#">Work</Link>
                <Link href="#">About</Link>
                <Link href="#">Contact</Link>
                    <Link href="#contact" className={s.contact}>Let's Talk ↗</Link>
            </nav>
        

  

        </header>

    </>
  )
}

export default Header