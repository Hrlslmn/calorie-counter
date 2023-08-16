import React from 'react'
import MealForm from '../components/MealForm'
import DisplayInfo from '../components/DisplayInfo'

function MealInfo() {
  return (
    <div>
        <div>
            <MealForm />
        </div>
        <div>
            <DisplayInfo />
        </div>
    </div>
  )
}

export default MealInfo