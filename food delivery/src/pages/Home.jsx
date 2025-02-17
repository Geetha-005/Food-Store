import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from 'react-icons/rx';
import Card2 from '../components/Card2';
import { toast } from 'react-toastify';

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filterr(category) {
    console.log("Selected Category:", category);
    
    if (category === "All") {
      console.log("Resetting to all items.");
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtered List:", newList);
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  let deliveryFee = 20;
  let taxes = subTotal * 0.5 / 100;
  let total = subTotal + deliveryFee + taxes;

  return (
    <div  className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start 
              text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl 
              hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filterr(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8">
        {cate.length>1? cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))
      :<div className='text-center text-2xl text-green-500 font-semibold pt-5'>No dish found</div>}
      </div>

      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white 
          shadow-xl p-6  duration-500 flex flex-col items-center overflow-auto  ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <RxCross2 
            className='w-[20px] h-[20px] text-green-400 text-[25px] font-bold cursor-pointer hover:text-gray-600' 
            onClick={() => setShowCart(false)}
          />
        </header>
        {items.length>0?
        <>
        <div className='w-full mt-8 flex flex-col gap-8'>
          {items.map((item) => (
            <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>
        
        <div className='w-full border-t-2 border-b-2  border-gray-500 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-xl text-gray-600 font-semibold'>Subtotal:</span>
            <span className='text-green-400 font-semibold text-lg'>Rs{subTotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-700 font-semibold'>Delivery Fee:</span>
            <span className='text-green-400 font-semibold text-lg'>Rs{deliveryFee}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-xl text-gray-800 font-semibold'>Taxes:</span>
            <span className='text-green-400 font-semibold text-lg '>Rs{taxes.toFixed(2)}/-</span>
          </div>
          <div className='w-full flex justify-between items-center  border-gray-400 p-9'>
            <span className='text-xl text-gray-900 font-bold'>Total:</span>
            <span className='text-green-600 font-bold text-lg'>Rs {total.toFixed(2)} /-</span>
          </div>
          <button className='w-[80%] p-4 bg-green-500 text-white-700  hover:bg-green-400
        rounded-lg transition-all' onClick={()=>{
          toast.success("Order placed....")
        }}>Place Order</button>
</div>
</>:<div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty cart</div>}
        

     
    </div>
    </div>

  );
}

export default Home;
