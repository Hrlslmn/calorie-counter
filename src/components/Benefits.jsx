import React from 'react'
import { Link } from 'react-router-dom'

function Benefits() {
  return (
    <div>
      <div className="w-[100%] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Health Blogs</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400 mb-4">Stay in the healthy zone with our latest health related articles.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link className="group rounded-xl overflow-hidden" to='/superfood'>
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=''/>
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
              Must read
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-gray-600">
            10 Superfoods for a Nutrient-Rich Diet
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
              Maintaining a healthy diet is essential for overall well-being...
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </Link>

        <Link className="group rounded-xl overflow-hidden" to="/plantbased">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1540298901673-82186025e606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHklMjBmb29kc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-gray-600">
              The Power of Plant-Based Proteins: Building Muscle the Healthy Way
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
            When it comes to building muscle, protein is essential...
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </Link>

        <Link className="group rounded-xl overflow-hidden" to="/balanced">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1475332363216-323c9b7f1e81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWx0aHklMjBmb29kc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-gray-600">
              Balanced Nutrition: Creating Wholesome Meals for Weight Management
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
              Achieving and maintaining a healthy weight requires more than just counting calories...
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </Link>

        <Link className="group rounded-xl overflow-hidden" to="/gut">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1498604214351-227898deb373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGd1dCUyMGhlYWx0aHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-gray-600">
              The Gut-Health Connection: Foods for a Happy Digestive System
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
              A healthy gut is essential for overall well-being...
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </Link>

        <Link className="group rounded-xl overflow-hidden" to="/heart">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvdmFzY3VsYXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-gray-600">
              Heart-Healthy Diet: Foods for Cardiovascular Wellness
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
            Maintaining a heart-healthy diet is crucial for preventing cardiovascular diseases and promoting overall heart wellness...
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Benefits