"use client"
import React from 'react'
import Link from 'next/link'
import './ContactDetails.css'
import Contact from '../Contact/Contact'
import useLenis from '../hooks/useLenis' 
import { useTheme } from '@/app/context/ThemeContext'

const ContactDetails = () => {
  const { theme } = useTheme();
  useLenis();
  
  return (
    <> 
      <div className={`contact-breadcrumb ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <div className="breadcrumb-container">
          <h1 className="breadcrumb-title">Get in Touch</h1>
          <p className="breadcrumb-path">
            <Link href="https://www.kritirai.com">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </p>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default ContactDetails