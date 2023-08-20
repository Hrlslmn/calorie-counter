import React from 'react'
import header from '../images/healthy-header.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='relative'>
            <img src={header} alt="" className='border-b-4 border-yellow-400' />
            <div className='absolute md:bottom-[35%] md:left-[50px] left-[15px] bg-gray-800 bg-opacity-60 rounded-md bottom-[80px] md:mb-4'>
                <h1 className='md:text-[25px] lg:text-[50px] md:p-[30px] p-2 text-sm text-white font-semibold'>Counting nutritions doesn't have to be complicated</h1>
            </div>
            <div className='absolute md:bottom-[25%] bottom-6 md:left-[50px] left-[15px]'>
                <button className='bg-blue-700 p-2 rounded-md hover:rounded-xl hover:bg-blue-400 duration-300 border-yellow-400 border-2 md:text-lg text-sm font-semibold text-white'><Link to="/counter">Count Nutritions</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Header