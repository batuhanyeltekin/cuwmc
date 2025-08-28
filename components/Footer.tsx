'use client'

import React from 'react'
import Logo from './Logo'
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-cuwmc-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-gray-300 text-lg">
              Columbia Undergraduate Wealth Management Club
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cuwmc-secondary text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#board" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  Board
                </a>
              </li>
              <li>
                <a href="/eboard" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  E-Board
                </a>
              </li>
              <li>
                <a href="/programs" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  Divisions
                </a>
              </li>
              <li>
                <a href="#recruitment" className="text-gray-300 hover:text-cuwmc-secondary transition-colors">
                  Recruitment
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-cuwmc-secondary text-lg font-semibold mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cuwmc-secondary hover:text-cuwmc-primary transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cuwmc-secondary hover:text-cuwmc-primary transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@cuwmc.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cuwmc-secondary hover:text-cuwmc-primary transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Columbia Undergraduate Wealth Management Club. All rights reserved. Website by Batuhan Yeltekin.
          </p>
        </div>
      </div>
    </footer>
  )
}
