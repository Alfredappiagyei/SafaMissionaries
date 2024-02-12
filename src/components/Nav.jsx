 import React, { useState } from 'react'
 import Logo from "../assets/images/logo.jfif"
 export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    
   return (
 
    <nav className="bg-white dark:bg-gray-900 fixed  w-full m-0 z-20 top-0 start-0  ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-20  rounded-full sm:hidden md:block" alt="Flowbite Logo"/>
        <span className="self-center text-2xl sm:hidden md:block font-semibold whitespace-nowrap dark:text-white">Safamissionaries</span>
        <span className="self-center text-2xl sm:block md:hidden font-fontFamily-serif whitespace-nowrap text-ModerateGreen-100">SMFC</span>
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-ModerateGreen-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-sticky" 
          aria-expanded={isOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div className={`items-center md:order-2 justify-between w-full md:flex   md:w-auto   ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 sm:border-0 md:bg-white md:flex">
          <li >
          <a href="#" className="block font-semibold py-2 px-3 text-base md:text-ModerateGreen-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-ModerateGreen-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NEWS</a>
          </li>
          <li>
            <a href="#" className="block font-semibold py-2 px-3 text-base md:text-ModerateGreen-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-ModerateGreen-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FIXTURES&TEAMS</a>
          </li>
          <li>
            <a href="#" className="block font-semibold py-2 px-3 text-base md:text-ModerateGreen-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-ModerateGreen-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT US</a>
          </li>
          <li>
            <a href="#" className="block font-semibold py-2 px-3 text-base md:text-ModerateGreen-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-ModerateGreen-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  


 

   )
 }
 