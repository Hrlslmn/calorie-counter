import React from 'react'

function DisplayInfo(props) {
  const{name,calories} = props
  return (
    <div className='mt-4 bg-gray-600 p-4 rounded-lg border-2 border-yellow-200'>
        <h2 className='text-[30px] text-white font-semibold'>Meal: {name}</h2>
        <h3 className='text-[30px] text-white font-semibold'>Calories: {calories} </h3>
    </div>
  )
}

export default DisplayInfo