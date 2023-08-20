import React from 'react'
import MealForm from '../components/MealForm'

import { useState } from 'react'

function MealInfo() {
  const [meal,setMeal]=useState("")
  const [calories,setCalories]=useState("")
  const [name,setName]=useState("")
  return (
    <div>
        <div>
            <MealForm setCalories={setCalories} setName={setName} setMeal={setMeal} meal={meal} calories={calories} name={name} />
        </div>
    </div>
  )
}

export default MealInfo