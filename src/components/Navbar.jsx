import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='p-2 bg-slate-900 border-b-4 border-yellow-400'>
        <ul className='flex justify-center'>
          <li className='nav-menu'><Link to="/">Home</Link></li>
          <li className='nav-menu'><Link to="/list">Meal List</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar