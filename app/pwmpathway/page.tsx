import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PWMPathwayPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-white pt-32 pb-20 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cuwmc-primary via-cuwmc-secondary to-cuwmc-primary"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          
          {/* Logo */}
          <div className="w-full flex justify-center mb-4">
            <img 
              src="/assets/imgs/company_logos/pwmpathway.png" 
              alt="PWM Pathway" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-8 font-garamond">
              The Path to Top-Tier Private Wealth Management
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-garamond">
              An elite, highly-selective training and networking platform built specifically for ambitious students aiming to secure Private Wealth Management roles at the world's premier financial institutions. 
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-garamond">
              Discover the comprehensive recruitment playbook utilized by successful analysts, master the technical nuances of wealth management, and gain exclusive exposure to the industry leaders who actually make the hiring decisions.
            </p>
          </div>

          {/* Perks Box */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-lg mt-8 w-full max-w-3xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Exclusive CUWMC Benefits
            </h3>
            <p className="text-lg text-gray-700 font-garamond leading-relaxed">
              As part of our commitment to your professional success, <strong>all admitted CUWMC analysts receive full, complimentary access</strong> to the entire contents of the PWMPathway bootcamp. We equip you with the best resources to land your dream role.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-8">
            <a 
              href="https://pwmpathway.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-cuwmc-primary text-white border-2 border-transparent px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-cuwmc-primary hover:border-cuwmc-primary transition-all duration-300 font-garamond text-xl shadow-md hover:shadow-xl"
            >
              Visit PWMPathway.com
            </a>
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </main>
  );
}
