import Axios from 'axios'

function MealForm(props) {  
  const {setCalories,setName,setMeal,meal} = props
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
        <div>
            <button onClick={fetchData}>Submit</button>
        </div>
    </>
  )
}

export default MealForm