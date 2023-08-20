import React from 'react'
import LinkSidebar from '../components/LinkSidebar'
import { Link } from 'react-router-dom'
import plantbased from '../images/plant-based.jpg'

function Plantbased() {
  return (
    <div>
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
      <h2 className="text-3xl font-bold lg:text-4xl  dark:text-white">The Power of Plant-Based Proteins: Building Muscle the Healthy Way</h2>
      <div className="flex items-center gap-x-5">
        <a className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200" href="/">
          Food recommendations
        </a>
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">January 18, 2023</p>
      </div>
      <div className="text-center">
        <div className="grid grid-col-auto gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-3">
            <figure className="relative w-full lg:h-[500px] h-60">
              <img className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" src={plantbased} alt="/"/>
            </figure>
          </div>
        </div>

        <span className="mt-3 block text-sm text-center text-gray-500">
          Healthy Foods
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold dark:text-white">When it comes to building muscle, protein is essential. Many people assume that animal products are the only way to get sufficient protein intake, but plant-based proteins are a valuable and healthful option. Here's why you should consider incorporating plant-based proteins into your diet:</h3>           
      </div>

      <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
        <li className="list-points"><span className='point-highlight'>Legumes:</span> Lentils, chickpeas, and beans are excellent sources of protein and fiber, promoting muscle growth and aiding digestion.</li>
        <li className="list-points"><span className='point-highlight'>Tofu and Tempeh</span> Made from soybeans, these options are rich in protein and contain all essential amino acids, essential for muscle repair.</li>
        <li className="list-points"><span className='point-highlight'>Quinoa:</span> A complete protein source, quinoa contains all nine essential amino acids, making it ideal for muscle development</li>
        <li className="list-points"><span className='point-highlight'>Nuts and Seeds</span> Almonds, chia seeds, and pumpkin seeds offer protein, healthy fats, and other nutrients that support muscle health.</li>
        <li className="list-points"><span className='point-highlight'>Seitan: </span> Also known as wheat gluten, seitan is high in protein and provides a meaty texture that can be used in various dishes.</li>
        <li className="list-points"><span className='point-highlight'>Spirulina: </span>  A blue-green algae, spirulina is rich in protein and contains vitamins, minerals, and antioxidants that aid in recovery.</li>
      </ul>

      <p className="text-lg text-gray-800 dark:text-gray-200">By incorporating a variety of plant-based protein sources into your diet, you can effectively build and maintain muscle while reaping the benefits of a diet rich in vitamins, minerals, and antioxidants.</p>
            </div>
          </div>
        </div>
      <LinkSidebar />
      </div>
    </div>
    </div>
  )
}

export default Plantbased