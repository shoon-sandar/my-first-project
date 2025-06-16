import React from 'react'
import image from "./assets/pexels-mubazbasheer-916017.jpg"
const App = () => {
  return (
    <>
  
    <div className='w-screen h-screen flex items-center justify-center '>
    <div className='w-[80%] flex items-center justify between gap-2 bg-slate-100 rounded -full shadow-xl shadow-black/100'>
    <img src={image} alt="" className='w-[200px] h-[130px] rounded-l-full' />
      <div className='flex flex-col items-start justify-center gap-2 p-4'>
        <h1 className='text-2xl font-bold'>Tailwind CSS</h1>
        <p className='text-gray-600'>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.</p>
        <p className='text-gray-600'>It allows for rapid UI development with a focus on responsiveness and customization.</p>
      </div>
    </div>
    </div>
    <p>  When controlling the flow of text, using the CSS property <span class="inline">display: inline</span> will cause the  text inside the element to wrap normally.</p><p>  While using the property <span class="inline-block">display: inline-block</span> will wrap the element to prevent the  text inside from extending beyond its parent.</p><p>  Lastly, using the property <span class="block">display: block</span> will put the element on its own line and fill its  parent.</p>
    </>
  )
}

export default App