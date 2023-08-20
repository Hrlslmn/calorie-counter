import React from 'react'

function DisplayInfo(props) {
  const{name,calories} = props
  return (
    <div>
        <h2>Meal: {name}</h2>
        <h3>Calories: {calories} </h3>
    </div>
  )
}

export default DisplayInfo