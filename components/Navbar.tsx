'use client'

import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cuwmc-primary' : 'bg-cuwmc-primary-transparent'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo size="medium" />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/about" className="nav-link">About</a>
              <a href="/eboard" className="nav-link">E-Board</a>
              <a href="/programs" className="nav-link">Programs</a>
              <a href="/divisions" className="nav-link">Divisions</a>
              <a href="/recruitment" className="nav-link">Recruitment</a>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/cuwmc/" className="social-btn">
              <FaLinkedin  className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/cuwmc/" className="social-btn">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cuwmc-secondary focus:outline-none focus:text-cuwmc-secondary transition-all duration-300 ease-in-out"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 transform rotate-90 transition-all duration-300 ease-in-out" />
              ) : (
                <FaBars className="w-6 h-6 transform rotate-0 transition-all duration-300 ease-in-out" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cuwmc-primary">
          <a href="/about" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="/eboard" className="mobile-nav-link" onClick={closeMenu}>E-Board</a>
          <a href="/programs" className="mobile-nav-link" onClick={closeMenu}>Programs</a>
          <a href="/divisions" className="mobile-nav-link" onClick={closeMenu}>Divisions</a>
          <a href="/recruitment" className="mobile-nav-link" onClick={closeMenu}>Recruitment</a>
          
          {/* Mobile Social Media */}
          <div className="flex justify-center space-x-4 pt-4">
            <a href="https://www.linkedin.com/company/cuwmc/" className="social-btn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/cuwmc/" className="social-btn">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
