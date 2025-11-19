import React from 'react'
import Navbar from '../components/Navbar'
import  Categories  from '../Categories'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
       <Navbar />
       <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=> {
          return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all transform hover:scale-[1.015] duration-300'>
            {item.icon}
            {item.name}
            </div>
        })}
       </div>
       <Card />
       
    </div>
  )
}

export default Home
