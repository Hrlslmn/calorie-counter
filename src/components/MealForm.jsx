import { useState } from 'react';
import Axios from 'axios'

function MealForm() {  
  const [meal,setMeal]=useState("")
  const [calories,setCalories]=useState("")
  const [name,setName]=useState("")
  //Fetch API
  const fetchData=()=>{
    Axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${meal}`, {
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }).then((res)=> {
    setCalories(res.data[0].calories)
    setName(res.data[0].name)
    console.log(res.data)
  })};
  return (
    <>
        <label>Enter Meal:</label>
        <input type="text" onChange={(e)=>{setMeal(e.target.value)}}/>
        <button onClick={fetchData}>Submit</button>
        <h2>Meal: {name}</h2>
        <h3>Calories: {calories}</h3>
    </>
  )
}

export default MealForm