import React from 'react'
import { Link } from 'react-router-dom'
import superfood from '../images/superfood-2.jpg'
import plantbased from '../images/plant-based.jpg'

const article = [
    {
        title:"10 Superfoods for a Nutrient-Rich Diet",
        image:superfood,
        route:"/superfood"
    },
    {
        title:"The power of plant-based proteins: building muscle the healthy way",
        image:plantbased,
        route:"/plantbased"
    },
    {
        title:"Balanced nutrtion: creating wholesome meals for weight management",
        image:"https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        route:"/balanced"
    },
    {
        title:"The gut health connection: foods for a happy digestive system",
        image:"https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        route:"/gut"
    },
    {
        title:"Heart-healthy diet: foods for cardiovascular wellness",
        image:"https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        route:"/heart"
    },

]

function LinkSidebar() {
  return (
    <div>
        <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-700 lg:via-transparent lg:to-transparent dark:from-slate-800 md:border-l-2 md:border-white p-4">
      <div className="sticky top-0 left-0 py-8 lg:pl-4 ">
        <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-yellow-400">
          <p className='text-xl font-semibold text-white'>See other related articles</p>
        </div>
        <div className="space-y-6"></div>
        {
            article.map(function(data){
                return(
                    <Link className="group flex items-center gap-x-6" to={data.route}>
                        <div class="grow">
                        <span className="text-base font-semibold text-gray-800 group-hover:text-yellow-400 dark:text-gray-200 dark:group-hover:text-yellow-400">
                            {data.title}
                        </span>
                        </div>
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg p-2" src={data.image} alt="/"/>
                        </div>
                    </Link>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default LinkSidebar