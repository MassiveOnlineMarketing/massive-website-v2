'use client'

import React, { useState, useEffect } from 'react'

import container, { constants } from '@/styles/styles'
import { GridBackground } from '@/assets/backgrounds'
import { MassiveLogoColor } from '@/assets/branding';


import { Button } from '../ui/button';

import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = () => {
  return (
    <NavbarTwo />
  )
}

const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
  return (
    <div className={`fixed top-0 left-0 botto-0 w-full h-screen bg-white z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-full'} md:hidden`}>
      <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className="p-4  flex flex-col h-full gap-6">
        {/* <li>Diensten</li>
        <li>Process</li>
        <li>Producten</li>
        <li>Over ons</li> */}
        <li>
          <ModalFullScreen size='sm' variant={'primary'} buttonText='contact' animationDuration={1000} animationIn='element' animationOut='element-out'>
            <MultiStepContactForm />
          </ModalFullScreen>
        </li>
      </ul>
    </div>
  );
};

const NavbarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState('translate-y-0');

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setNavbarStyle('-translate-y-full');
      } else {
        // Scrolling up
        setNavbarStyle('translate-y-0');
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    }
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <nav>
      <div className={`fixed top-0 w-full z-50 ${constants.glassFill} border-b-[1px] border-white shadow-sm  transition-transform duration-300 ease-in-out ${navbarStyle}`}>
        <div className='px-8 py-3  max-w-[1300px] mx-auto '>
          <div className=' justify-between flex flex-row '>
            <MassiveLogoColor className="w-14" />

            {/* hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <ul className="hidden md:flex items-center gap-6">
              {/* <li>Diensten</li>
              <li>Process</li>
              <li>Producten</li>
              <li>Over ons</li> */}
            </ul>

            {/* <Button size='sm' variant={'primary'} className="md:block hidden">Contact</Button> */}
            <ModalFullScreen size='sm' variant={'primary'} buttonText='contact' className='md:block hidden' animationDuration={1000} animationIn='element' animationOut='element-out'>
              <MultiStepContactForm />
            </ModalFullScreen>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}