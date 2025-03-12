import React from 'react'

export default function WhyChooseMePage() {

  const whyPoint = [
    "Fullstack developer with a strong ability to build scalable and efficient web applications.",
    "Committed to writing clean, maintainable, and well-structured code.",
    "Experienced in designing and optimizing RESTful APIs to enhance application performance.",
    "Passionate about solving technical challenges and implementing innovative solutions.",
    "Enjoys collaborating on impactful projects to create seamless digital experiences."
  ];
  
  

  return (
    <section className="w-11/12 mx-auto h-max py-10 flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl flex flex-col gap-15">
        <h1 className="text-5xl font-montserrat font-bold underline underline-offset-auto text-ivory-500 mb-4">Why Choose Me</h1>
        <ul className="text-lg text-golden-brown leading-relaxed text-left">
          {whyPoint.map((item, index) => (
            <li 
              key={index} 
              className="mb-2 p-4 bg-ivory-500 font-medium border rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}