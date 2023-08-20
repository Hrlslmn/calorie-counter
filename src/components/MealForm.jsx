import Axios from 'axios'
import DisplayInfo from './DisplayInfo';

function MealForm(props) {  
  const {setCalories,setName,setMeal,meal,name,calories} = props
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
    <div className='h-screen w w-full grid md:grid-cols-2 place-items-center grid-cols-1 bg-dark'>
      <div className='md:justify-self-end justify-self-center mr-4'>
        <label className='md:text-[40px] text-[30px] text-yellow-400 font-semibold'>Enter Meal:</label>
        <input type="text" onChange={(e)=>{setMeal(e.target.value)}} class="py-2 px-5 mr-[120px] block my-3 sm:w-[200px] lg:w-[400px]  border-yellow-400 border-2 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-yellow-400 dark:text-black font-semibold"/>
        <div>
            <button onClick={fetchData} className='bg-white px-4 py-2 rounded-2xl font-bold'>Submit</button>
        </div>
        <DisplayInfo name={name} calories={calories} />
      </div>
      
      <div className='md:justify-self-start'>
        <img src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-[100%] h-auto p-4 shadow-lg' />
      </div>
    </div>
  )
}

export default MealForm