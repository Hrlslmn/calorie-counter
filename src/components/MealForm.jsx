import Axios from 'axios'
import DisplayInfo from './DisplayInfo';
import { Link } from 'react-router-dom';

function MealForm(props) {  
  const {setCalories,setName,setMeal,meal,name,calories} = props
  //Fetch API
  const fetchData=()=>{
    Axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${meal}`, {
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }).then((res)=> {
    setCalories(res.data[0].calories + " Calories")
    setName(res.data[0].name)
    console.log(res.data)
  })};
  return (
    <div className='h-screen w w-full grid md:grid-cols-2 md:place-items-center grid-cols-1 bg-dark'>
      <div className='md:justify-self-end justify-self-center md:mr-4 md:p-[20px] py-4'>
        <label className='md:text-[40px] text-[30px] text-yellow-400 font-semibold'>Enter Meal:</label>
        <input type="text" onChange={(e)=>{setMeal(e.target.value)}} class="py-2 px-5 md:mr-[120px] block my-3 sm:w-[400px] w-[300px] border-yellow-400 border-2 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-black dark:text-black font-semibold" placeholder='Enter meal'/>
        <div className='p-2'>
          <p className='font-semibold text-white text-xs'>Input Example: 1kg chicken, 500g rice, 2 plate fried rice </p>
        </div>
        <div className='py-2'>
            <button onClick={fetchData} className='bg-yellow-400 px-4 py-1 rounded-2xl font-bold border-2 border-black shadow-xl'>Submit</button>
        </div>
        <DisplayInfo name={name} calories={calories} />
        <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-yellow-400 pt-4" to="/">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          Back to homepage
        </Link>
      </div>
      <div className='md:justify-self-start justify-self-center '>
        <img src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='border-t-2 border-b-2 sm:border-l-2 sm:border-r-2 border-black'/>
      </div>
    </div>
  )
}

export default MealForm