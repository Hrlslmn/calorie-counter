import React from 'react'

function DisplayInfo(props) {
  const{name,calories} = props
  return (
    <div className='mt-4 bg-blue-950 p-4 rounded-lg border-2 border-white'>
        <h2 className='display-meal-calories'>Meal: {name}</h2>
        <h3 className='display-meal-calories'>{calories}  </h3>
    </div>
  )
}

export default DisplayInfo