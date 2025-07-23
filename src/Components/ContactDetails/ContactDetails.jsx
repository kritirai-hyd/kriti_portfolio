
"use client"
import React from 'react'
import Link from 'next/link'
import './ContactDetails.css'
import Contact from '../Contact/Contact'
import useLenis from '../hooks/useLenis'
const ContactDetails = () => {
  useLenis();
  return (
    <> 
    <div className="contact-bredcrumb">
        <h1>Contact</h1>
        <p><Link href="https://www.kritirai.com">Home</Link>/ Contact</p>
    </div>
<Contact />
        </>
  )
}

export default ContactDetails