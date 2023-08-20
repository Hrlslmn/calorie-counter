import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
<<<<<<< HEAD
        <div className='relative'>
            <img src={header} alt="" className='border-b-4 border-yellow-400' />
            <div className='absolute md:bottom-[35%] md:left-[50px] left-[15px] bg-gray-800 bg-opacity-60 rounded-md bottom-[80px] md:mb-4'>
                <h1 className='md:text-[25px] lg:text-[50px] md:p-[30px] p-2 text-sm text-white font-semibold'>Counting nutritions doesn't have to be complicated</h1>

=======
        <div>
>>>>>>> parent of cd9a7b3 (update)
            <Navbar/>
        </div>
        <div>
            <div>
                <h1 className='font-serif'>Counting nutritions doesn't have to be complicated</h1>
            </div>
            <div>
                <button>Count Nutritions</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header