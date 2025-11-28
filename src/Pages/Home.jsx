import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import  Categories  from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'

const Home = () => {
 let {cate,setCate,input} = useContext(dataContext)

  function filter(category) {
    if(category === "All"){
      setCate(food_items)
    }else{
    let newList=  food_items.filter((item)=> (item.food_category=== category))
     setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
       <Navbar />
      
       <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=> {
          return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all transform hover:scale-[1.015] duration-300' onClick={()=>filter(item.name)} >
            {item.icon}
            {item.name}
            </div>
        })}
       </div>
       <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image}
          price={item.price} id={item.id} type={item.food_type}/>
        ))}
       </div>
       
    </div>
  )
}

export default Home
