import React from 'react'
import LinkSidebar from '../components/LinkSidebar'
import { Link } from 'react-router-dom'

function Gut() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 ">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pr-4 ">
            <div className="space-y-5 lg:space-y-8">
              <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400" to="/">
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                Back to homepage
              </Link>
      <h2 className="text-3xl font-bold lg:text-4xl  dark:text-white">10 Superfoods for a Nutrient-Rich Diet</h2>
      <div className="flex items-center gap-x-5">
        <a className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200" href="/">
          Food recommendations
        </a>
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">January 18, 2023</p>
      </div>
      <div className="text-center">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <figure className="relative w-full h-60">
              <img className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="/"/>
            </figure>
            <figure className="relative w-full h-60">
              <img className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="/"/>
            </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
            <img className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="/"/>
          </figure>
        </div>

        <span className="mt-3 block text-sm text-center text-gray-500">
          Healthy Foods
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold dark:text-white">Maintaining a healthy diet is essential for overall well-being. Incorporating superfoods into your meals can provide an abundance of nutrients that support your body's functions. Here are 10 superfoods you should consider adding to your diet:</h3>           
      </div>

      <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
        <li className="list-points"><span className='point-highlight'>Blueberries:</span> Packed with antioxidants, vitamins, and fiber, blueberries promote brain health and may lower the risk of chronic diseases.</li>
        <li className="list-points"><span className='point-highlight'>Spinach:</span> This leafy green is rich in iron, vitamins A and C, and folate, contributing to strong bones and a healthy immune system.</li>
        <li className="list-points"><span className='point-highlight'>Salmon:</span> A great source of omega-3 fatty acids, salmon supports heart health and reduces inflammation.</li>
        <li className="list-points"><span className='point-highlight'>Quinoa:</span> High in protein and fiber, quinoa is a versatile grain that helps stabilize blood sugar levels and aids digestion.</li>
        <li className="list-points"><span className='point-highlight'>Avocado: </span>Loaded with healthy monounsaturated fats and potassium, avocados are good for heart health and skin hydration.</li>
        <li className="list-points"><span className='point-highlight'>Kale:</span> Another nutrient powerhouse, kale is rich in vitamins K, A, and C, as well as antioxidants, promoting bone health and lowering inflammation.</li>
        <li className="list-points"><span className='point-highlight'>Chia Seeds:</span> These tiny seeds are high in fiber and omega-3 fatty acids, aiding digestion and promoting satiety.</li>
        <li className="list-points"><span className='point-highlight'>Greek Yogurt:</span> Packed with probiotics and protein, Greek yogurt supports gut health and contributes to muscle maintenance.</li>
        <li className="list-points"><span className='point-highlight'>Sweet Potatoes:</span> A great source of vitamins A and C, fiber, and complex carbohydrates, sweet potatoes provide sustained energy and support vision.</li>
        <li className="list-points"><span className='point-highlight'>Nuts:</span> Almonds, walnuts, and other nuts are high in healthy fats, protein, and fiber, benefiting heart health and weight management.</li>
      </ul>

      <p className="text-lg text-gray-800 dark:text-gray-200">Incorporating these nutrient-dense superfoods into your meals can have a positive impact on your health and well-being. Remember, variety is key to ensuring you get a wide range of nutrients.</p>
            </div>
          </div>
        </div>
      <LinkSidebar />
      </div>
    </div>
  )
}

export default Gut