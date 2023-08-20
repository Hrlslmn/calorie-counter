import React from 'react'
import MealForm from '../components/MealForm'
import DisplayInfo from '../components/DisplayInfo'
import { useState } from 'react'

function MealInfo() {
  const [meal,setMeal]=useState("")
  const [calories,setCalories]=useState("")
  const [name,setName]=useState("")
  return (
    <div>
        <div>
            <MealForm setCalories={setCalories} setName={setName} setMeal={setMeal} meal={meal} />
        </div>
        <div>
            <DisplayInfo calories={calories} name={name}/>
        </div>
    </div>
  )
}

export default MealInfo