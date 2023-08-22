import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useState } from 'react'


function Navbar() {
  const [toggle,setToggle]=useState(false)
  return (
    <nav className="bg-dark dark:bg-dark border-b-4 border-yellow-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center">
            <img src={logo} class="h-16 mr-3" alt="Flowbite Logo" />
        </Link>
        <button onClick={()=>setToggle(!toggle)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className= {(toggle ? "block w-full": "hidden md:flex")}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to='/' className="navbar-links">Home</Link>
            </li>
            <li>
              <Link to="/counter" className="navbar-links">Count Calories</Link>
            </li>
            <li>
              <Link href="/list" className="navbar-links">Meal List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar