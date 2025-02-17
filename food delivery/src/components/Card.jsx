import React from 'react';
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';
import {useDispatch}  from 'react-redux';

function Card({name,image,id,price,type}) {
  let dispatch=useDispatch();
  
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2
    border-green-300 cursor-pointer'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg '>
            <img src={image} alt='' className='object-cover'/>
        </div>
<div>
    {name}
</div>
<div className='text-2xl font-semibold'>
    <div className='w-full flex justify-between items-center'>
    <div className='text-lg font-bold text-green-500'>Rs {price} /-</div>
    <div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold'>
    {type=="veg"? <LuLeafyGreen /> :<GiChickenOven />}
      <span>{type}</span></div>
    </div>
</div>
<button className='w-full p-4 bg-green-500 text-white-700  hover:bg-green-400
        rounded-lg transition-all' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,
          image:image,qty:1}));
        toast.success("item added")
        
        
             }     }>Add To Dish</button>
    </div>
    

  )
}


export default Card;
