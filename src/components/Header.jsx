import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
        <div>
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
  )
}

export default Header
