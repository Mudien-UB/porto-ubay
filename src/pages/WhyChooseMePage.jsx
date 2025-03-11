import React from 'react'

export default function WhyChooseMePage() {
  return (
    <div className="w-11/12 mx-auto h-max py-10 flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl">
        <h3 className="text-3xl font-bold mb-4">Why Choose Me</h3>
        <ul className="text-lg text-gray-700 leading-relaxed text-left">
          {[
            "Strong focus on creating user-friendly and visually appealing web and mobile applications.",
            "Believes in clean and efficient code, ensuring maintainability and readability.",
            "Passionate about learning new technologies and optimizing application performance.",
            "Enjoys solving complex technical challenges with innovative solutions.",
            "Seeks opportunities to collaborate and create impactful digital experiences."
          ].map((item, index) => (
            <li 
              key={index} 
              className="mb-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}