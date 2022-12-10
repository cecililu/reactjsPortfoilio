import React from 'react'
import cecil from './cecil.jpg';
export const Intro = () => {
  return (
    <div>
         <div className="flex flex-wrap justify-center mt-20">
           <img className="object-contain w-60 h-60 rounded-full border border-gray-100 bg-gray-100 shadow-sm" src={cecil} alt="user image" />
           
        </div>
        <div class="grid justify-items-center">
                    <h1 class="text-5xl font-bold mt-4 text-white">Cecil Ghimire</h1>
                    <p class="text-xl mt-2 text-gray-200">Aspiring React JS, Node JS, Django, Django REST Developer</p>
                </div>
    </div>
  )
}
